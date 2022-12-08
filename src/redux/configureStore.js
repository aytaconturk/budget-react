import reducers from "./index";
import { createStore, applyMiddleware, compose } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";


export default function configureStore() {
  return createStore(reducers,
    compose(
      applyMiddleware(thunk),
      typeof window === "object" && typeof window.devToolsExtension !== "undefined" ? window.devToolsExtension(): f => f
    )
    )
}
