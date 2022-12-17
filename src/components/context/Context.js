import React, { createContext,useReducer} from "react";
import  reducer  from './reducer';

const ProductContext = createContext({})

export const ProductProvider = (props) =>{
    const [cardItem, dispatchCard] = useReducer(reducer,[])
    console.log(cardItem)
    return(
        <ProductContext.Provider value={{cardItem:cardItem,dispatchCard:dispatchCard}}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContext;