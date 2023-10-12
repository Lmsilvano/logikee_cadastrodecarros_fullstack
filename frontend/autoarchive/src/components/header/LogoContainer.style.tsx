import styled from "styled-components";

export const StyledLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 11vh;
  min-height: 45px;
  svg {
    height: 8vh;
    min-height: 35px;
  }

  h3 {
    color: ${({ theme }) => theme.colors.tertiary};
    letter-spacing: 0.2rem;
    text-shadow: 0px 3px 3px rgba(255, 255, 255, 0.5);
  }
`;
