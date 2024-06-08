import axios from "axios";

import { useEffect, useState } from "react";

export const Balance = () => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/account/balance", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setBalance(response.data.balance);
      });
  }, []);

  return (
    <h1 className="mt-4 ml-auto mr-auto size">
      <span className={"font-semibold"}>Your Balance:</span>{" "}
      <span className={"font-bold"}>₹{balance}</span>
    </h1>
  );
};
