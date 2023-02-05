import useSWR from "swr";
import { getBlogs } from "../library/microcms";

const BlogSearch = () => {
  const params = new URLSearchParams(window.location.search);
  const q = params.get("q");

  console.log(q);
  const { data } = useSWR(q === null ? null : ["/search", q], ([, q]) =>
    getBlogs({
      fields: ["id", "data"],
      q,
    })
  );
  console.log(data);

  return <div></div>;
};

export default BlogSearch;
