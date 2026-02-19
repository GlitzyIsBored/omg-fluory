import Youtube from "../src/assets/Icons/YouTube-Symbol.png";
import Github from "../src/assets/Icons/GitHub-Symbol.png";
import Pinterest from "../src/assets/Icons/Pinterest-Symbol.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav id="Navbar">
      <ul>
        <li>
          <FontAwesomeIcon icon={faBars} fontSize={42} />
        </li>
        <li>
          <img src={Youtube} width={42} height={42} />
        </li>
        <li>
          <img src={Github} width={42} height={42} />{" "}
        </li>
        <li>
          <img src={Pinterest} width={42} height={42} />
        </li>
      </ul>
    </nav>
  );
};
// planning: hovering over the icon provides a little descriptuion
export default Navbar;
