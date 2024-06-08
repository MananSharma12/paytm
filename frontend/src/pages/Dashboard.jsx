import { Navbar } from "../ui/Navbar.jsx";
import { Balance } from "../ui/Balance.jsx";
import { Users } from "../ui/Users.jsx";

export const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <Balance />
        <Users />
      </div>
    </>
  );
};
