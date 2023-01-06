import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Navbar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2rem 2.25rem;
`;

export const SearchBar = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Li = styled.li`
  color: white;
  font-weight: bold;
`;

export const Search = styled.input.attrs((props) => ({
  type: "text",
}))`
  border-radius: 5px;
  border: none;
  background-color: #f3f3f3;
  color: #333333;
  padding: 0.5rem 1rem;
`;

export const Logo = styled.span`
  color: #f3f3f3;
  font-size: 2em;
  font-family: "Moon Dance", cursive;
  cursor: pointer;
  padding: 0.5rem 0;
  vertical-align: bottom;
`;
