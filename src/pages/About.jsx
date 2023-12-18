import pic from "../assets/about-img.jpg";
import icon1 from "../assets/about-icon1.png";
import icon2 from "../assets/about-icon2.png";
import icon3 from "../assets/about-icon3.png";
import Cv from "../assets/CV.pdf";
import { FileArchive } from "lucide-react";

const aboutDatas = [
  {
    id: 1,
    title: "About Page",
    detail:
      "Front-end web development is the practice of creating the user interface and interactive features of web pages and web applications using web technologies such as HTML, CSS, and JavaScript.",
    image: pic,
  },
];

const aboutIcon = [
  {
    id: 1,
    icon: icon1,
    text: "More creative",
  },
  {
    id: 2,
    icon: icon2,
    text: "Beutiful of page",
  },
  {
    id: 3,
    icon: icon3,
    text: "Look interesting",
  },
];

const About = () => {
  return (
    <article className="padding-top" id="about">
      {aboutDatas.map((item) => (
        <div className="" key={item.id}>
          <h1 className="text-center">{item.title}</h1>
          <div className="grid-1x2">
            <div className="">
              <p className="margin-2x0">{item.detail}</p>
              <div className="ab-grid-1x3">
                {aboutIcon.map((icons) => (
                  <div
                    className="card-inner about-icon border-radius"
                    id={icons.id}
                    key={icons.id}
                  >
                    <img src={icons.icon} alt="" />
                    <p className="font-size">{icons.text}</p>
                  </div>
                ))}
              </div>
              <a download="" href={Cv}>
                <button className="button margin-2x0">
                  <span>
                    Download Cv <FileArchive />
                  </span>
                </button>
              </a>
            </div>
            <div className="about-image">
              <div className="about-img">
                <img className="border-radius" src={item.image} alt="about" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </article>
  );
};

export default About;
