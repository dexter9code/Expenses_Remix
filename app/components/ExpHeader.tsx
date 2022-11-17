import { NavLink } from "@remix-run/react";
import Logo from "~/other/Logo";

const ExpHeader: React.FC = () => {
  return (
    <header id="main-header">
      <Logo />
      <nav id="main-nav">
        <ul>
          <li>
            <NavLink to={`/expenses`}>All Expenses</NavLink>
          </li>
          <li>
            <NavLink to={`/expenses/analysis`}>Analyze Expenses</NavLink>
          </li>
        </ul>
      </nav>
      <nav id="cta-nav">
        <button className="cta">Logout</button>
      </nav>
    </header>
  );
};

export default ExpHeader;
