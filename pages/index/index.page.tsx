import { Provider } from "react-redux"
import App from "./App"
import { createStore } from "redux";
import rootReducer from "../../redux/reducers";

export { Page }

function Page() {
  const store = createStore(rootReducer);
  return (
    <>
     <Provider store={store}>
      <App />
      </Provider>
    </>
  )
}
