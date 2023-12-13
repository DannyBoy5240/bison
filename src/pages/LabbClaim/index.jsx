import React, { useState } from "react";
import ClaimBox from "../../components/ClaimBox";

const LabbClaim = () => {
  // Content
  const Content = () => {
    // ...
    const [btcBalance, setBtcBalance] = useState(0);
    const [depositeAmount, setDepositeAmount] = useState(0);
    const handleDepositeAmountChange = (event) => {
      const value = parseFloat(event.target.value);
      if (value >= 0) {
        // Only update the state if the value is non-negative
        setDepositeAmount(value);
      }
    };
    const handleMaxDeposite = () => {
      const maxAmount = Math.max(btcBalance - 0.0001, 0);
      setDepositeAmount(maxAmount);
    };

    return (
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="mt-14">
          <div className="block lg:flex justify-center md:justify-start align-center">
            <img
              src="img/logo/btclab.png"
              className="w-[60%] sm:w-[40%] md:w-[40%] mb-5"
            />
            <img
              src="img/logo/logo.png"
              className="w-[60%] sm:w-[40%] md:w-[40%] mb-5"
            />
          </div>
          <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white font-medium mt-4">
            OFFICIAL
          </p>
          <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white font-medium">
            LABB TOKEN Claim
          </p>
          <div className="md:pr-24">
            <p className="mt-4">
              Calling all approved Entrepreneurs! See how many free LABB tokens
              you are eligible to claim!
            </p>
            <div className="h-0 border-t-2 border-white my-5"></div>
            <p className="text-3x1">
              If you have not yet been approved please fill out our form to be
              considered for the claim.
            </p>
          </div>
          <button className=" bg-amber-500 text-black font-bold border-solid border-white  hover:bg-white hover:text-black rounded-full transition duration-300 ease-in-out mt-5 px-8 py-2">
            Submit For Here
          </button>
        </div>

        <div className="flex justify-center">
          <ClaimBox ixBackground={true}>
            <div className="text-center text-sm text-gray-400 p-4">
              Connect your wallet to see how much LABB you are eligible to claim
            </div>

            <div className="mt-5">
              <label
                style={{ color: "white" }}
                id="listbox-label"
                className="block text-sm font-medium text-gray-700"
              >
                {" "}
                Amount to be Claimed{" "}
              </label>
              <div className="mt-1 relative">
                <button
                  style={{ height: "50px" }}
                  type="button"
                  className="flex justify-between items-center w-full  bg-black border border-gray-300 rounded-md shadow-sm px-3 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
                  aria-haspopup="listbox"
                  aria-expanded="true"
                  aria-labelledby="listbox-label"
                >
                  <button className="cursor-default border border-gray-300 rounded-md shadow-sm pr-3 py-1">
                    <span className="flex items-center">
                      <img
                        src="/img/menuImages/smallmark-icon.svg"
                        alt=""
                        className="flex-shrink-0 h-6 w- rounded-full"
                      />
                      <span
                        style={{ color: "white" }}
                        className="ml-3 block truncate"
                      >
                        {" "}
                        LABB{" "}
                      </span>
                    </span>
                  </button>
                  <input
                    style={{
                      width: "20%",
                      height: "100%",
                      color: "white",
                      border: "none",
                      background: "transparent",
                      outline: "none",
                    }}
                    type="number"
                    min="0"
                    value={depositeAmount}
                    onChange={handleDepositeAmountChange}
                  />
                </button>
              </div>
            </div>

            <div className="mt-5">
              <label
                style={{ color: "white" }}
                id="listbox-label"
                className="block text-sm font-medium text-gray-700"
              >
                {" "}
                Total Claimed{" "}
              </label>

              <div className="mt-1 relative">
                <button
                  style={{ height: "50px" }}
                  type="button"
                  className="flex justify-between items-center w-full bg-black border border-gray-300 rounded-md shadow-sm px-3 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
                  aria-haspopup="listbox"
                  aria-expanded="true"
                  aria-labelledby="listbox-label"
                >
                  <button className="cursor-default border border-gray-300 rounded-md shadow-sm pr-3 py-1">
                    <span className="flex items-center">
                      <img
                        src="/img/menuImages/smallmark-icon.svg"
                        alt=""
                        className="flex-shrink-0 h-6 w- rounded-full"
                      />
                      <span
                        style={{ color: "white" }}
                        className="ml-3 block truncate"
                      >
                        {" "}
                        LABB{" "}
                      </span>
                    </span>
                  </button>
                  <span className="ml-3 absolute text-white inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    0.00
                  </span>
                </button>
              </div>
            </div>

            <div
              className="flex justify-center mt-2"
              style={{ textAlign: "right" }}
            >
              <button className=" bg-black text-amber-500 border-white border hover:bg-amber-500 hover:text-black rounded-full transition duration-300 ease-in-out my-10 px-8 py-2 w-full text-sm">
                Connect Wallet to Claim
              </button>
            </div>
          </ClaimBox>
        </div>
      </div>
    );
  };

  // More info
  const MoreInfo = () => {
    return (
      <div>
        <div className=" text-white mx-12 sm:mx-16 md:mx-28 lg:mx-60 py-20">
          <div className="text-center text-3xl font-medium ">
            Having Difficulties or Would Like<br />More Information?
          </div>
          <div className="text-center font-medium my-4">
            Contact us at btcstartuplab.com or click the button below!
          </div>
          <div className="flex justify-center items-center">
            <button className=" bg-yellow-600 text-black font-bold border-solid border-white  hover:bg-white hover:text-black rounded-full transition duration-300 ease-in-out mt-5 px-8 py-2">
              Click for more info!
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4">
      <Content />
      <MoreInfo />
    </div>
  );
};

export default LabbClaim;
