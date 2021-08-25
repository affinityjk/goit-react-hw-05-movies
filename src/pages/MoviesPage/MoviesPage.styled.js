import styled from "@emotion/styled/macro";

export const FormWrap = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  margin-bottom: 25px;
`;

export const SearchForm = styled.form`
  display: flex;
  min-width: 600px;
  text-align: center;
  border: 3px solid #87cefa;
  border-radius: 7px;
  overflow: hidden;

  & > input {
    width: 100%;
    padding-left: 8px;
    line-height: 1.2;
    color: #9966cc;
    background-color: #e0ffff;
    outline: none;
    border: none;
  }

  & > button {
    padding: 8px;
    background-color: #87cefa;
    border: none;
    & > svg {
      display: flex;
      align-items: center;
      color: white;
    }
  }
`;
