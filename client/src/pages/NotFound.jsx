import styled from "styled-components";
import { Container } from "../styles/Common.style";
import { Link } from "react-router-dom";

const NotFound = (props) => {
  const ErrorContainer = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;

  const H1 = styled.h1`
    color: white;
    font-size: 2em;
    text-align: center;
    margin-bottom: 2rem;
  `;
  const LinkBtn = styled.a`
    color: #fff;
    font-size: 1.1em;
    text-decoration: none;
  `;
  const error = props.error;
  return (
    <ErrorContainer>
      <H1 className="text-light text-center mb-4">{error.message}</H1>
      <Link to="/">
        <LinkBtn>Go Back</LinkBtn>
      </Link>
    </ErrorContainer>
  );
};

export default NotFound;
