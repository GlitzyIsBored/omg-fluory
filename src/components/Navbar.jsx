import Youtube from "../assets/Icons/YouTube-Symbol.png";
import Github from "../assets/Icons/GitHub-Symbol.png";
import Pinterest from "../assets/Icons/Pinterest-Symbol.png";
// --------------------------------------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faBars } from "@fortawesome/free-solid-svg-icons";
// -------------------------------------- PRETTIFY EVYTHING!!!!!
const Navbar = () => {
  const test = () => {
    //alert("testing omg");
    var thingNav = document.querySelectorAll(".active");

    thingNav.forEach((thingNav) => {
      thingNav.classList.toggle("list-active");
    });
  };

  return (
    <nav id="Navbar">
      <ul className="active">
        <li>
          <FontAwesomeIcon
            id="three-bar"
            icon={faBars}
            fontSize={42}
            onClick={test}
            color="#1B171C"
          />
        </li>
        <li>
          <a
            href="https://youtu.be/1eOaI6wSP5E?si=XyD4-UXltA2BUY6d"
            target="_blank"
          >
            <img src={Youtube} width={42} height={42} />
          </a>
        </li>
        <li>
          <a href="https://github.com/GlitzyIsBored" target="_blank">
            <img src={Github} width={42} height={42} />
          </a>
        </li>
        <li>
          <a
            href="https://au.pinterest.com/pin/591027151140171323/"
            target="_blank"
          >
            <img src={Pinterest} width={42} height={42} />
          </a>
        </li>
      </ul>
    </nav>
  );
};
// planning: hovering over the icon provides a little descriptuion
export default Navbar;
