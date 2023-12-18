import { Link } from "react-router-dom";

const datas = [
  {
    label: "Frontend",
    part: "/",
  },
  {
    label: "App-Design",
    part: "app-design",
  },
];

const PortfolioLink = () => {
  return (
    <ul className="btn-link">
      {datas.map((items) => (
        <li key={items.part}>
          <Link to={items.part}>{items.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default PortfolioLink;
