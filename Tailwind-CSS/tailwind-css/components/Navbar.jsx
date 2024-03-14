import Image from "next/image";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src="./images/tesla.svg" alt="logo" className=" w-3/12 md:w-2/12" />
      <div>
        <a href="#modelS" className="nav_links">
          Model S
        </a>
        <a href="#model3" className="nav_links">
          Model 3
        </a>
        <a href="#modelX" className="nav_links">
          Model X
        </a>
        <a href="#modelY" className="nav_links">
          Model Y
        </a>
        <a href="#SolarRoof" className="nav_links">
          Solar Roof
        </a>
        <a href="#SolarPanels" className="nav_links">
          Solar Panels
        </a>
      </div>
      <div>
        <a href="#shop" className="nav_links">
          Shop
        </a>
        <a href="#shop" className="nav_links">
          Account
        </a>
        <a href="#shop" className="nav_links">
          Menu
        </a>
      </div>
    </div>
  );
};

export default Navbar;
