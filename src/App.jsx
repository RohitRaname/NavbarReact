import { useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";
import SocialIcons from "./SocialIcons";

const App = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const navLinks = useRef(null);

  const navLinksHeight = toggleNav
    ? `${navLinks.current.scrollHeight}px`
    : "0px";

  return (
    <nav className={`nav`}>
      <div className="nav-center">
        <div className="nav-header">
          <div className="nav-toggle" onClick={() => setToggleNav(!toggleNav)}>
            <FaBars />
          </div>
          <img src={logo} alt="" className="logo" />
        </div>
        <ul className="links" ref={navLinks} style={{ height: navLinksHeight }}>
          {links.map(({ id, url, text }) => (
            <a className="link" key={id} href={url}>
              {text}
            </a>
          ))}
        </ul>
        <SocialIcons />
      </div>
    </nav>
  );
};
export default App;
