const card=[]
const reducer = (state = card,action) =>{
     const product = action.payload
     switch (action.type) {
         case 'ADD':
            const exist = state.find(x=>x.id===product.id)
            if(exist){
                return state.map(x => x.id === product.id ? {...x,qty:x.qty+1}:x)
            }else{
                return[...state,{...product,qty:1}]
            }
         case "DELETE":
            const exist1=state.find(x=>x.id === product.id)
            if(exist1.qty===1){
                return state.filter(x=>x.id!== product.id)
            }else{
                return state.map(x=>
                    x.id ===product.id? {...x,qty: x.qty-1}:x)
            }
        case "All Delete":
            return state.filter(x =>product !==x)
        default:
            return state;
     }
}

export default reducer;