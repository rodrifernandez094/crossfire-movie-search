import { useQuery } from "react-query";
import { getPopularMovies } from "../apiCalls";
import styled from "styled-components";
import Card from "./Card";
import { Wrapper } from "../styles/Common.style";

const Trending = () => {
  const Container = styled.div`
    width: 100%;
    text-align: left;
    padding: 3.5rem 0;
  `;

  const Title = styled.span`
    font-size: 1.25em;
    font-weight: 600;
    text-align: left;
    padding: 0 3rem;
  `;

  const { data, isError, error } = useQuery("popularMovies", getPopularMovies);
  if (isError) console.log(error);

  return (
    <Container>
      <Title>Trending Now</Title>
      <Wrapper>
        {data?.results &&
          data.results?.slice(0, 10).map((movie) => {
            return <Card movieData={movie} />;
          })}
      </Wrapper>
    </Container>
  );
};

export default Trending;
