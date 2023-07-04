import Router from "./routes/Router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div>
      <Router />
      <ToastContainer position="bottom-center" theme="light" autoClose={2000} />
    </div>
  );
}

export default App;
