import { Outlet, Link, useParams } from "react-router-dom";

const CategoryLayout = () => {
  return (
    <div>
      <h1>Category Layout</h1>
      <Outlet />
    </div>
  );
};
export default CategoryLayout;
