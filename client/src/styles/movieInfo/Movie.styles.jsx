import { Container } from "../Common.style";
import styled from "styled-components";

export const MovieContainer = styled(Container)`
  background: linear-gradient(
      to right,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0.8) 20%,
      rgba(20, 20, 20, 0.2) 80%,
      rgba(20, 20, 20, 1) 100%
    ),
    ${(props) => `url(${props.background}) no-repeat center center`};
  background-size: cover;
  border: 1px solid transparent;
`;

export const Profile = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  align-items: center;
  margin-top: 5rem;
  padding: 3rem 2rem;
  @media (max-width: 768px) {
    justify-content: center;
    padding: 3rem 0.5rem;
  }
`;

export const InfoContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const MetaData = styled.div`
  color: #bdbdbd;
  display: flex;
  justify-content: space-between;
  width: 50%;
  font-size: 0.9em;
`;

export const Score = styled.span`
  margin-left: 5px;
  font-weight: bold;
  color: ${(props) => (props.score > 6 ? "#2f7e39" : "#b13636")};
`;

export const Credits = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

export const CreditsText = styled.p`
  color: #5c5c5c;
  font-size: 0.9em;
`;

export const Title = styled.h1`
  @media (max-width: 768px) {
    font-size: 1.8em;
  }
`;
