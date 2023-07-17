import Router from "./routes/Router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./components/Loading";
import { useSelector } from "react-redux";
function App() {
  const loading = useSelector((state) => state.auth.initialLoading);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Router />
      <ToastContainer position="bottom-center" theme="light" autoClose={2000} />
    </div>
  );
}

export default App;
