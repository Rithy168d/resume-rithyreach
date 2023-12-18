import { ArrowRight } from "lucide-react";
import pic1 from "../assets/profile1.jpg";
import pic2 from "../assets/profile2.jpg";
import pic3 from "../assets/profile3.jpg";
import pic4 from "../assets/profile4.jpg";
import pic5 from "../assets/profile5.jpg";
import pic6 from "../assets/profile6.jpg";

const datas = [
  {
    id: 1,
    img: pic1,
    name: "Tomny",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Aliquid provident excepturi tempore eius Est, at.",
  },
  {
    id: 2,
    img: pic2,
    name: "Kakada",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Aliquid provident excepturi tempore eius Est, at.",
  },
  {
    id: 3,
    img: pic3,
    name: "Jerry",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Aliquid provident excepturi tempore eius Est, at.",
  },
  {
    id: 4,
    img: pic4,
    name: "Jenny",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Aliquid provident excepturi tempore eius Est, at.",
  },
  {
    id: 5,
    img: pic5,
    name: "sheep",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Aliquid provident excepturi tempore eius Est, at.",
  },
  {
    id: 6,
    img: pic6,
    name: "Sasa",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Aliquid provident excepturi tempore eius Est, at.",
  },
];

const Testimonial = () => {
  return (
    <article className="padding-top" id="testimonial">
      <div className="text-center line-s">
        <h2>Testimonial</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="m-card border-radius">
        <div className="card-scroll">
          {datas.map((items) => (
            <div className="card-inner border-radius scroll" key={items.id}>
              <div className={items.name.toLowerCase()}>
                <div className="te-image">
                  <img src={items.img} alt="" />
                </div>
                <b>{items.name}</b>
                <p>{items.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="text-center">
        scroll to
        <ArrowRight size={15} />
      </p>
    </article>
  );
};

export default Testimonial;
