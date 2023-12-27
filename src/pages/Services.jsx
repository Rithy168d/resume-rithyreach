import pic1 from "../assets/frontend.png";
import pic2 from "../assets/backend.png";
import pic3 from "../assets/app.png";
import { useState } from "react";
import { CheckCheck, X } from "lucide-react";

const datas = [
  {
    id: 1,
    img: pic1,
    language: "Web",
    job: "Design",
    link: "views more ",
    h1: "Web Design",
    detail: "Services with more experience that i have to created",
    p1: "I develop the user interface",
    p2: "Web pages development",
    p3: "I create ux interface",
    p4: "I position your brand",
    p5: "Design pages and look interesting of products for companies",
  },
  {
    id: 2,
    img: pic2,
    language: "Good",
    job: "Creative",
    link: "views more ",
    h1: "Web Design",
    detail: "Services with more experience that i have to created.",
    p1: "I develop the user interface",
    p2: "Web pages development",
    p3: "I create ux interface",
    p4: "I position your brand",
    p5: "Design pages and look interesting of products for companies",
  },
  {
    id: 3,
    img: pic3,
    language: "App",
    job: "Design",
    link: "views more ",
    h1: "Web Design",
    detail: "Services with more experience that i have to created",
    p1: "I develop the user interface",
    p2: "Web pages development",
    p3: "I create ux interface",
    p4: "I position your brand",
    p5: "Design pages and look interesting of products for companies",
  },
];

const Services = () => {
  // const [selectedId, setSelectedId] = useState(null);

  // const handleClick = (id) => {
  //   setSelectedId(id);
  // };

  return (
    <article className="padding-top" id="services">
      <div className="text-center line-s">
        <h2>Services</h2>
        <p>What i respond</p>
      </div>
      <div className="grid-1x3">
        {datas.map((items) => (
          <div
            className="card-inner border-radius text-center-s"
            key={items.id}
          >
            <div className="service-icon m-0">
              <img src={items.img} alt="image icon" />
            </div>
            <p className="font-bold">{items.language}</p>
            <p className="font-bold">{items.job}</p>
            <div className="flex-q">
              <div className="card-view">
              {/* onClick={() => handleClick(items.id)} */}
                <button className="cta" >
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
              {/* {selectedId === items.id && (
                <article className="toggler-card">
                  <div
                    className="text-right"
                    onClick={() => setSelectedId(null)}
                  >
                    <X />
                  </div>
                  <div className="text-center">
                    <b className="text-center">{items.h1}</b>
                    <p className="font-size-17">{items.detail}</p>
                  </div>

                  <div className="flex">
                    <div className="">
                      <CheckCheck />
                    </div>
                    <p className="font-size-17">{items.p2}</p>
                  </div>

                  <div className="flex">
                    <div className="">
                      <CheckCheck />
                    </div>
                    <p className="font-size-17">{items.p3}</p>
                  </div>

                  <div className="flex">
                    <div className="">
                      <CheckCheck />
                    </div>
                    <p className="font-size-17">{items.p4}</p>
                  </div>

                  <div className="flex">
                    <div className="">
                      <CheckCheck />
                    </div>
                    <p className="font-size-17">{items.p5}</p>
                  </div>
                </article>
              )} */}
          </div>
        ))}
      </div>
    </article>
  );
};

export default Services;
