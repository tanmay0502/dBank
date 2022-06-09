import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'Compound' : () => Promise<undefined>,
  'checkBalance' : () => Promise<number>,
  'topUp' : (arg_0: number) => Promise<undefined>,
  'withdrawl' : (arg_0: number) => Promise<undefined>,
}
