import { useDispatch, useSelector } from "react-redux";
import { createCheckout } from "../features/stripe/Slice/purchaseSlice";
// import { createCheckout } from "../features/stripe/slice/purchaseSlice";

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
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
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
