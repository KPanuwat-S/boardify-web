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

  return (
    <div className="mt-8">
      <section className="rounded-3xl shadow-2xl w-[600px] mx-auto">
        <div className="p-8 text-center sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-pink-500">
            Welcome to Boardify Premium
          </p>

          <h2 className="mt-6 text-3xl font-bold">
            Thanks for your purchase, we're getting it ready!
          </h2>

          <a
            className="mt-8 inline-block w-full rounded-[4px] bg-blue-600 py-2 font-bold text-white shadow-xl"
            href=""
          >
            Create Workspace
          </a>
        </div>
      </section>
    </div>
  );
}
