import { Header, Navbar, SearchBar, Search, Logo } from "./Nav.style";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Nav = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    localStorage.setItem("query", query);
    navigate(`/movies/${query}`);
  };

  return (
    <Header>
      <Navbar>
        <Logo onClick={() => navigate("/")}>Crossfire</Logo>
        <SearchBar onSubmit={handleSearch}>
          <Search
            placeholder="Search"
            onChange={(e) => setQuery(e.target.value)}
          />
        </SearchBar>
      </Navbar>
    </Header>
  );
};

export default Nav;
