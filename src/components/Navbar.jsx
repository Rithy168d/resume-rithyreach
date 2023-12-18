import { Menu, X } from "lucide-react";
import { useState } from "react";

const navlist = [
  {
    label: "Home",
    part: "#home",
  },
  {
    label: "About",
    part: "#about",
  },
  {
    label: "Skill",
    part: "#skill",
  },
  {
    label: "Services",
    part: "#services",
  },
  {
    label: "Qualification",
    part: "#qualification",
  },
  {
    label: "Portfolio",
    part: "#portfolio",
  },
  {
    label: "Testimonial",
    part: "#testimonial",
  },
  {
    label: "Contact",
    part: "#contact",
  },
];

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className="header">
      <img className="img-logo cursor" src="" alt="logo" />
      <button className="toggler-btn cursor" onClick={() => setShow(!show)}>
        {show ? <X /> : <Menu />}
      </button>
      <ul className={show ? "navlist active" : "navlist"}>
        {navlist.map((links) => (
          <li onClick={() => setShow(false)} key={links.part}>
            <a href={links.part}>{links.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
