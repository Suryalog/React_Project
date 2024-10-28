import {createStore} from 'redux';
 
const initialState={
    books:[],
};
 
//reducer
const booksReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'ADD_BOOK':
        return{
            ...state,
            books: [...state.books,action.payload],
        };
        default:
            return state;
    }
};
const store = createStore(booksReducer);
export default store;