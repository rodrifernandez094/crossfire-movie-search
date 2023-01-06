import { Container } from "../styles/Common.style";
import styled from "styled-components";
import Trending from "../components/Trending";
import Hero from "../components/Hero/Hero";
import { useQuery } from "react-query";
import Spinner from "../components/Spinner";
import { getConfig } from "../apiCalls";

const Homepage = () => {
  const { data, isLoading } = useQuery(["config"], () => getConfig());
  if (isLoading) return <Spinner />;
  localStorage.setItem("config", JSON.stringify(data));

  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
  `;

  return (
    <Container>
      <Wrapper>
        <Hero />
      </Wrapper>
      <Trending />
    </Container>
  );
};

export default Homepage;
