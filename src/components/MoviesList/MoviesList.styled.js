import styled from "@emotion/styled/macro";

export const MoviesGallery = styled.ul`
  display: grid;
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: repeat(auto-fill, minmax(245px, 1fr));
  grid-gap: 20px;
`;

export const MoviesItem = styled.li`
  display: flex;
  justify-content: center;
  background-color: #e0ffff;
  border-radius: 5px;
  overflow: hidden;
  transition: 0.5s linear;
  padding: 5px;
  &:hover,
  &:focus {
    transform: scale(1.1);
    box-shadow: rgba(188, 188, 235, 0.3) 0px 4px 16px,
      rgba(188, 188, 235, 0.3) 0px 8px 24px,
      rgba(188, 188, 235, 0.3) 0px 16px 56px;
  }
`;

export const MovieTitle = styled.h2`
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 16px;
  font-weight: 700;
  color: #9966cc;
`;

export const MoviePoster = styled.img`
  height: 360px;
`;
