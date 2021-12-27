import { BOOKS } from './types';
import { SEARCH } from './types';

const initState = {
    books: [],
    search:""
   
}

export const reducer = (state = initState, actions = {}) => {
    
    switch (actions.type) {
        case BOOKS: return { ...state, books: actions.payload }
        case SEARCH : return{...state , search: actions.payload}
        default: return { ...state}
    }
}