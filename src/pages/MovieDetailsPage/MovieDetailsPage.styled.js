import styled from "@emotion/styled/macro";

export const CardContainer = styled.div`
  padding: 30px;
  margin-bottom: 40px;
  border: 3px solid #87cefa;
  background-color: white;
  border-radius: 10px;
`;

export const CardWrap = styled.div`
  display: flex;
`;

export const CardImg = styled.img`
  min-width: 300px;
  border-radius: 10px;
  overflow: hidden;
`;

export const DetailsWrap = styled.div`
  padding: 20px;
`;

export const Title = styled.h2`
  font-size: 22px;
  margin-bottom: 7px;
  font-weight: 700;
  text-transform: uppercase;
  color: #87cefa;
`;

export const Details = styled.p`
  font-size: 18px;
  margin-bottom: 5px;
  font-weight: 700;
  color: #9966cc;

  & > span {
    font-weight: 400;
    padding-left: 5px;
    color: black;
  }
`;
