import { Link, Outlet } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Outlet/>
      <hr />
      <Link to="./">
        <button>SignIn</button>
      </Link>
      <Link to="registration">
        <button>Registration</button>
      </Link>
      <Link to="lostPassword">
        <button>Lost Password</button>
      </Link>
    </div>
  );
};
export default Login;
