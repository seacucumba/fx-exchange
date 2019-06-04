import { Dispatch } from 'react';
import Wallet from '../../models/wallet';
import RatesSnapshot from '../../models/rates-snapshot';

export enum ExchangePageActionType {
  SetRates = 'SetRates',
  SetWallets = 'SetWallets',
  SetSourceAmount = 'SetSourceAmount',
  SetTargetAmount = 'SetTargetAmount',
  SetSourceWallet = 'SetSourceWallet',
  SetTargetWallet = 'SetTargetWallet',
}

export const createActionDispatcher = (dispatch: Dispatch<any>) => ({
  setRates: (rates: RatesSnapshot | null): void => dispatch({type: ExchangePageActionType.SetRates, payload: rates}),
  setWallets: (wallets: Wallet[]): void => dispatch({type: ExchangePageActionType.SetWallets, payload: wallets}),
  setSourceAmount: (amount: number): void => dispatch({ type: ExchangePageActionType.SetSourceAmount, payload: amount }),
  setTargetAmount: (amount: number): void => dispatch({ type: ExchangePageActionType.SetTargetAmount, payload: amount }),
  setSourceWallet: (wallet: Wallet): void => dispatch({ type: ExchangePageActionType.SetSourceWallet, payload: wallet}),
  setTargetWallet: (wallet: Wallet): void => dispatch({ type: ExchangePageActionType.SetTargetWallet, payload: wallet}),
});