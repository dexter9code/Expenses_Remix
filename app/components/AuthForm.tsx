import { Form, Link } from "@remix-run/react";
import { FaLock, FaUserPlus } from "react-icons/fa";

const AuthFrom: React.FC = () => {
  const authMode = "login";
  return (
    <Form method="post" className="form" id="auth-form">
      <div className="icon-img">
        {authMode === `login` ? <FaLock /> : <FaUserPlus />}
      </div>
      <p>
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" required />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
      </p>
      <div className="form-actions">
        <button>Login</button>
        <Link to={`/`}>Already a user</Link>
      </div>
    </Form>
  );
};

export default AuthFrom;
