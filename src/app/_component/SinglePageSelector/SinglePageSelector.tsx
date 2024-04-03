import React from "react";
export type SinglePageSelectorPropsType = {
  page: string;
};
function SinglePageSelector({ page }: SinglePageSelectorPropsType) {
  return (
    <div className="flex items-center justify-between py-2 pl-[15px] pr-[22px] w-full">
      <span className="font-montserrat text-sm font-normal text-charcoalblack">
        {page}
      </span>
      <Checkbox />
    </div>
  );
}

function Checkbox() {
  return <input type="checkbox" name="check" id="check" />;
}

export { SinglePageSelector, Checkbox };
