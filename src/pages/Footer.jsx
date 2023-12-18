import { Facebook, Instagram, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="card-inner">
      <h3>Rihtyreach</h3>
      <ul className="footer">
        <a href="#about">About</a>
        <a href="#Project">Project</a>
        <a href="#services">Service</a>
      </ul>
      <div className="flex">
        <div className="f-icon">
          <Facebook />
        </div>
        <div className="f-icon">
          <Instagram />
        </div>
        <div className="f-icon">
          <Send />
        </div>
      </div>
      <p>All rights reserved</p>
    </footer>
  );
};

export default Footer;
