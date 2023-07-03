function MyProfileComponent({ data }) {
  return (
    <>
      <div className="mt-5 flex gap-5">
        <div className="flex w-full bg-[#F2F3F5] h-[70vh] bg-[#] p-16 overflow-x-auto ">
          <div className="text-gray-600">
            {" "}
            Board:{data.name}
            <div className="flex flex-row-reverse gap-3 ">
              <div className=" flex gap-3 font-semibold text-blue-950">
                {data.Cards.length &&
                  data.Cards.map((item, index) => {
                    return (
                      <div
                        className=" bg-white  shadow-[0_0_4px_rgb(0_0_0_/0.2)] rounded-xl w-[320px] h-fit p-2"
                        key={index}
                      >
                        <div className="flex justify-between p-5">
                          <p>card:{item.name}</p>
                        </div>
                        <div>
                          {item.Tasks.length &&
                            item.Tasks.map((item, index) => {
                              return (
                                <div
                                  className=" flex cursor-pointer p-2  "
                                  key={index}
                                >
                                  <div className="bg-[#f6f5fa]  shadow-[0_0_4px_rgb(0_0_0_/0.2)] rounded-xl w-full h-fit p-2">
                                    <p className="font-light">
                                      Tasks :{item.name}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyProfileComponent;
