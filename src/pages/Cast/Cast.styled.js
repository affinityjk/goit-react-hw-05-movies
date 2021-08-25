import styled from "@emotion/styled";

export const CastList = styled.ul`
  display: grid;
  place-items: center;
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 12px;
  & > li {
    width: 160px;
    height: 100%;
    text-align: center;
    border: 2px solid #87cefa;
    border-radius: 5px;
    overflow: hidden;
  }
`;

export const ActorImage = styled.img`
  display: inline-block;
  width: 100%;
  height: 200px;
  margin-bottom: 5px;
  object-fit: cover;
`;

export const ActorName = styled.h2`
  font-size: 16px;
  line-height: 1.2;
  text-align: left;
  font-weight: 700;

  padding-left: 8px;
  padding-right: 8px;
  margin-bottom: 3px;
`;

export const Character = styled.p`
  font-size: 14px;
  font-weight: 400;
  font-style: italic;
  text-align: left;

  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 8px;
  margin-bottom: 3px;

  & > span {
    margin-left: 5px;
  }
`;
