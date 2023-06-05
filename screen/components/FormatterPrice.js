import React from 'react';
// import NumberFormat from 'react-number-format';

// export default function CurrencyFormat(num) {
//   // let num=10000
//   let result ='$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
//   return (
//     <Text>{result}</Text>
//   )
// }
export const NumberFormat = (value) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
  }).format(value);