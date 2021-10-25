/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from 'ethers'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'
import type { TypedEventFilter, TypedEvent, TypedListener } from './common'

interface OutboxEntryInterface extends ethers.utils.Interface {
  functions: {
    'destroy()': FunctionFragment
    'initialize(bytes32,uint256)': FunctionFragment
    'isMaster()': FunctionFragment
    'numRemaining()': FunctionFragment
    'root()': FunctionFragment
    'spendOutput(bytes32,bytes32)': FunctionFragment
    'spentOutput(bytes32)': FunctionFragment
  }

  encodeFunctionData(functionFragment: 'destroy', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'initialize',
    values: [BytesLike, BigNumberish]
  ): string
  encodeFunctionData(functionFragment: 'isMaster', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'numRemaining',
    values?: undefined
  ): string
  encodeFunctionData(functionFragment: 'root', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'spendOutput',
    values: [BytesLike, BytesLike]
  ): string
  encodeFunctionData(
    functionFragment: 'spentOutput',
    values: [BytesLike]
  ): string

  decodeFunctionResult(functionFragment: 'destroy', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'isMaster', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'numRemaining',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'root', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'spendOutput', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'spentOutput', data: BytesLike): Result

  events: {}
}

export class OutboxEntry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this

  listeners(eventName?: string): Array<Listener>
  off(eventName: string, listener: Listener): this
  on(eventName: string, listener: Listener): this
  once(eventName: string, listener: Listener): this
  removeListener(eventName: string, listener: Listener): this
  removeAllListeners(eventName?: string): this

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>

  interface: OutboxEntryInterface

  functions: {
    destroy(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    initialize(
      _root: BytesLike,
      _numInBatch: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    isMaster(overrides?: CallOverrides): Promise<[boolean]>

    numRemaining(overrides?: CallOverrides): Promise<[BigNumber]>

    root(overrides?: CallOverrides): Promise<[string]>

    spendOutput(
      _root: BytesLike,
      _id: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    spentOutput(arg0: BytesLike, overrides?: CallOverrides): Promise<[boolean]>
  }

  destroy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  initialize(
    _root: BytesLike,
    _numInBatch: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  isMaster(overrides?: CallOverrides): Promise<boolean>

  numRemaining(overrides?: CallOverrides): Promise<BigNumber>

  root(overrides?: CallOverrides): Promise<string>

  spendOutput(
    _root: BytesLike,
    _id: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  spentOutput(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>

  callStatic: {
    destroy(overrides?: CallOverrides): Promise<void>

    initialize(
      _root: BytesLike,
      _numInBatch: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    isMaster(overrides?: CallOverrides): Promise<boolean>

    numRemaining(overrides?: CallOverrides): Promise<BigNumber>

    root(overrides?: CallOverrides): Promise<string>

    spendOutput(
      _root: BytesLike,
      _id: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    spentOutput(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>
  }

  filters: {}

  estimateGas: {
    destroy(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    initialize(
      _root: BytesLike,
      _numInBatch: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    isMaster(overrides?: CallOverrides): Promise<BigNumber>

    numRemaining(overrides?: CallOverrides): Promise<BigNumber>

    root(overrides?: CallOverrides): Promise<BigNumber>

    spendOutput(
      _root: BytesLike,
      _id: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    spentOutput(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>
  }

  populateTransaction: {
    destroy(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    initialize(
      _root: BytesLike,
      _numInBatch: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    isMaster(overrides?: CallOverrides): Promise<PopulatedTransaction>

    numRemaining(overrides?: CallOverrides): Promise<PopulatedTransaction>

    root(overrides?: CallOverrides): Promise<PopulatedTransaction>

    spendOutput(
      _root: BytesLike,
      _id: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    spentOutput(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>
  }
}
