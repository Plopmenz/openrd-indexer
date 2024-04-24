export const RFPsContract = {
  address: "0x6Fa945AeaA0a5E80F79eff0BC06F0244412A3035",
  abi: [
    {
      type: "constructor",
      inputs: [{ name: "_tasks", type: "address", internalType: "contract ITasks" }],
      stateMutability: "nonpayable",
    },
    { type: "receive", stateMutability: "payable" },
    {
      type: "function",
      name: "acceptProject",
      inputs: [
        { name: "_rfpId", type: "uint256", internalType: "uint256" },
        { name: "_projectId", type: "uint32", internalType: "uint32" },
        { name: "_nativeReward", type: "uint96[]", internalType: "uint96[]" },
        { name: "_reward", type: "uint88[]", internalType: "uint88[]" },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "createRFP",
      inputs: [
        { name: "_metadata", type: "string", internalType: "string" },
        { name: "_deadline", type: "uint64", internalType: "uint64" },
        {
          name: "_budget",
          type: "tuple[]",
          internalType: "struct ITasks.ERC20Transfer[]",
          components: [
            {
              name: "tokenContract",
              type: "address",
              internalType: "contract IERC20",
            },
            { name: "amount", type: "uint96", internalType: "uint96" },
          ],
        },
        { name: "_tasksManager", type: "address", internalType: "address" },
        { name: "_disputeManager", type: "address", internalType: "address" },
        { name: "_manager", type: "address", internalType: "address" },
      ],
      outputs: [{ name: "rfpId", type: "uint256", internalType: "uint256" }],
      stateMutability: "payable",
    },
    {
      type: "function",
      name: "emptyRFP",
      inputs: [{ name: "_rfpId", type: "uint256", internalType: "uint256" }],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "escrowImplementation",
      inputs: [],
      outputs: [{ name: "", type: "address", internalType: "address" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getRFP",
      inputs: [{ name: "_rfpId", type: "uint256", internalType: "uint256" }],
      outputs: [
        {
          name: "offchainRFP",
          type: "tuple",
          internalType: "struct IRFPs.OffChainRFP",
          components: [
            { name: "metadata", type: "string", internalType: "string" },
            { name: "deadline", type: "uint64", internalType: "uint64" },
            {
              name: "escrow",
              type: "address",
              internalType: "contract RFPEscrow",
            },
            { name: "creator", type: "address", internalType: "address" },
            { name: "tasksManager", type: "address", internalType: "address" },
            {
              name: "disputeManager",
              type: "address",
              internalType: "address",
            },
            { name: "manager", type: "address", internalType: "address" },
            {
              name: "budget",
              type: "address[]",
              internalType: "contract IERC20[]",
            },
            {
              name: "projects",
              type: "tuple[]",
              internalType: "struct IRFPs.OffchainProject[]",
              components: [
                { name: "metadata", type: "string", internalType: "string" },
                {
                  name: "representative",
                  type: "address",
                  internalType: "address",
                },
                { name: "deadline", type: "uint64", internalType: "uint64" },
                { name: "accepted", type: "bool", internalType: "bool" },
                {
                  name: "nativeReward",
                  type: "tuple[]",
                  internalType: "struct ITasks.NativeReward[]",
                  components: [
                    { name: "to", type: "address", internalType: "address" },
                    { name: "amount", type: "uint96", internalType: "uint96" },
                  ],
                },
                {
                  name: "reward",
                  type: "tuple[]",
                  internalType: "struct ITasks.Reward[]",
                  components: [
                    { name: "nextToken", type: "bool", internalType: "bool" },
                    { name: "to", type: "address", internalType: "address" },
                    { name: "amount", type: "uint88", internalType: "uint88" },
                  ],
                },
              ],
            },
          ],
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getRFPs",
      inputs: [{ name: "_rfpIds", type: "uint256[]", internalType: "uint256[]" }],
      outputs: [
        {
          name: "",
          type: "tuple[]",
          internalType: "struct IRFPs.OffChainRFP[]",
          components: [
            { name: "metadata", type: "string", internalType: "string" },
            { name: "deadline", type: "uint64", internalType: "uint64" },
            {
              name: "escrow",
              type: "address",
              internalType: "contract RFPEscrow",
            },
            { name: "creator", type: "address", internalType: "address" },
            { name: "tasksManager", type: "address", internalType: "address" },
            {
              name: "disputeManager",
              type: "address",
              internalType: "address",
            },
            { name: "manager", type: "address", internalType: "address" },
            {
              name: "budget",
              type: "address[]",
              internalType: "contract IERC20[]",
            },
            {
              name: "projects",
              type: "tuple[]",
              internalType: "struct IRFPs.OffchainProject[]",
              components: [
                { name: "metadata", type: "string", internalType: "string" },
                {
                  name: "representative",
                  type: "address",
                  internalType: "address",
                },
                { name: "deadline", type: "uint64", internalType: "uint64" },
                { name: "accepted", type: "bool", internalType: "bool" },
                {
                  name: "nativeReward",
                  type: "tuple[]",
                  internalType: "struct ITasks.NativeReward[]",
                  components: [
                    { name: "to", type: "address", internalType: "address" },
                    { name: "amount", type: "uint96", internalType: "uint96" },
                  ],
                },
                {
                  name: "reward",
                  type: "tuple[]",
                  internalType: "struct ITasks.Reward[]",
                  components: [
                    { name: "nextToken", type: "bool", internalType: "bool" },
                    { name: "to", type: "address", internalType: "address" },
                    { name: "amount", type: "uint88", internalType: "uint88" },
                  ],
                },
              ],
            },
          ],
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "owner",
      inputs: [],
      outputs: [{ name: "", type: "address", internalType: "address" }],
      stateMutability: "pure",
    },
    {
      type: "function",
      name: "rescue",
      inputs: [
        { name: "token", type: "address", internalType: "contract IERC20" },
        { name: "to", type: "address", internalType: "address" },
        { name: "amount", type: "uint256", internalType: "uint256" },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "rescueNative",
      inputs: [
        { name: "to", type: "address", internalType: "address payable" },
        { name: "amount", type: "uint256", internalType: "uint256" },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "rfpCount",
      inputs: [],
      outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "submitProject",
      inputs: [
        { name: "_rfpId", type: "uint256", internalType: "uint256" },
        { name: "_metadata", type: "string", internalType: "string" },
        { name: "_deadline", type: "uint64", internalType: "uint64" },
        {
          name: "_nativeReward",
          type: "tuple[]",
          internalType: "struct ITasks.NativeReward[]",
          components: [
            { name: "to", type: "address", internalType: "address" },
            { name: "amount", type: "uint96", internalType: "uint96" },
          ],
        },
        {
          name: "_reward",
          type: "tuple[]",
          internalType: "struct ITasks.Reward[]",
          components: [
            { name: "nextToken", type: "bool", internalType: "bool" },
            { name: "to", type: "address", internalType: "address" },
            { name: "amount", type: "uint88", internalType: "uint88" },
          ],
        },
      ],
      outputs: [{ name: "projectId", type: "uint32", internalType: "uint32" }],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "tasks",
      inputs: [],
      outputs: [{ name: "", type: "address", internalType: "contract ITasks" }],
      stateMutability: "view",
    },
    {
      type: "event",
      name: "ProjectAccepted",
      inputs: [
        {
          name: "rfpId",
          type: "uint256",
          indexed: true,
          internalType: "uint256",
        },
        {
          name: "projectId",
          type: "uint32",
          indexed: false,
          internalType: "uint32",
        },
        {
          name: "nativeReward",
          type: "uint96[]",
          indexed: false,
          internalType: "uint96[]",
        },
        {
          name: "reward",
          type: "uint88[]",
          indexed: false,
          internalType: "uint88[]",
        },
        {
          name: "taskId",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "ProjectSubmitted",
      inputs: [
        {
          name: "rfpId",
          type: "uint256",
          indexed: true,
          internalType: "uint256",
        },
        {
          name: "projectId",
          type: "uint32",
          indexed: false,
          internalType: "uint32",
        },
        {
          name: "metadata",
          type: "string",
          indexed: false,
          internalType: "string",
        },
        {
          name: "representative",
          type: "address",
          indexed: false,
          internalType: "address",
        },
        {
          name: "deadline",
          type: "uint64",
          indexed: false,
          internalType: "uint64",
        },
        {
          name: "nativeReward",
          type: "tuple[]",
          indexed: false,
          internalType: "struct ITasks.NativeReward[]",
          components: [
            { name: "to", type: "address", internalType: "address" },
            { name: "amount", type: "uint96", internalType: "uint96" },
          ],
        },
        {
          name: "reward",
          type: "tuple[]",
          indexed: false,
          internalType: "struct ITasks.Reward[]",
          components: [
            { name: "nextToken", type: "bool", internalType: "bool" },
            { name: "to", type: "address", internalType: "address" },
            { name: "amount", type: "uint88", internalType: "uint88" },
          ],
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "RFPCreated",
      inputs: [
        {
          name: "rfpId",
          type: "uint256",
          indexed: true,
          internalType: "uint256",
        },
        {
          name: "metadata",
          type: "string",
          indexed: false,
          internalType: "string",
        },
        {
          name: "deadline",
          type: "uint64",
          indexed: false,
          internalType: "uint64",
        },
        {
          name: "nativeBudget",
          type: "uint256",
          indexed: false,
          internalType: "uint256",
        },
        {
          name: "budget",
          type: "tuple[]",
          indexed: false,
          internalType: "struct ITasks.ERC20Transfer[]",
          components: [
            {
              name: "tokenContract",
              type: "address",
              internalType: "contract IERC20",
            },
            { name: "amount", type: "uint96", internalType: "uint96" },
          ],
        },
        {
          name: "creator",
          type: "address",
          indexed: false,
          internalType: "address",
        },
        {
          name: "tasksManager",
          type: "address",
          indexed: false,
          internalType: "address",
        },
        {
          name: "disputeManager",
          type: "address",
          indexed: false,
          internalType: "address",
        },
        {
          name: "manager",
          type: "address",
          indexed: false,
          internalType: "address",
        },
        {
          name: "escrow",
          type: "address",
          indexed: false,
          internalType: "contract RFPEscrow",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "RFPEmptied",
      inputs: [
        {
          name: "rfpId",
          type: "uint256",
          indexed: true,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "error",
      name: "AddressEmptyCode",
      inputs: [{ name: "target", type: "address", internalType: "address" }],
    },
    {
      type: "error",
      name: "AddressInsufficientBalance",
      inputs: [{ name: "account", type: "address", internalType: "address" }],
    },
    { type: "error", name: "ERC1167FailedCreateClone", inputs: [] },
    { type: "error", name: "FailedInnerCall", inputs: [] },
    { type: "error", name: "NativeTransferFailed", inputs: [] },
    { type: "error", name: "NotManager", inputs: [] },
    { type: "error", name: "Overflow", inputs: [] },
    { type: "error", name: "ProjectAlreadyAccepted", inputs: [] },
    { type: "error", name: "ProjectDoesNotExist", inputs: [] },
    { type: "error", name: "RFPClosed", inputs: [] },
    { type: "error", name: "RFPDoesNotExist", inputs: [] },
    { type: "error", name: "RewardDoesntEndWithNextToken", inputs: [] },
    {
      type: "error",
      name: "SafeERC20FailedOperation",
      inputs: [{ name: "token", type: "address", internalType: "address" }],
    },
  ],
} as const;
