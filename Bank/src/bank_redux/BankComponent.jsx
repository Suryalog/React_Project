import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { depositMoney, withdrawMoney } from './bankSlice';
 
const BankComponent = () => {
    const balance = useSelector((state) => state.balance);
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(0);
 
    const handleDeposit = () => {
        dispatch(depositMoney(Number(amount)));
        setAmount(0); // Reset amount after deposit
    };
 
    const handleWithdraw = () => {
        dispatch(withdrawMoney(Number(amount)));
        setAmount(0); // Reset amount after withdrawal
    };
 
    return (
        <div>
            <h1>Bank App Works for You</h1>
            <h2>Current Balance: ${balance}</h2>
 
            <input
                type="number"
                placeholder='Enter amount'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
 
            <button onClick={handleDeposit}>Deposit</button>
            <button onClick={handleWithdraw}>Withdraw</button>
        </div>
    );
};
 
export default BankComponent;
 