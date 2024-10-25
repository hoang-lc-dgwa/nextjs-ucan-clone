import { HiOutlineSearch } from "react-icons/hi";

export default function InputSearch() {
  return (
    <>
      <form className="search-form" action="#">
        <div className="search-form__inner">
          <input
            type="text"
            className="input-text"
            placeholder="キーワードから探す"
          />
          <button type="submit" className="btn-submit">
            <HiOutlineSearch />
          </button>
        </div>
      </form>
    </>
  );
}
