import axios from "axios";

import {useEffect, useState} from "react";

import {Navbar} from "./Navbar";

export const Dashboard = () => {
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
        <>
            <Navbar/>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <h1 className="mt-4 ml-auto mr-auto size">
                    Your Balance ₹{balance}
                </h1>
            </div>
        </>
    );
};
