const BlogSearch = () => {
  const params = new URLSearchParams(window.location.search);
  const q = params.get("q");

  console.log(q);

  return <div></div>;
};

export default BlogSearch;
