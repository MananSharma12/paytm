import axios from "axios";
import useSWR from "swr";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "./Button.jsx";

const fetcher = (url) =>
  axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((response) => response.data);

export const Users = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, error } = useSWR(
    `http://localhost:3000/api/v1/user/bulk?filter=${searchQuery}`,
    fetcher,
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <div className="font-bold mt-6 text-lg">Users</div>
      <div className="my-2">
        <input
          type="text"
          placeholder="Search users..."
          className="w-full px-2 py-1 border rounded border-slate-200"
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        ></input>
      </div>
      <div>
        {data.user.map((user, i) => (
          <User key={i} user={user} />
        ))}
      </div>
    </>
  );
};

const User = ({ user }) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between mt-6">
      <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {user.firstName[0]}
          </div>
        </div>
        <div className="flex flex-col justify-center h-full">
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center h-full">
        <Button
          onClick={() => {
            navigate(`/send?id=${user._id}&name=${user.firstName}`);
          }}
          text={"Send Money"}
        />
      </div>
    </div>
  );
};
