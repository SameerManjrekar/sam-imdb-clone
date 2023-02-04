import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;
const BASE_URL = "https://api.themoviedb.org/3/";
type Props = {
  searchParams: any;
};

export default async function Home(props: Props) {
  const genre = props.searchParams.genre || "fetchTrending";
  const res = await fetch(
    `${BASE_URL}/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  if (!res.ok) {
    throw new Error("Failed to Fetch Data!");
  }

  const data = await res.json();
  const results = data.results;

  console.log("res", results);
  return (
    <div>
      <Results results={results} />
    </div>
  );
}
