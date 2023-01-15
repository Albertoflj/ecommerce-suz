import "./footer.scss";
import "../Header/header.scss";
import githubIcon from "../../Assets/icons/icons/github.svg";
import linkedinIcon from "../../Assets/icons/icons/linkedin.svg";

import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <Link to="/about" className="underline-animation">
          <h3>About</h3>
        </Link>
        <div className="footer-sm">
          <a href="https://github.com/Albertoflj">
            <img src={githubIcon} alt="github"></img>
          </a>
          <a href="https://www.linkedin.com/in/abagiualberto/">
            <img src={linkedinIcon} alt="linkedin"></img>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
