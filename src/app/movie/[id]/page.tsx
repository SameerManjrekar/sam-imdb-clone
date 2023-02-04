import React from "react";
import Image from "next/image";

type Props = {
  params: any;
};

const API_KEY = process.env.API_KEY;
const BASE_URL = "https://api.themoviedb.org/3/";

export default async function MovieDetailPage(props: Props) {
  const movieId = props.params.id;
  //   console.log("id", movieId);
  const res = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);

  //   if (!res.ok) {
  //     throw new Error("Failed to Fetch Data!");
  //   }

  const data = await res.json();

  return (
    <div className="w-full mt-8">
      <div className="p-4md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            data.backdrop_path || data.poster_path
          }`}
          width={500}
          height={300}
          alt="Movie Poster"
          className="rounded-lg"
          style={{
            maxWidth: "100%",
            height: "100%",
          }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
        ></Image>
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">{data.title || data.name}</h2>
          <p className="text-lg mb-3">
            <span className="mr-1 font-semibold">Overview:</span>
            {data.overview}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {data.release_date || data.first_air_date}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            {data.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}
