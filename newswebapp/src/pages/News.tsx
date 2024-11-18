import { useParams } from "react-router-dom";

const News = () => {
  const { categoryNews } = useParams();
  return <h1>this is News {categoryNews}</h1>;
};

export default News;
