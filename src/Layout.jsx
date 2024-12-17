import { Outlet } from "react-router";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export const Layout = () => {
  return (
    <div className="bg-[url('https://res.cloudinary.com/dr6bek9dv/image/upload/f_auto,q_auto/v1/meta-aution/h0mc9j7flcprnxijfn8e')] bg-no-repeat bg-cover pt-10 font-inter">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
