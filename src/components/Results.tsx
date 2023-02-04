import React from "react";

type Props = {
  results: Array<any>;
};

const Results = (props: Props) => {
  const { results } = props;
  return (
    <div>
      {results.map((result) => (
        <div key={result.id}>{result.original_title}</div>
      ))}
    </div>
  );
};

export default Results;
