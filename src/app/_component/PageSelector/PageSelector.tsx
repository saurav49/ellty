import React from "react";
import { Button, Divider, SinglePageSelector } from "..";
import MultiPageSelector from "../MultiPageSelector/MultiPageSelector";
import { PAGE_SIZE } from "../../../../constant/contants";

const noOfPages = new Array(PAGE_SIZE);
function PageSelector() {
  const [checkedState, setCheckedState] = React.useState<Array<boolean>>(
    noOfPages.fill(false)
  );
  const [isMultiPageSelect, setIsMultiPageSelect] =
    React.useState<boolean>(false);
  const handleOnCheckboxClicked = (position: number) => {
    setCheckedState((prevState) =>
      prevState.map((state, index) => (index + 1 === position ? !state : state))
    );
    setIsMultiPageSelect(false);
  };
  const handleSelectAllCheckbox = () => {
    setCheckedState(() =>
      isMultiPageSelect
        ? new Array(PAGE_SIZE).fill(false)
        : new Array(PAGE_SIZE).fill(true)
    );
    setIsMultiPageSelect((prevState) => !prevState);
  };
  return (
    <div
      className="flex flex-col items-center py-[10px] px-[15px] border border-[#EEEEEE] rounded-md"
      style={{
        boxShadow: "0px 0px 4px 0px #1414141A",
      }}
    >
      <MultiPageSelector
        checked={isMultiPageSelect}
        checkboxHandler={handleSelectAllCheckbox}
      />
      <Divider />
      {noOfPages.map((i, index) => {
        return (
          <SinglePageSelector
            key={index}
            page={`Page ${index + 1}`}
            pageIndex={index + 1}
            checked={checkedState[index]}
            checkboxHandler={handleOnCheckboxClicked}
          />
        );
      })}
      <Divider />
      <div className="py-[10px]">
        <Button>Done</Button>
      </div>
    </div>
  );
}

export { PageSelector };
