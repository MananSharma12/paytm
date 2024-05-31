import { Heading } from "../ui/Heading.jsx";
import { Subheading } from "../ui/Subheading.jsx";

export const SignUp = () => {
  return (
    <div className="ml-auto mr-auto mt-16 bg-blue-100 w-screen sm:w-1/2">
      <div className="text-center">
        <Heading label={"Sign up"} />
        <Subheading content={"Enter your information to create an account"} />
      </div>
    </div>
  );
};
