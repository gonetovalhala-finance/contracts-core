/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { CheemsFactory, CheemsFactoryInterface } from "../CheemsFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_feeToSetter",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token0",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token1",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "pair",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "PairCreated",
    type: "event",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "allPairs",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "allPairsLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
    ],
    name: "createPair",
    outputs: [
      {
        internalType: "address",
        name: "pair",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "feeTo",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "feeToSetter",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "getPair",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "_feeTo",
        type: "address",
      },
    ],
    name: "setFeeTo",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "_feeToSetter",
        type: "address",
      },
    ],
    name: "setFeeToSetter",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516129f73803806129f78339818101604052602081101561003357600080fd5b5051600180546001600160a01b0319166001600160a01b03909216919091179055612994806100636000396000f3fe608060405234801561001057600080fd5b50600436106100785760003560e01c8063017e7e581461007d578063094b7415146100a15780631e3dd18b146100a9578063574f2ba3146100c6578063a2e74af6146100e0578063c9c6539614610108578063e6a4390514610136578063f46901ed14610164575b600080fd5b61008561018a565b604080516001600160a01b039092168252519081900360200190f35b610085610199565b610085600480360360208110156100bf57600080fd5b50356101a8565b6100ce6101cf565b60408051918252519081900360200190f35b610106600480360360208110156100f657600080fd5b50356001600160a01b03166101d5565b005b6100856004803603604081101561011e57600080fd5b506001600160a01b038135811691602001351661024a565b6100856004803603604081101561014c57600080fd5b506001600160a01b038135811691602001351661056f565b6101066004803603602081101561017a57600080fd5b50356001600160a01b0316610595565b6000546001600160a01b031681565b6001546001600160a01b031681565b600381815481106101b557fe5b6000918252602090912001546001600160a01b0316905081565b60035490565b6001546001600160a01b03163314610228576040805162461bcd60e51b815260206004820152601160248201527021b432b2b6b99d102327a92124a22222a760791b604482015290519081900360640190fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6000816001600160a01b0316836001600160a01b031614156102b3576040805162461bcd60e51b815260206004820152601b60248201527f436865656d733a204944454e544943414c5f4144445245535345530000000000604482015290519081900360640190fd5b600080836001600160a01b0316856001600160a01b0316106102d65783856102d9565b84845b90925090506001600160a01b038216610330576040805162461bcd60e51b8152602060048201526014602482015273436865656d733a205a45524f5f4144445245535360601b604482015290519081900360640190fd5b6001600160a01b038281166000908152600260209081526040808320858516845290915290205416156103a0576040805162461bcd60e51b8152602060048201526013602482015272436865656d733a20504149525f45584953545360681b604482015290519081900360640190fd5b6060604051806020016103b29061060a565b6020820181038252601f19601f8201166040525090506000838360405160200180836001600160a01b03166001600160a01b031660601b8152601401826001600160a01b03166001600160a01b031660601b815260140192505050604051602081830303815290604052805190602001209050808251602084016000f56040805163485cc95560e01b81526001600160a01b038781166004830152868116602483015291519297509087169163485cc9559160448082019260009290919082900301818387803b15801561048557600080fd5b505af1158015610499573d6000803e3d6000fd5b505050506001600160a01b0384811660008181526002602081815260408084208987168086529083528185208054978d166001600160a01b031998891681179091559383528185208686528352818520805488168517905560038054600181018255958190527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b90950180549097168417909655925483519283529082015281517f0d3648bd0f6ba80134a33ba9275ac585d9d315f0ad8355cddefde31afa28d0e9929181900390910190a35050505092915050565b60026020908152600092835260408084209091529082529020546001600160a01b031681565b6001546001600160a01b031633146105e8576040805162461bcd60e51b815260206004820152601160248201527021b432b2b6b99d102327a92124a22222a760791b604482015290519081900360640190fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b612348806106188339019056fe60806040526001600c5534801561001557600080fd5b5060405146908060526122f68239604080519182900360520182208282018252600c83526b0436865656d73776170204c560a41b6020938401528151808301835260018152603160f81b908401528151808401919091527f7cf8204699ab908c557dc3f7af8fc730ca3f5b84849ba6f07f8b17125412145b818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6606082015260808101949094523060a0808601919091528151808603909101815260c09094019052825192019190912060035550600580546001600160a01b031916331790556121ef806101076000396000f3fe608060405234801561001057600080fd5b50600436106101795760003560e01c80636a627842116100d9578063ba9a7a5611610087578063ba9a7a56146104ce578063bc25cf77146104d6578063c45a0155146104fc578063d21220a714610504578063d505accf1461050c578063dd62ed3e1461055d578063fff6cae91461058b57610179565b80636a627842146103e157806370a08231146104075780637464fc3d1461042d5780637ecebe001461043557806389afcb441461045b57806395d89b411461049a578063a9059cbb146104a257610179565b806323b872dd1161013657806323b872dd1461033f57806330adf81f14610375578063313ce5671461037d5780633644e5151461039b578063485cc955146103a35780635909c0d5146103d15780635a3d5493146103d957610179565b8063022c0d9f1461017e57806306fdde031461020c5780630902f1ac14610289578063095ea7b3146102c15780630dfe16811461030157806318160ddd14610325575b600080fd5b61020a6004803603608081101561019457600080fd5b8135916020810135916001600160a01b0360408301351691908101906080810160608201356401000000008111156101cb57600080fd5b8201836020820111156101dd57600080fd5b803590602001918460018302840111640100000000831117156101ff57600080fd5b509092509050610593565b005b610214610adb565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561024e578181015183820152602001610236565b50505050905090810190601f16801561027b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610291610b03565b604080516001600160701b03948516815292909316602083015263ffffffff168183015290519081900360600190f35b6102ed600480360360408110156102d757600080fd5b506001600160a01b038135169060200135610b2d565b604080519115158252519081900360200190f35b610309610b44565b604080516001600160a01b039092168252519081900360200190f35b61032d610b53565b60408051918252519081900360200190f35b6102ed6004803603606081101561035557600080fd5b506001600160a01b03813581169160208101359091169060400135610b59565b61032d610bf3565b610385610c17565b6040805160ff9092168252519081900360200190f35b61032d610c1c565b61020a600480360360408110156103b957600080fd5b506001600160a01b0381358116916020013516610c22565b61032d610ca3565b61032d610ca9565b61032d600480360360208110156103f757600080fd5b50356001600160a01b0316610caf565b61032d6004803603602081101561041d57600080fd5b50356001600160a01b0316610fac565b61032d610fbe565b61032d6004803603602081101561044b57600080fd5b50356001600160a01b0316610fc4565b6104816004803603602081101561047157600080fd5b50356001600160a01b0316610fd6565b6040805192835260208301919091528051918290030190f35b610214611379565b6102ed600480360360408110156104b857600080fd5b506001600160a01b03813516906020013561139e565b61032d6113ab565b61020a600480360360208110156104ec57600080fd5b50356001600160a01b03166113b1565b610309611519565b610309611528565b61020a600480360360e081101561052257600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c00135611537565b61032d6004803603604081101561057357600080fd5b506001600160a01b0381358116916020013516611732565b61020a61174f565b600c546001146105db576040805162461bcd60e51b815260206004820152600e60248201526d10da19595b5cce881313d0d2d15160921b604482015290519081900360640190fd5b6000600c55841515806105ee5750600084115b6106295760405162461bcd60e51b81526004018080602001828103825260228152602001806121796022913960400191505060405180910390fd5b600080610634610b03565b5091509150816001600160701b0316871080156106595750806001600160701b031686105b6106aa576040805162461bcd60e51b815260206004820152601e60248201527f436865656d733a20494e53554646494349454e545f4c49515549444954590000604482015290519081900360640190fd5b60065460075460009182916001600160a01b039182169190811690891682148015906106e85750806001600160a01b0316896001600160a01b031614155b61072e576040805162461bcd60e51b8152602060048201526012602482015271436865656d733a20494e56414c49445f544f60701b604482015290519081900360640190fd5b8a1561073f5761073f828a8d6118ae565b891561075057610750818a8c6118ae565b861561080b57886001600160a01b031663bbeeafab338d8d8c8c6040518663ffffffff1660e01b815260040180866001600160a01b03166001600160a01b03168152602001858152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f8201169050808301925050509650505050505050600060405180830381600087803b1580156107f257600080fd5b505af1158015610806573d6000803e3d6000fd5b505050505b604080516370a0823160e01b815230600482015290516001600160a01b038416916370a08231916024808301926020929190829003018186803b15801561085157600080fd5b505afa158015610865573d6000803e3d6000fd5b505050506040513d602081101561087b57600080fd5b5051604080516370a0823160e01b815230600482015290519195506001600160a01b038316916370a0823191602480820192602092909190829003018186803b1580156108c757600080fd5b505afa1580156108db573d6000803e3d6000fd5b505050506040513d60208110156108f157600080fd5b5051925060009150506001600160701b0385168a90038311610914576000610923565b89856001600160701b03160383035b9050600089856001600160701b031603831161094057600061094f565b89856001600160701b03160383035b905060008211806109605750600081115b61099b5760405162461bcd60e51b815260040180806020018281038252602181526020018061210e6021913960400191505060405180910390fd5b60006109cf6109b184600263ffffffff611a3e16565b6109c3876103e863ffffffff611a3e16565b9063ffffffff611aa116565b905060006109e76109b184600263ffffffff611a3e16565b9050610a18620f4240610a0c6001600160701b038b8116908b1663ffffffff611a3e16565b9063ffffffff611a3e16565b610a28838363ffffffff611a3e16565b1015610a67576040805162461bcd60e51b8152602060048201526009602482015268436865656d733a204b60b81b604482015290519081900360640190fd5b5050610a7584848888611af1565b60408051838152602081018390528082018d9052606081018c905290516001600160a01b038b169133917fd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d8229181900360800190a350506001600c55505050505050505050565b6040518060400160405280600c81526020016b0436865656d73776170204c560a41b81525081565b6008546001600160701b0380821692600160701b830490911691600160e01b900463ffffffff1690565b6000610b3a338484611ca5565b5060015b92915050565b6006546001600160a01b031681565b60005481565b6001600160a01b038316600090815260026020908152604080832033845290915281205460001914610bde576001600160a01b0384166000908152600260209081526040808320338452909152902054610bb9908363ffffffff611aa116565b6001600160a01b03851660009081526002602090815260408083203384529091529020555b610be9848484611d07565b5060019392505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b601281565b60035481565b6005546001600160a01b03163314610c75576040805162461bcd60e51b815260206004820152601160248201527021b432b2b6b99d102327a92124a22222a760791b604482015290519081900360640190fd5b600680546001600160a01b039384166001600160a01b03199182161790915560078054929093169116179055565b60095481565b600a5481565b6000600c54600114610cf9576040805162461bcd60e51b815260206004820152600e60248201526d10da19595b5cce881313d0d2d15160921b604482015290519081900360640190fd5b6000600c81905580610d09610b03565b50600654604080516370a0823160e01b815230600482015290519395509193506000926001600160a01b03909116916370a08231916024808301926020929190829003018186803b158015610d5d57600080fd5b505afa158015610d71573d6000803e3d6000fd5b505050506040513d6020811015610d8757600080fd5b5051600754604080516370a0823160e01b815230600482015290519293506000926001600160a01b03909216916370a0823191602480820192602092909190829003018186803b158015610dda57600080fd5b505afa158015610dee573d6000803e3d6000fd5b505050506040513d6020811015610e0457600080fd5b505190506000610e23836001600160701b03871663ffffffff611aa116565b90506000610e40836001600160701b03871663ffffffff611aa116565b90506000610e4e8787611daf565b60005490915080610e8b57610e776103e86109c3610e72878763ffffffff611a3e16565b611f0d565b9850610e8660006103e8611f5f565b610eda565b610ed76001600160701b038916610ea8868463ffffffff611a3e16565b81610eaf57fe5b046001600160701b038916610eca868563ffffffff611a3e16565b81610ed157fe5b04611fe3565b98505b60008911610f195760405162461bcd60e51b81526004018080602001828103825260258152602001806121546025913960400191505060405180910390fd5b610f238a8a611f5f565b610f2f86868a8a611af1565b8115610f5f57600854610f5b906001600160701b0380821691600160701b90041663ffffffff611a3e16565b600b555b6040805185815260208101859052815133927f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f928290030190a250506001600c5550949695505050505050565b60016020526000908152604090205481565b600b5481565b60046020526000908152604090205481565b600080600c54600114611021576040805162461bcd60e51b815260206004820152600e60248201526d10da19595b5cce881313d0d2d15160921b604482015290519081900360640190fd5b6000600c81905580611031610b03565b50600654600754604080516370a0823160e01b815230600482015290519496509294506001600160a01b039182169391169160009184916370a08231916024808301926020929190829003018186803b15801561108d57600080fd5b505afa1580156110a1573d6000803e3d6000fd5b505050506040513d60208110156110b757600080fd5b5051604080516370a0823160e01b815230600482015290519192506000916001600160a01b038516916370a08231916024808301926020929190829003018186803b15801561110557600080fd5b505afa158015611119573d6000803e3d6000fd5b505050506040513d602081101561112f57600080fd5b50513060009081526001602052604081205491925061114e8888611daf565b60005490915080611165848763ffffffff611a3e16565b8161116c57fe5b049a5080611180848663ffffffff611a3e16565b8161118757fe5b04995060008b11801561119a575060008a115b6111d55760405162461bcd60e51b815260040180806020018281038252602581526020018061212f6025913960400191505060405180910390fd5b6111df3084611ffb565b6111ea878d8d6118ae565b6111f5868d8c6118ae565b604080516370a0823160e01b815230600482015290516001600160a01b038916916370a08231916024808301926020929190829003018186803b15801561123b57600080fd5b505afa15801561124f573d6000803e3d6000fd5b505050506040513d602081101561126557600080fd5b5051604080516370a0823160e01b815230600482015290519196506001600160a01b038816916370a0823191602480820192602092909190829003018186803b1580156112b157600080fd5b505afa1580156112c5573d6000803e3d6000fd5b505050506040513d60208110156112db57600080fd5b505193506112eb85858b8b611af1565b811561131b57600854611317906001600160701b0380821691600160701b90041663ffffffff611a3e16565b600b555b604080518c8152602081018c905281516001600160a01b038f169233927fdccd412f0b1252819cb1fd330b93224ca42612892bb3f4f789976e6d81936496929081900390910190a35050505050505050506001600c81905550915091565b604051806040016040528060098152602001680434845454d532d4c560bc1b81525081565b6000610b3a338484611d07565b6103e881565b600c546001146113f9576040805162461bcd60e51b815260206004820152600e60248201526d10da19595b5cce881313d0d2d15160921b604482015290519081900360640190fd5b6000600c55600654600754600854604080516370a0823160e01b815230600482015290516001600160a01b0394851694909316926114a892859287926114a3926001600160701b03169185916370a0823191602480820192602092909190829003018186803b15801561146b57600080fd5b505afa15801561147f573d6000803e3d6000fd5b505050506040513d602081101561149557600080fd5b50519063ffffffff611aa116565b6118ae565b600854604080516370a0823160e01b8152306004820152905161150f92849287926114a392600160701b90046001600160701b0316916001600160a01b038616916370a0823191602480820192602092909190829003018186803b15801561146b57600080fd5b50506001600c5550565b6005546001600160a01b031681565b6007546001600160a01b031681565b4284101561157e576040805162461bcd60e51b815260206004820152600f60248201526e10da19595b5cce8811561412549151608a1b604482015290519081900360640190fd5b6003546001600160a01b0380891660008181526004602090815260408083208054600180820190925582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98186015280840196909652958d166060860152608085018c905260a085019590955260c08085018b90528151808603909101815260e08501825280519083012061190160f01b6101008601526101028501969096526101228085019690965280518085039096018652610142840180825286519683019690962095839052610162840180825286905260ff89166101828501526101a284018890526101c28401879052519193926101e280820193601f1981019281900390910190855afa158015611699573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906116cf5750886001600160a01b0316816001600160a01b0316145b61171c576040805162461bcd60e51b8152602060048201526019602482015278436865656d733a20494e56414c49445f5349474e415455524560381b604482015290519081900360640190fd5b611727898989611ca5565b505050505050505050565b600260209081526000928352604080842090915290825290205481565b600c54600114611797576040805162461bcd60e51b815260206004820152600e60248201526d10da19595b5cce881313d0d2d15160921b604482015290519081900360640190fd5b6000600c55600654604080516370a0823160e01b815230600482015290516118a7926001600160a01b0316916370a08231916024808301926020929190829003018186803b1580156117e857600080fd5b505afa1580156117fc573d6000803e3d6000fd5b505050506040513d602081101561181257600080fd5b5051600754604080516370a0823160e01b815230600482015290516001600160a01b03909216916370a0823191602480820192602092909190829003018186803b15801561185f57600080fd5b505afa158015611873573d6000803e3d6000fd5b505050506040513d602081101561188957600080fd5b50516008546001600160701b0380821691600160701b900416611af1565b6001600c55565b60408051808201825260198152787472616e7366657228616464726573732c75696e743235362960381b60209182015281516001600160a01b0385811660248301526044808301869052845180840390910181526064909201845291810180516001600160e01b031663a9059cbb60e01b1781529251815160009460609489169392918291908083835b602083106119575780518252601f199092019160209182019101611938565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146119b9576040519150601f19603f3d011682016040523d82523d6000602084013e6119be565b606091505b50915091508180156119ec5750805115806119ec57508080602001905160208110156119e957600080fd5b50515b611a37576040805162461bcd60e51b815260206004820152601760248201527610da19595b5cce881514905394d1915497d19052531151604a1b604482015290519081900360640190fd5b5050505050565b6000811580611a5957505080820282828281611a5657fe5b04145b610b3e576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6d756c2d6f766572666c6f7760601b604482015290519081900360640190fd5b80820382811115610b3e576040805162461bcd60e51b815260206004820152601560248201527464732d6d6174682d7375622d756e646572666c6f7760581b604482015290519081900360640190fd5b6001600160701b038411801590611b0f57506001600160701b038311155b611b53576040805162461bcd60e51b815260206004820152601060248201526f436865656d733a204f564552464c4f5760801b604482015290519081900360640190fd5b60085463ffffffff42811691600160e01b90048116820390811615801590611b8357506001600160701b03841615155b8015611b9757506001600160701b03831615155b15611c08578063ffffffff16611bc585611bb086612087565b6001600160e01b03169063ffffffff61209916565b600980546001600160e01b03929092169290920201905563ffffffff8116611bf084611bb087612087565b600a80546001600160e01b0392909216929092020190555b600880546001600160701b0319166001600160701b0388811691909117600160701b600160e01b031916600160701b8883168102919091176001600160e01b0316600160e01b63ffffffff871602179283905560408051848416815291909304909116602082015281517f1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1929181900390910190a1505050505050565b6001600160a01b03808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b038316600090815260016020526040902054611d30908263ffffffff611aa116565b6001600160a01b038085166000908152600160205260408082209390935590841681522054611d65908263ffffffff6120be16565b6001600160a01b03808416600081815260016020908152604091829020949094558051858152905191939287169260008051602061219b83398151915292918290030190a3505050565b600080600560009054906101000a90046001600160a01b03166001600160a01b031663017e7e586040518163ffffffff1660e01b815260040160206040518083038186803b158015611e0057600080fd5b505afa158015611e14573d6000803e3d6000fd5b505050506040513d6020811015611e2a57600080fd5b5051600b546001600160a01b038216158015945091925090611ef9578015611ef4576000611e6d610e726001600160701b0388811690881663ffffffff611a3e16565b90506000611e7a83611f0d565b905080821115611ef1576000611ea8611e99848463ffffffff611aa116565b6000549063ffffffff611a3e16565b90506000611ecd83611ec186600563ffffffff611a3e16565b9063ffffffff6120be16565b90506000818381611eda57fe5b0490508015611eed57611eed8782611f5f565b5050505b50505b611f05565b8015611f05576000600b555b505092915050565b60006003821115611f50575080600160028204015b81811015611f4a57809150600281828581611f3957fe5b040181611f4257fe5b049050611f22565b50611f5a565b8115611f5a575060015b919050565b600054611f72908263ffffffff6120be16565b60009081556001600160a01b038316815260016020526040902054611f9d908263ffffffff6120be16565b6001600160a01b038316600081815260016020908152604080832094909455835185815293519293919260008051602061219b8339815191529281900390910190a35050565b6000818310611ff25781611ff4565b825b9392505050565b6001600160a01b038216600090815260016020526040902054612024908263ffffffff611aa116565b6001600160a01b03831660009081526001602052604081209190915554612051908263ffffffff611aa116565b60009081556040805183815290516001600160a01b0385169160008051602061219b833981519152919081900360200190a35050565b6001600160701b0316600160701b0290565b60006001600160701b0382166001600160e01b038416816120b657fe5b049392505050565b80820182811015610b3e576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6164642d6f766572666c6f7760601b604482015290519081900360640190fdfe436865656d733a20494e53554646494349454e545f494e5055545f414d4f554e54436865656d733a20494e53554646494349454e545f4c49515549444954595f4255524e4544436865656d733a20494e53554646494349454e545f4c49515549444954595f4d494e544544436865656d733a20494e53554646494349454e545f4f55545055545f414d4f554e54ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa265627a7a723158205fa4d962d9eab98f1019c05ff2e2c36d2b6bb5e40efd624c78e65c7bc01cc5ef64736f6c63430005100032454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e747261637429a265627a7a72315820148efec0f3eafb5ab59de191c794efb884a52d2ade9a99daeff79635426a33b664736f6c63430005100032";

type CheemsFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CheemsFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CheemsFactory__factory extends ContractFactory {
  constructor(...args: CheemsFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _feeToSetter: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CheemsFactory> {
    return super.deploy(
      _feeToSetter,
      overrides || {}
    ) as Promise<CheemsFactory>;
  }
  override getDeployTransaction(
    _feeToSetter: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_feeToSetter, overrides || {});
  }
  override attach(address: string): CheemsFactory {
    return super.attach(address) as CheemsFactory;
  }
  override connect(signer: Signer): CheemsFactory__factory {
    return super.connect(signer) as CheemsFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CheemsFactoryInterface {
    return new utils.Interface(_abi) as CheemsFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CheemsFactory {
    return new Contract(address, _abi, signerOrProvider) as CheemsFactory;
  }
}
