export const initialState = {
 show: false,
 showAlert: null
}


export const reducer = (state, action)=>{
 switch (action.type) {
  case 'showSomething':
   return{
    ...state,
    show: action.newShow
   }
   case 'showAlert':
   return{
    ...state,
    showAlert: action.newShowAlert
   }
  default:
   return state
 }
}