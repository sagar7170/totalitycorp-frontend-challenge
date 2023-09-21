
// export const initialState = {
//    slider:false
// }

const reducer = (state, action) => {
    switch (action.type) {
        case 'SHOW_SLIDER':
            {
                return { ...state, slider: !state.slider };
            }

        case 'SET_ALL_PRODUCTS':
            {
                return { ...state, products: [...state.products, action.payload] }
            }

        case 'ADD_TO_CART':
            {
                return { ...state, cart: [...state.cart, action.payload] }
            }
        case 'REMOVE_ITEM':
            {
                const index = state.cart.findIndex(i => i.id === action.payload);
                if (index > -1) {
                    state.cart.splice(index, 1);
                }
                return {...state, cart: state.cart}
            }
        case 'PRODUCT_DETAIL':
            {
                return {...state,productdetail: action.payload}
            } 
        case 'FILTER_CATEGORY':
            {
                return {...state,filter: action.payload}
            }
        case 'CLEAR_FILTER':
            {
                return {...state,filter:""}
            }  
        case 'SEARCH_ITEMS':
            {
                return {...state,srchquery:action.payload}
            }         
    }
}

export default reducer;