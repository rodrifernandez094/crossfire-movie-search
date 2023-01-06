import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0.5) 20%,
      rgba(20, 20, 20, 0.2) 80%,
      rgba(12, 12, 12, 1) 100%
    ),
    ${(props) => `url(${props.background}) no-repeat center center`};
  background-size: cover;
  padding: 0 3rem;
  @media (max-width: 480px) {
    background-position: 25%;
    padding: 0;
  }
`;

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 60%;
  height: 100%;
  @media (max-width: 480px) {
    width: 100%;
    padding: 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 3.25em;
  line-height: 1;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.span`
  font-size: 1.25em;
  line-height: 1.25;
  padding: 2rem 0;
`;

export const Button = styled.a`
  color: #fff;
  border: 0;
  padding: 0.6rem 2rem;
  margin-right: 0.75rem;
  font-weight: 600;
  border-radius: 0.125rem;
  background-color: rgba(31, 31, 31, 0.4);
  font-size: 100%;
  text-decoration: none;
`;
