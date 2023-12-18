import { BadgeCheck } from "lucide-react";

const skills = [
  {
    id: 1,
    header: "Skill",
    text: "My technical level",
    detail: "",
  },
];

const frontEnd = [
  {
    id: 1,
    language: "HTML",
    level: "Basic",
  },
  {
    id: 2,
    language: "CSS",
    level: "Advanced",
  },
  {
    id: 3,
    language: "JavaScript",
    level: "Intermediate",
  },
  {
    id: 4,
    language: "Bootstrap",
    level: "Intermediate",
  },
  {
    id: 5,
    language: "Git",
    level: "Intermediate",
  },
  {
    id: 6,
    language: "React",
    level: "Intermediate",
  },
];

const backend = [
  {
    id: 1,
    language: "C",
    level: "Basic",
  },
  {
    id: 2,
    language: "C++",
    level: "Basic",
  },
  {
    id: 3,
    language: "PHP",
    level: "Intermediate",
  },
  {
    id: 4,
    language: "SQL",
    level: "Intermediate",
  },
];

export const Skill = () => {
  return (
    <article className="padding-top" id="skill">
      {skills.map((item) => (
        <div className="text-center line-s" key={item.id}>
          <h2>{item.header}</h2>
          <p>{item.text}</p>
        </div>
      ))}
      <div className="grid-1x2-skills">
        <div className="card-inner border-radius">
          <b>Frontend</b>
          <div className="grid-1x2-skill">
            {frontEnd.map((frontEnd) => (
              <div className="" key={frontEnd.id}>
                <div className="flex-skill">
                  <div className="icon-s">
                    <BadgeCheck />
                  </div>
                  <div className="level">
                    <h4>{frontEnd.language}</h4>
                    <p>{frontEnd.level}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card-inner border-radius">
          <b>Backend</b>
          <div className="grid-1x2-skill">
            {backend.map((backend) => (
              <div className="" key={backend.id}>
                <div className="flex-skill">
                  <div className="icon-s">
                    <BadgeCheck />
                  </div>
                  <div className="level">
                    <h4>{backend.language}</h4>
                    <p>{backend.level}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};
