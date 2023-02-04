import Results from "@/components/Results";
import React from "react";

type Props = {
  params: any;
};

const API_KEY = process.env.API_KEY;
const BASE_URL = "https://api.themoviedb.org/3/search/movie/";

export default async function SearchMovie(props: Props) {
  const searchTerm = props.params.searchTerm;
  const res = await fetch(
    `${BASE_URL}?api_key=${API_KEY}&query=${searchTerm}&language=en-US&include_adult=false`
  );

  if (!res.ok) {
    throw new Error("Error Fetching data!");
  }

  const data = await res.json();
  const results = data.results;

  return (
    <div>
      {results && results.length === 0 && (
        <h1 className="text-center pt-6">No results found!</h1>
      )}
      {results && results.length > 0 && <Results results={results} />}
    </div>
  );
}
