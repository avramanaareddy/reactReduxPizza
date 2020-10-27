import { createStore } from "redux";
import pizzaOps from "./reducers/PizzaReducer";
const store = createStore(pizzaOps);

export default store;
