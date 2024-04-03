import React from "react";
import { Button, Divider, SinglePageSelector } from "..";

function PageSelector() {
  return (
    <div
      className="flex flex-col items-center py-[10px] px-[15px] border border-[#EEEEEE] rounded-md"
      style={{
        boxShadow: "0px 0px 4px 0px #1414141A",
      }}
    >
      <SinglePageSelector page="All pages" />
      <Divider />
      <SinglePageSelector page="Page 1" />
      <SinglePageSelector page="Page 2" />
      <SinglePageSelector page="Page 3" />
      <SinglePageSelector page="Page 4" />
      <Divider />
      <div className="py-[10px]">
        <Button>Done</Button>
      </div>
    </div>
  );
}

export { PageSelector };
