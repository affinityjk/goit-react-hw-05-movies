import React from "react";
import PropTypes from "prop-types";
import { IMG_URL } from "constants/movieAPI.js";
import defaultImage from "images/defaultImage.jpg";
import {
  ContentWrap,
  ImgReviewer,
  ReviewItem,
  ReviewText,
  ReviewerName,
} from "pages/Reviews/Reviews.styled";

function Reviews({ movie }) {
  const reviews = movie.reviews.results;
  return (
    <>
      {reviews.length === 0 ? (
        "We don't have any reviews for this movie"
      ) : (
        <ul>
          {reviews.map(({ id, author, author_details, content }) => {
            const authorImg =
              author_details.avatar_path === null
                ? false
                : author_details.avatar_path.startsWith("/https")
                ? author_details.avatar_path.slice(1)
                : `${IMG_URL}${author_details.avatar_path}`;

            return (
              <ReviewItem key={id}>
                <ContentWrap>
                  <ImgReviewer src={authorImg || defaultImage} alt={author} />
                  <ReviewerName>{author}</ReviewerName>
                </ContentWrap>
                <ReviewText>{content}</ReviewText>
              </ReviewItem>
            );
          })}
        </ul>
      )}
    </>
  );
}

Reviews.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default Reviews;
