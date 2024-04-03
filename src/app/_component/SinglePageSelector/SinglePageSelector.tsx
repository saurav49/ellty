import React from "react";
export type SinglePageSelectorPropsType = {
  page: string;
  pageIndex: number;
  checked: boolean;
  checkboxHandler: (position: number) => void;
};
function SinglePageSelector({
  page,
  pageIndex,
  checked,
  checkboxHandler,
}: SinglePageSelectorPropsType) {
  return (
    <div className="relative flex items-center justify-between py-2 pl-[15px] pr-[22px] w-full">
      <label
        htmlFor={page}
        className="peer cursor-pointer text-sm font-normal text-charcoalblack"
      >
        {page}
      </label>
      <input
        type="checkbox"
        name={page}
        id={page}
        checked={checked}
        onChange={() => checkboxHandler(pageIndex)}
        className="peer appearance-none flex items-center justify-center cursor-pointer border border-divider
        rounded-md h-[23px] w-[23px] hover:opacity-60
        outline-none shrink-0
        hover:border hover:border-silver
        focus-visible:outline-none
        focus-within:outline-offset-2
        disabled:cursor-not-allowed disabled:opacity-50
        checked:bg-blue checked:hover:bg-lightblue peer-active:ring-4 peer-active:ring-[#eff6ff] active:ring-4 active:ring-[#eff6ff]"
      />
      <svg
        className="hidden peer-hover:block peer-checked:block absolute top-[11px] right-[25px] w-[16.88px] h-[10.1px] pointer-events-none fill-none mt-1"
        width="17"
        height="13"
        viewBox="0 0 17 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.68 6.592L6.22879 11.5272C6.24925 11.5454 6.28055 11.5437 6.29899 11.5235L16.32 0.519997"
          stroke={checked ? "#fff" : "#878787"}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export { SinglePageSelector };
