import { GET_ITEMS, ADD_ITEM, DELETE_ITEM , ITEMS_LOADING } from '../actions/types';

const initialState = {
    items: [
        // {
        //     id: uuid(),
        //     name: 'Eggs'
        // },
        // {
        //     id: uuid(),
        //     name: 'Milk'
        // },
        // {
        //     id: uuid(),
        //     name: 'Steak'
        // },
        // {
        //     id: uuid(),
        //     name: 'Water'
        // }
    ],
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS: 
            return {
                ...state,
                items: action.payload,
                loading: true
            }

        case DELETE_ITEM: 
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            }

        case ADD_ITEM:
            console.log('ACTION PAYLOAD', action.payload);
            return {
                ...state,
                items: [...state.items, action.payload]
            }

        case ITEMS_LOADING: 
            return {
                ...state,
                loading: true
            }

        default: return state;
    }
}