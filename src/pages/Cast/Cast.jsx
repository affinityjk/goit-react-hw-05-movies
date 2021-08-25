import React from "react";
import PropTypes from "prop-types";
import { IMG_URL } from "constants/movieAPI.js";
import defaultImage from "images/defaultImage.jpg";
import {
  CastList,
  ActorImage,
  ActorName,
  Character,
} from "pages/Cast/Cast.styled";

function Cast({ movie }) {
  const cast = movie.credits.cast;

  return (
    <>
      <CastList>
        {cast.map(({ id, name, profile_path, character }) => {
          const actor = profile_path
            ? `${IMG_URL}${profile_path}`
            : defaultImage;
          return (
            <li key={id}>
              <ActorImage src={actor} alt={name} />
              <ActorName>{name}</ActorName>
              <Character>{character}</Character>
            </li>
          );
        })}
      </CastList>
    </>
  );
}

Cast.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default Cast;
