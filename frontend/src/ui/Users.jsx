import axios from "axios";

import { useEffect, useState } from "react";

import { Button } from "./Button.jsx";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/user/bulk?filter=${searchQuery}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setUsers(response.data.user);
      });
  }, [searchQuery]);

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
          ā
        ></input>
      </div>
      <div>
        {users.map((user, i) => (
          <User key={i} user={user} />
        ))}
      </div>
    </>
  );
};

const User = ({ user }) => {
  return (
    <div className="flex justify-between mt-6">
      <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {user.firstName[0]}
          </div>
        </div>
        <div className="flex flex-col justify-center h-ful">
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center h-full">
        <Button text={"Send Money"} />
      </div>
    </div>
  );
};
