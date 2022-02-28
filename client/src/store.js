import{createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension"
import { ProductListReducer,ProductDetailReducer} from "./Reducers/ProductsReducers";
import { cartReducer } from "./Reducers/CartReducer";
import { userLoginReducer } from "./Reducers/userReducer";
const reducer=combineReducers({
    productList:ProductListReducer,
    productDetails:ProductDetailReducer,
    cart:cartReducer,
    userLogin:userLoginReducer
})
const cartItemsFromStorage=localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[]

const userInfoFromStorage=localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):null
const initialState={
    
   cart:{cartItems:cartItemsFromStorage},
   userLogin:{userInfo:userInfoFromStorage}
}
console.log(initialState);
const middleware=[thunk]
const store=createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;