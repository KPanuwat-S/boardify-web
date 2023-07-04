import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
// import { createPayment } from "../api/stripeApi";
// import { createPayment } from "../features/stripe/slice/purchaseSlice";
import { createPayment } from "../features/stripe/Slice/purchaseSlice";

export default function SuccessPage() {
  const dispatch = useDispatch();

  const [search] = useSearchParams();
  const idSession = search.get("session_id");
  console.log(idSession);

  useEffect(() => {
    const listenSuccessSession = async () => {
      // const res = await createPayment(idSession)
      const res = await dispatch(createPayment(idSession)).unwrap();
      // console.log(res);
      // const res = await createPayment();
      // console.log(res);
    };
    listenSuccessSession();
  }, []);

  return <div>SuccessPage</div>;
}
