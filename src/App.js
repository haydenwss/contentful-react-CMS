import { useEffect, useState } from "react";
import styled from "styled-components";
import useContentful from "./useContentful";
import AuthorCard from "./AuthorCard";

const App = () => {
  const [authors, setAuthors] = useState([]);
  const { getAuthors } = useContentful();

  useEffect(() => {
    getAuthors().then((response) => response && setAuthors(response));
  });

  return (
    <Wrapper>
      <TitleWrapper>
        <h1>Contentful API</h1>
        <p>Home made pasta recipes</p>
      </TitleWrapper>
      {authors.map((author, index) => (
        <AuthorCard key={index} author={author} />
      ))}
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  font-family: "Roboto";
  margin: 40px;

  display: grid;
  row-gap: 20px;
  justify-content: center;
`;

const TitleWrapper = styled.div`
  * {
    margin: 0;
  }

  display: grid;
  row-gap: 10px;
`;
