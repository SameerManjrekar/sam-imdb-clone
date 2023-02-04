import React from "react";

type Props = {};

const loading = (props: Props) => {
  return (
    <div className="flex justify-center">
      <img className="h-96" src="spinner.svg" alt="loading..." />
    </div>
  );
};

export default loading;
