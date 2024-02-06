import {
  Abi,
  Chain,
  ContractEventName,
  createPublicClient,
  PublicClient,
  WatchContractEventParameters,
  webSocket,
} from "viem"

import { chains, publicClients } from "./chain-cache"

export class ContractWatcher {
  public chain: Chain
  private client: PublicClient
  private watching: {
    [watchId: string]: { start: () => void; stop: () => void }
  }

  constructor({
    chain,
    httpRPC,
    websocketRPC,
  }: {
    chain: Chain
    httpRPC: string
    websocketRPC: string
  }) {
    this.chain = {
      ...chain,
      rpcUrls: {
        default: {
          http: [httpRPC],
          webSocket: [websocketRPC],
        },
        public: {
          http: [httpRPC],
          webSocket: [websocketRPC],
        },
      },
    }
    this.client = createPublicClient({
      chain: this.chain,
      transport: webSocket(),
    })
    this.watching = {}
    this.refresh() // Start refresh loop to keep connection alive

    // Expose this info for other classes to use
    chains[this.chain.id] = this.chain
    publicClients[this.chain.id] = this.client
  }

  private refresh(): void {
    this.getWatched().forEach((watchId) => {
      this.watching[watchId].stop()
      this.watching[watchId].start()
    })
    setTimeout(this.refresh, 60 * 60 * 1000)
  }

  public startWatching<
    abi extends Abi | readonly unknown[] = Abi,
    eventName extends
      | ContractEventName<abi>
      | undefined = ContractEventName<abi>,
    strict extends boolean | undefined = undefined,
  >(
    watchId: string,
    parameters: Omit<
      WatchContractEventParameters<abi, eventName, strict>,
      "onError"
    >
  ): void {
    if (this.watching[watchId]) {
      this.watching[watchId].stop()
    }

    this.watching[watchId] = {
      start: () => {
        this.watching[watchId].stop = this.client.watchContractEvent({
          ...parameters,
          onError: (err) => {
            console.error(`Watching ${watchId} error: ${JSON.stringify(err)}`)
            this.watching[watchId].stop()
            this.watching[watchId].start()
          },
        })
      },
      stop: () => {},
    }

    this.watching[watchId].start()
  }

  public stopWatching(watchId: string): void {
    if (!this.watching[watchId]) {
      throw new Error(`Tried to remove ${watchId}, but its not being watched.`)
    }

    this.watching[watchId].stop()
    delete this.watching[watchId]
  }

  public getWatched(): string[] {
    return Object.keys(this.watching)
  }

  public stopAll(): void {
    this.getWatched().forEach((watchId) => {
      this.stopWatching(watchId)
    })
  }
}
