import { ThreeDots } from "react-loader-spinner";
import { Container } from "../styles/Common.style";
import styled from "styled-components";

const Spinner = () => {
  const SpinnerContainer = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  return (
    <SpinnerContainer>
      <ThreeDots
        ariaLabel="three-dots-loading"
        color="#f3f3f3"
        height={100}
        width={100}
      />
    </SpinnerContainer>
  );
};

export default Spinner;
