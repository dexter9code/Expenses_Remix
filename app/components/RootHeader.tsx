import { Link, NavLink } from "@remix-run/react";
import Logo from "~/other/Logo";

const RootHeader: React.FC = () => {
  return (
    <header id="main-header">
      <Logo />
      <nav id="main-nav">
        <ul>
          <li>
            <NavLink to={`/`}>Home</NavLink>
          </li>
          <li>
            <NavLink to={`/plans`}>Plans</NavLink>
          </li>
        </ul>
      </nav>

      <nav id="cta-nav">
        <ul>
          <li>
            <Link to={`/auth`} className="cta">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default RootHeader;
