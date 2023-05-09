import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a className="link" href="#">
        <FontAwesomeIcon icon={faHouse} />
      </a>
      <a className="link" href="#">
        <FontAwesomeIcon icon={faPen} /> {"Daily Post"}
      </a>
      <a className="link" href="#">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </a>
    </nav>
  );
};

export default Navbar;
