import store from "./store";
import { add, subtract, reset } from "./actions";

// Dispatching actions
store.dispatch(add());
store.dispatch(subtract());
store.dispatch(reset());
