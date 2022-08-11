import logo from "../resources/Images/Bella Olonje logo 111 1.svg";
import "./Nav.css";

function Nav() {
  return (
    <header>
      <div class="Logo">
        <img src={logo} alt="Logo" />
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="16"
          fill="currentColor"
          class="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="#737373"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </div>
      <div class="Menu">
        <a href="#">Home</a>
        <a href="#">Product</a>
        <a href="#">Faq</a>
        <a href="#">Contact</a>
      </div>
    </header>
  );
}

export default Nav;
