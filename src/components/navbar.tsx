import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#">
        <FontAwesomeIcon icon={faHouse} />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faPen} /> {"Daily Post"}
      </a>
      <a href="#">Search</a>
    </nav>
  );
};

export default Navbar;
