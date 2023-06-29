import { useDispatch, useSelector } from "react-redux";
import { createCheckout } from "../features/stripe/slice/purchaseSlice";
// import { createCheckout } from "../api/stripeApi";

export default function PurchasePage() {
  const data = useSelector((state) => state.stripe.data);
  console.log("data: ", data);
  //   console.log(data.id);

  const dispatch = useDispatch();

  // const handleOnclick = async (priceId) => {
  //   const res = await createCheckout({ priceId });
  //   console.log(res.data);
  //   window.location.replace(res.data.url);
  // };

  const handleOnclick = async (priceId) => {
    console.log("aaaa", priceId);
    const res = await dispatch(createCheckout({ priceId })).unwrap();
    window.location.replace(res.url);
  };

  return (
    <div className="flex flex-col gap-10 items-center">
      <h1>Product</h1>
      <button
        type="button"
        className="w-[8rem] border border-black bg-blue-400 text-white cursor-pointer text-center"
        onClick={(e) => {
          handleOnclick(e.target.name);
        }}
        name={"price_1NNxUCDKhgMWXKYTfAqfEOlA"}
      >
        Buy
      </button>
    </div>
  );
}
