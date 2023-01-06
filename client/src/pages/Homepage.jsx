import { useEffect } from "react";
import { Container } from "../styles/Common.style";
import styled from "styled-components";
import Trending from "../components/Trending";
import Hero from "../components/Hero/Hero";

const Homepage = () => {
  useEffect(() => {
    fetch("/api/config")
      .then((res) => res.json())
      .then((data) => localStorage.setItem("config", JSON.stringify(data)))
      .catch((err) => console.log(err));
  }, []);

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
