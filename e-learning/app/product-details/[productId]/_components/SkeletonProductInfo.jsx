import React from "react";

const SkeletonProductInfo = () => {
  return (
    <div className="flex flex-col gap-4 rounded-lg">
      <div className="h-[20px] w-[400px] rounded-lg bg-slate-200 animate-pulse"></div>
      <div className="h-[20px] w-[300px] rounded-lg bg-slate-200 animate-pulse"></div>
      <div className="h-[20px] w-[200px] rounded-lg bg-slate-200 animate-pulse"></div>
      <div className="h-[20px] w-[400px] rounded-lg bg-slate-200 animate-pulse"></div>
      <div className="h-[20px] w-[50px] rounded-lg  bg-slate-200 animate-pulse"></div>
      <div className="h-[20px] w-[150px] rounded-lg bg-slate-200 animate-pulse"></div>

    </div>
  );
};

export default SkeletonProductInfo;
