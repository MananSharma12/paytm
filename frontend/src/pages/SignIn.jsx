import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Heading } from "../ui/Heading.jsx";
import { Subheading } from "../ui/Subheading.jsx";
import { InputBox } from "../ui/InputBox.jsx";
import { Button } from "../ui/Button.jsx";
import { BottomText } from "../ui/BottomText.jsx";

export const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="sm:ml-auto sm:mr-auto mt-16 ml-4 mr-4 bg-slate-200 w-auto sm:w-1/2">
      <div className="text-center p-4">
        <Heading label={"Sign up"} />
        <Subheading content={"Enter your information to create an account"} />
        <InputBox
          label={"Email"}
          placeholder={"johndoe@example.com"}
          type={"text"}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <InputBox
          label={"password"}
          placeholder={"********"}
          type={"password"}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button
          text={"Sign In"}
          onClick={async () => {
            const response = await axios.post(
              "http://localhost:3000/api/v1/user/signin",
              {
                username: email,
                password,
              },
            );
            localStorage.setItem("token", response.data.token);
            navigate("/dashboard");
          }}
        />
        <BottomText
          text={"Don't have an account?"}
          buttonText={"Sign Up"}
          to={"/signup"}
        />
      </div>
    </div>
  );
};
