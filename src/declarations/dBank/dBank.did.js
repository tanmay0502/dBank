export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'Compound' : IDL.Func([], [], ['oneway']),
    'checkBalance' : IDL.Func([], [IDL.Float64], ['query']),
    'topUp' : IDL.Func([IDL.Float64], [], ['oneway']),
    'withdrawl' : IDL.Func([IDL.Float64], [], ['oneway']),
  });
};
export const init = ({ IDL }) => { return []; };
