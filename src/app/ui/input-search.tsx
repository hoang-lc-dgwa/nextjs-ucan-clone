import React from "react";
import Image from "next/image";

const InputSearch = () => {
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
            <Image
              src="/images/ico_search.svg"
              width={19}
              height={20}
              alt="SEARCH"
            />
          </button>
        </div>
      </form>
    </>
  );
};

export default InputSearch;
