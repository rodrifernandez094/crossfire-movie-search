import { useQuery } from "react-query";
import { getPopularMovies } from "../apiCalls";
import styled from "styled-components";
import Card from "./Card";
import { Wrapper } from "../styles/Common.style";

const Trending = () => {
  const Container = styled.div`
    width: 100%;
    padding: 3.5rem 0;
  `;

  const Title = styled.h2`
    font-size: 1.25em;
    font-weight: 600;
    text-align: left;
    padding: 0 3rem;
    @media (max-width: 768px) {
      margin: 0 auto;
      text-align: center;
    }
  `;

  const { data, isError, error } = useQuery("popularMovies", getPopularMovies);
  if (isError) console.log(error);

  return (
    <Container>
      <Title>Trending Now</Title>
      <Wrapper>
        {data?.results &&
          data.results?.slice(0, 10).map((movie) => {
            return <Card key={movie.id} movieData={movie} />;
          })}
      </Wrapper>
    </Container>
  );
};

export default Trending;
