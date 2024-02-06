import { Storage } from ".."
import { TasksContract } from "../contracts/Tasks"
import { ApplicationAccepted } from "../types/task-events"
import { ContractWatcher } from "../utils/contract-watcher"
import { createApplicationIfNotExists } from "./taskHelpers"

export function watchApplicationAccepted(
  contractWatcher: ContractWatcher,
  storage: Storage
) {
  contractWatcher.startWatching("ApplicationAccepted", {
    abi: TasksContract.abi,
    address: TasksContract.address,
    eventName: "ApplicationAccepted",
    strict: true,
    onLogs: async (logs) => {
      await Promise.all(
        logs.map(async (log) => {
          const { args, blockNumber, transactionHash, address } = log

          const event = {
            type: "ApplicationAccepted",
            blockNumber,
            transactionHash,
            chainId: contractWatcher.chain.id,
            address: address,
            ...args,
          } as ApplicationAccepted

          await processApplicationAccepted(event, storage)
        })
      )
    },
  })
}

export async function processApplicationAccepted(
  event: ApplicationAccepted,
  storage: Storage
): Promise<void> {
  let taskEvent: number
  await storage.tasksEvents.update((tasksEvents) => {
    taskEvent = tasksEvents.push(event)
  })

  const taskId = event.taskId.toString()
  await storage.tasks.update((tasks) => {
    createApplicationIfNotExists(
      tasks,
      event.chainId,
      taskId,
      event.applicationId
    )
    const task = tasks[event.chainId][taskId]
    const application = task.applications[event.applicationId]
    application.accepted = true

    task.events.push(taskEvent)
  })
}
