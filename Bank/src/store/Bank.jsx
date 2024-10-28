import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
 
const Bank = () => {
  const balance = useSelector((state) => state.balance);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState('');
 
  const handleChange = (e) => setAmount(e.target.value);
 
  const handleDeposit = () => {
    if (amount) {
      dispatch({ type: 'DEPOSIT', amount: Number(amount) });
      setAmount('');
    }
  };
 
  const handleWithdraw = () => {
    if (amount) {
      dispatch({ type: 'WITHDRAW', amount: Number(amount) });
      setAmount('');
    }
  };
 
  return (
    <div>
      <h2>Bank Balance: ${balance}</h2>
      <input type="number" value={amount} onChange={handleChange} placeholder="Amount" />
      <button onClick={handleDeposit}>Deposit</button>
      <button onClick={handleWithdraw}>Withdraw</button>
    </div>
  );
};
 
export default Bank;
 
