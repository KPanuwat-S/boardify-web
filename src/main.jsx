import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./store";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-quill/dist/quill.snow.css";

import { getAccessToken } from "./utils/localstorage.js";
import { fetchMe } from "./features/auth/Slice/authSlice.js";

if (getAccessToken()) {
  store.dispatch(fetchMe());
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
