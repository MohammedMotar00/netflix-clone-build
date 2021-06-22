import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "../axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({ title, fetchURL, isLargeRow = false }) {
  const BASE_URL = "http://image.tmdb.org/t/p/original/";

  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request?.data?.results);
      return request;
    }

    fetchData();
  }, [fetchURL]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const showTrailer = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <RowContainer>
      <h2>{title}</h2>
      <RowPosters>
        {movies.map(
          (movie) =>
            ((isLargeRow && movie?.poster_path) ||
              (!isLargeRow && movie?.backdrop_path)) && (
              <Image
                onClick={() => showTrailer(movie)}
                className={isLargeRow && "row__posterLarge"}
                key={movie?.id}
                src={`${BASE_URL}${
                  isLargeRow ? movie?.poster_path : movie?.backdrop_path
                }`}
                alt={movie?.name}
              />
            )
        )}
      </RowPosters>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </RowContainer>
  );
}

export default Row;

const RowContainer = styled.div`
  color: white;
  margin-left: 20px;
`;

const RowPosters = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px;

  ::-webkit-scrollbar {
    display: none;
  }

  .row__posterLarge {
    max-height: 250px;

    :hover {
      transform: scale(1.09);
      opacity: 1;
    }
  }
`;

const Image = styled.img`
  max-height: 100px;
  object-fit: contain;
  margin-right: 10px;
  width: 100%;
  transition: transform 450ms;

  :hover {
    transform: scale(1.08);
    opacity: 1;
  }
`;
