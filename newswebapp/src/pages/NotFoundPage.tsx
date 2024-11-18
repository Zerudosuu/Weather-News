import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h1>404</h1>
      <h2>Page not found</h2>
      <Link to="/">Go back to the homepage</Link>
    </div>
  );
};

export default NotFoundPage;
