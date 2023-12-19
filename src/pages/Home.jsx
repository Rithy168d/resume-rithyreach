import {
  ArrowDown,
  Facebook,
  Instagram,
  MoveDown,
  Twitter,
} from "lucide-react";
import pic from "../assets/home-img.jpg";
import figma from "../assets/figma.png";
import react from "../assets/react.png";
import angular from "../assets/angular.png";

const datas = [
  {
    id: 1,
    greeting: "Hello, My name's",
    name: "Rithyreach",
    detail: "I'm a student of department computer science, years three in the Royal University of Phnom Penh.",
    job: "Front-end developer",
    img: pic,
  },
];

const Home = () => {
  return (
    <article className="padding-top" id="home">
      <div className="card-inner">
        {datas.map((item) => (
          <div className=" grid-1x2" key={item.id}>
            <div className="hero-text">
              <p>{item.greeting}</p>
              <h1>{item.name}</h1>
              <p>{item.detail}</p>
              <h3>{item.job}</h3>
              <a href="#about">
                <button className="button margin-2x0">
                  <span>
                    Check me <MoveDown />
                  </span>
                </button>
              </a>
            </div>
            <div className="ralative">
              <div className="icon-add react-icon animation-icon2">
                <img src={react} alt="icon-ract" />
              </div>
              <div className="hero-img">
                <img className="animation-border" src={item.img} alt="" />
              </div>
              <div className="icon-add figma-icon animation-icon2">
                <img src={figma} alt="icon-figma" />
              </div>
              <div className="icon-add angula-icon animation-icon1">
                <img src={angular} alt="icon-angular" />
              </div>
            </div>
          </div>
        ))}

        <div className="">
          <ul className="wrapper">
            <li className="icon facebook">
              <span className="tooltip">Facebook</span>
              <span>
                <Facebook />
              </span>
            </li>
            <li className="icon twitter">
              <span className="tooltip">Twitter</span>
              <span>
                <Twitter />
              </span>
            </li>
            <li className="icon instagram">
              <span className="tooltip">Instagram</span>
              <span>
                <Instagram />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default Home;
