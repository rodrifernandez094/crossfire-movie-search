import styled from "styled-components";
import { RotatingLines } from "react-loader-spinner";

const InfiniteSpinner = () => {
  const Container = styled.div`
    padding: 1rem;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  `;
  return (
    <Container>
      <RotatingLines color="grey" height={25} width={25} />
    </Container>
  );
};

export default InfiniteSpinner;
