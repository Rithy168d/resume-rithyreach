import pic1 from "../assets/frontend.png";
import pic2 from "../assets/backend.png";
import pic3 from "../assets/app.png";
import { useState } from "react";

const datas = [
  {
    id: 1,
    img: pic1,
    language: "Web",
    job: "Design",
    link: "views more ",
    moreDetails: "one",
  },
  {
    id: 2,
    img: pic2,
    language: "Good",
    job: "Creative",
    link: "views more ",
    moreDetails: "two",
  },
  {
    id: 3,
    img: pic3,
    language: "App",
    job: "Design",
    link: "views more ",
    moreDetails: "three",
  },
];

const Services = () => {
  const [selectedId, setSelectedId] = useState(null);

  const handleClick = (id) => {
    setSelectedId(id);
  };

  return (
    <article className="padding-top" id="services">
      <div className="text-center line-s">
        <h2>Services</h2>
        <p>What i respond</p>
      </div>
      <div className="grid-1x3">
        {datas.map((items) => (
          <div className="card-inner border-radius" key={items.id}>
            <div className="service-icon">
              <img src={items.img} alt="image icon" />
            </div>
            <p className="font-bold">{items.language}</p>
            <p className="font-bold">{items.job}</p>
            <div className="flex-q">
              <div className="card-view">
                <button className="cta" onClick={() => handleClick(items.id)}>
                  <span className="hover-underline-animation"> View more </span>
                  <svg
                    viewBox="0 0 46 16"
                    height="7"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    id="arrow-horizontal"
                  >
                    <path
                      transform="translate(30)"
                      d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                      data-name="Path 10"
                      id="Path_10"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            {selectedId === items.id && (
              <div className="toggler-card">
                <p>{items.moreDetails}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </article>
  );
};

export default Services;
