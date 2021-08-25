import { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import toast from "react-hot-toast";
import { fetchMoviesDetails } from "services/fetchMoviesAPI";
import { IMG_URL } from "constants/movieAPI";
import { Status } from "constants/status.js";
import Spinner from "components/Spinner/Spinner";
import GoBackBtn from "components/GoBackBtn/GoBackBtn";
import MovieDetailsNav from "components/MovieDetailsNav/MovieDetailsNav";
import defaultImage from "images/defaultImage.jpg";
import {
  CardWrap,
  CardImg,
  DetailsWrap,
  Title,
  Details,
  CardContainer,
} from "pages/MovieDetailsPage/MovieDetailsPage.styled";

function MovieDetailsPage(props) {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [status, setStatus] = useState(Status.PENDING);

  useEffect(() => {
    async function getMovie() {
      try {
        await fetchMoviesDetails(Number(movieId)).then(setMovie);
        setStatus(Status.RESOLVED);
      } catch (err) {
        setStatus(Status.REJECTED);
        toast.error(`${err.message}.Redirected to the homepage.`);
      }
    }
    getMovie();
  }, [movieId]);

  const poster =
    movie && movie.poster_path
      ? `${IMG_URL}${movie.poster_path}`
      : defaultImage;

  return (
    <>
      {status === Status.PENDING && <Spinner />}
      {status === Status.RESOLVED && (
        <>
          <GoBackBtn />
          <CardContainer>
            <CardWrap>
              <div>
                <CardImg src={poster} alt={movie.original_title} />
              </div>

              <DetailsWrap>
                <Title>{movie.original_title}</Title>

                <Details>
                  Score: <span>{movie.vote_average}</span>
                </Details>
                <Details>
                  Overview: <span>{movie.overview}</span>
                </Details>
                <Details>
                  Genres:
                  {movie.genres.map((g) => {
                    return <span key={g.id}>{g.name}</span>;
                  })}
                </Details>
              </DetailsWrap>
            </CardWrap>
            <MovieDetailsNav movie={movie} />
          </CardContainer>
        </>
      )}

      {status === Status.REJECTED && <Redirect to="/" />}
    </>
  );
}

export default MovieDetailsPage;
