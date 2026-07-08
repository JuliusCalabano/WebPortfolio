import HeroLogo from "../assets/hero.png";
import ReactLogo from "../assets/react.svg";
import ViteLogo from "../assets/vite.svg";
import Csharp from "../assets/logoloop/Csharp.png";
import Cplus from "../assets/logoloop/Cplus.png";
import Css from "../assets/logoloop/CSS.png";
import Html from "../assets/logoloop/HTML.png";
import Java from "../assets/logoloop/JAVA.png";
import Js from "../assets/logoloop/JS.png";
import Php from "../assets/logoloop/PHP.png";
import Sql from "../assets/logoloop/SQL.png";

import "./Logoloop.css";

const logos = [Csharp, Cplus, Css, Html, Java, Js, Php, Sql];

// Repeat the logos several times
const repeatedLogos = Array.from({ length: 8 }, () => logos).flat();

function LogoLoop() {
  return (
    <div className="overflow-hidden w-full">
      <div className="marquee-track">
        {[...repeatedLogos, ...repeatedLogos].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt=""
            className="w-20 h-20 mx-8 flex-shrink-0 object-contain"
          />
        ))}
      </div>
    </div>
  );
}

export default LogoLoop;