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
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Our Products</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
