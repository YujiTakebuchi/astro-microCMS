import useSWR from "swr";
import { getBlogs } from "../library/microcms";

const BlogSearch = () => {
  const params = new URLSearchParams(window.location.search);
  const q = params.get("q");

  console.log(q);
  const { data, error, isLoading } = useSWR(
    q === null ? null : ["/search", q],
    ([, q]) =>
      getBlogs({
        fields: ["id", "title"],
        q,
      })
  );
  console.log(data);

  if (error) <div>エラーが発生しました…！</div>;

  if (isLoading) <div>読み込み中…ちょっと待っててくれ</div>;

  return (
    <div>
      {data?.contents.length !== 0 ? (
        <ul>
          {data?.contents.map(({ id, title }) => {
            return (
              <li key={id}>
                <a href={id}>{title}</a>
              </li>
            );
          })}
        </ul>
      ) : (
        <div>ありませんでした、すみません。</div>
      )}
    </div>
  );
};

export default BlogSearch;
