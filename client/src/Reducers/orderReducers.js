import{ORDER_CREATE_FAIL,ORDER_CREATE_REQUEST,ORDER_CREATE_SUCCESS,ORDER_DETAIL_FAIL,ORDER_DETAIL_REQUEST,ORDER_DETAIL_SUCCESS} from "../Constants/orderConstants"
export const orderCreateReducer=(state={},action)=>{
    switch(action.type)
    {
        case ORDER_CREATE_REQUEST:
            return {
                loading:true
            }
            case ORDER_CREATE_SUCCESS:
                return{
                    loading:false,
                    success:true,
                    order:action.payload
                }
                case ORDER_CREATE_FAIL:
                return{
                    loading:false,
                   error:action.payload
                }
                default:
                    return state
            }
}
export const orderDetailReducer=(state={Loading:true,orderItems:[],shippingAddress:{}},action)=>{
    switch(action.type)
    {
        case ORDER_DETAIL_REQUEST:
            return {
                ...state,
                Loading:true
            }
            case ORDER_DETAIL_SUCCESS:
                return{
                   Loading:false,
                    order:action.payload
                }
                case ORDER_DETAIL_FAIL:
                return{
                    Loading:false,
                   error:action.payload
                }
                default:
                    return state
            }
}