const PIZZAS = ['CH_P','CORN_P','MUTTON_PIZZA'];
function pizzaOps(state=PIZZAS,action){
	console.log('Inside Reducer ',action);	
        if(action.type ==='BUY_PIZZA'){
	//CORN_P
	return	state.filter(pizza=>pizza!==action.payload.name);
	}
	if(action.type==='ADD_PIZZA'){
	  return [action.payload.name,...state];	
	}
	return state;
}
export default pizzaOps