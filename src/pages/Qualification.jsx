import { CalendarDays, GraduationCap } from "lucide-react";
import pic1 from "../assets/Rupp.jpg";
import pic2 from "../assets/instinct.jpg";

const datas = [
  {
    id: 1,
    marjor: "C/C++",
    intitute: "ETECT",
    year: 2021,
  },
  {
    id: 2,
    marjor: "Front-end Developer",
    intitute: "Instinct-intitute",
    year: 2021,
  },
  {
    id: 3,
    marjor: "PHP-Laravel",
    intitute: "Instinct-intitute",
    year: 2023,
  },
  {
    id: 4,
    marjor: "Computer science",
    intitute: "RUPP",
    year: "2021-Present",
  },
];

const Qualification = () => {
  return (
    <article className="padding-top" id="qualification">
      <div className="text-center line-s">
        <h2>Qualification</h2>
        <p></p>
      </div>
      <div className="grid-1x2">
        <div className="card-q">
          <div className="q-pi">
            <p>Educations</p>
            <div>
              <GraduationCap size={30} />
            </div>
          </div>
          {datas.map((items) => (
            <div className="line" key={items.id}>
              <p className="rounder">{items.marjor}</p>
              <p className="q-p">{items.intitute}</p>
              <div className="q-pi-1">
                <div className="">
                  <CalendarDays size={15} />
                </div>
                <p className="">{items.year}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid-1x2 margin-2x0">
          <div className="card-inner border-radius text-center-q">
            <p className="q-ul">
              <b>Royal University of Phnom Penh</b> <br />
              i'm a student of department Computer science, year 3. 
            </p>
            <div className="img-q">
              <img className="border-radius" src={pic1} alt="rupp image" />
            </div>
          </div>
          <div className="card-inner border-radius text-center-q">
            <div className="img-q">
              <img
                className="border-radius"
                src={pic2}
                alt="instinct intitue"
              />
            </div>
            <p className="q-ul">
              <b>Instinct Intitue</b> <br />
              i has finish crouse basic Web Development and PHP Lavaral at this intitue.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Qualification;
