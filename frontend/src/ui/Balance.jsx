import axios from "axios";
import useSWR from "swr";

const fetcher = (url) =>
  axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((response) => response.data);

export const Balance = () => {
  const { data, error, isLoading } = useSWR(
    "http://localhost:3000/api/v1/account/balance",
    fetcher,
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <h1 className="mt-4 ml-auto mr-auto size">
      <span className={"font-semibold"}>Your Balance:</span>{" "}
      <span className={"font-bold"}>₹{data.balance}</span>
    </h1>
  );
};
