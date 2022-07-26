export const initialState = {
    basket: [],   
    user: null 
}; 
    //selector 
    export const getBasketTotal = (basket) => 
        basket?.reduce((amount, item) => item.price + amount, 0 );
    


    const reducer = (state, action) => {
        console.log(action)
        switch(action.type) {
            case 'ADD_TO_BASKET':
                return {
                    ...state, 
                    basket: [...state.basket, action.item]
                };


            case 'REMOVE_FROM_BASKET':
            //here we are creating a bariable called index an dusing the JS fidnIndex 
            //function to search our basket array and see if any of the index we find 
            //have the same id as the id we passed in (action.id)
            //it will only find the first match and remove it, that way it doesnt 
            //remove all of the products that have the same id at same time
                const index = state.basket.findIndex(
                    (basketItem) => basketItem.id === action.id
                );

            //here we are creating a variable called newBasket that will take the current state 
            //and we are saying "if the index is greater than or equal to zero this means we foudn an item in the basket"
            //but if we dont find it, we then go to our else statement and put a warning 
                let newBasket = [...state.basket];

                if (index >= 0 ) {
            //here we are saying if we found an item, we want to fidn the index 
            //of it and cut the array length by 1
                    newBasket.splice(index, 1)
                }
                else {
                    console.warn(
                        `Cannont remove product (id: ${action.id} ) as it is not in the basket`
                    )
                }
            
            return {
                ...state, 
                basket: newBasket
            }

            case 'SET_USER':
                return {
                    ...state,
                    user: action.user
                }

            default:
                return state 
        }
    }

export default reducer; 