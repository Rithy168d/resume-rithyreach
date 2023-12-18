import pic1 from "../../assets/Frontend1.png";
import pic2 from "../../assets/Frontend2.png";
import pic3 from "../../assets/Frontend3.png";
import pic4 from "../../assets/Frontend4.png";
import pic5 from "../../assets/Frontend5.png";

const data = [
  {
    id: 1,
    img: pic1,
    title: "ReactJs",
  },
  {
    id: 2,
    img: pic2,
    title: "HTML-CSS",
  },
  {
    id: 3,
    img: pic3,
    title: "Card Component",
  },
  {
    id: 4,
    img: pic4,
    title: "Button",
  },
  {
    id: 5,
    img: pic5,
    title: "Responsive",
  },
];

const Frontend = () => {
  return (
    <article>
      <div className="grid-1x3 m-card">
        {data.map((items) => (
          <div className="card-inner border-radius  bg-card" key={items.id}>
            <div className="box-front">
              <img src={items.img} alt="Frontend image" />
            </div>
            <p>{items.title}</p>
            <div className="card-view">
              <button className="cta">
                <span className="hover-underline-animation"> View Demo </span>
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
        ))}
      </div>
    </article>
  );
};

export default Frontend;
