import styled from "styled-components";

export const StyledNav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    text-decoration: none;
    li {
      padding-left: 15px;
      .activenav {
        font-weight: bolder;
        transition: 0.2s;
        letter-spacing: 0.1rem;
        color: white;
        background-color: rgba(107, 15, 18, 1);
      }
      a {
        text-decoration: none;
        letter-spacing: 0.1rem;
        color: ${({ theme }) => theme.colors.tertiary};
        font-weight: 600;
        padding: 5px;
        &:hover {
          font-weight: bolder;
          transition: 0.2s;
          letter-spacing: 0.1rem;
          background-color: rgba(107, 15, 18, 0.1);
        }
      }
    }
  }
`;
