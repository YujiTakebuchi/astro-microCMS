import { useState } from "preact/hooks";
import type { JSXInternal } from "preact/src/jsx";

const SearchButton = () => {
  const [value, setValue] = useState(
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("q") ?? ""
      : ""
  );
  const handleChange: JSXInternal.GenericEventHandler<HTMLInputElement> = (
    e
  ) => {
    console.log("entering ...");
    setValue((e.target as HTMLInputElement).value);
  };
  const handleSubmit: JSXInternal.GenericEventHandler<HTMLFormElement> = (
    e
  ) => {
    console.log("submit!");
    e.preventDefault();
    window.location.href = `/search?q=${value}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label for="blog_search">記事を検索</label>
      <input id="blog_search" value={value} onChange={handleChange} />
      <button>検索</button>
    </form>
  );
};

export default SearchButton;
