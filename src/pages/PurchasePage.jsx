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
    <div className="relative flex flex-col  h-screen justify-center items-center">
      {/* <div className="relative flex flex-col gap-10 items-start "> */}
      <div>
        <div className=" card w-[400px] bg-base-100 shadow-xl ">
          <div className="card-body items-center text-start gap-8 ">
            <div className="font-bold text-lg ">Premium</div>
            <p>
              Get Premium on boardify today for comment feature make
              communication in the team more effective
            </p>
            <div className="card-actions">
              <button
                type="button"
                className="w-[6rem] h-[3rem] border hover:bg-blue-700 bg-blue-600 text-white cursor-pointer text-center rounded-md shadow-sm"
                onClick={(e) => {
                  handleOnclick(e.target.name);
                }}
                name={"price_1NNxUCDKhgMWXKYTfAqfEOlA"}
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      <div className="w-[600px] mt-10">
        <img src="src/assets/Project_74-12.jpg" alt="" />
      </div>
    </div>
  );
}
