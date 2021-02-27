export const initialState = {
    cart: [],
  };

const reducer=(state,action)=>{
    // eslint-disable-next-line default-case
    switch(action.type){
        case "Add_To_Cart":
            return{
                ...state,
                cart:[...state.cart,action.product]
            }
        case "Remove_From_Cart":
            const newCart=[...state.cart];
            const index = state.cart.findIndex((item) => item.id === action.id);
        //item exist in the basket, remove it
        newCart.splice(index, 1) ;
            return{
                ...state,
                cart:newCart
            }
    }
}

export default reducer;