import { Link } from "react-router-dom";
import IfLogged from "./IfLogged";

const Navbar = () => {
  return (
    <div>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <Link to="/admin">
        <IfLogged>
          <button>Admin</button>
        </IfLogged>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link><Link to="/catalog">
        <button>Catalog</button>
      </Link>
    </div>
  );
};

export default Navbar;
