import axios from "axios";

import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Button } from "../ui/Button.jsx";

export const SendMoney = () => {
  const [searchParams] = useSearchParams();

  const [transferAmount, setTransferAmount] = useState(0);

  const userId = searchParams.get("id");
  const userName = searchParams.get("name");

  return (
    <div className="flex justify-center h-screen bg-gray-100">
      <div className="h-full flex flex-col justify-center">
        <div className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg">
          <div className="flex flex-col space-y-1.5 p-6">
            <h2 className="text-3xl font-bold text-center">Send Money</h2>
          </div>
          <div className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                <span className="text-2xl text-white">{userName[0]}</span>
              </div>
              <h3 className="text-2xl font-semibold">{userName}</h3>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="amount"
                >
                  Amount (in ₹)
                </label>
                <input
                  type="number"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  id="amount"
                  placeholder="Enter amount"
                  onChange={(e) => {
                    setTransferAmount(parseInt(e.target.value));
                  }}
                />
              </div>
              <Button
                onClick={() => {
                  axios
                    .post(
                      "http://localhost:3000/api/v1/account/transfer",
                      {
                        to: userId,
                        amount: transferAmount,
                      },
                      {
                        headers: {
                          Authorization: `Bearer ${localStorage.getItem(`token`)}`,
                        },
                      },
                    )
                    .then((res) => {
                      console.log(res);
                      console.log("transferred Successfully");
                    })
                    .catch((e) => {
                      console.log(e);
                    });
                }}
                text={"Initiate Transfer"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
