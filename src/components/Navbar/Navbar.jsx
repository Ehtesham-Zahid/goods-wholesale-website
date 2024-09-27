import { Link } from "react-router-dom";
import Logo from "../../assets/logo-3.png";

const Navbar = () => {
  return (
    <nav className=" bg-neutral-500 rounded-t-3xl ">
      <div className="  w-3/4 mx-auto  flex justify-between p-1">
        <div>
          <img src={Logo} className="w-28 " />
        </div>

        <ul className="flex items-center gap-x-8 text-white text-2xl font-normal">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/about">Our Products</Link>
          </li>
          <li>
            <Link to="/about">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
