const DEPOSIT = 'DEPOSIT';
const WITHDRAW = 'WITHDRAW';
 
// Action creators
export const withdrawMoney = (amount) => ({
    type: WITHDRAW,
    payload: amount,
});
 
export const depositMoney = (amount) => ({
    type: DEPOSIT,
    payload: amount,
});
 
export const initialState = {
    balance: 1000,
};
 
export const bankReducer = (state = initialState, action) => {
    switch (action.type) {
        case DEPOSIT:
            return { ...state, balance: state.balance + action.payload };
        case WITHDRAW:
            if (state.balance >= action.payload) {
                return { ...state, balance: state.balance - action.payload };
            } else {
                alert("Insufficient balance");
                return state; // Return current state if insufficient balance
            }
        default:
            return state;
    }
};