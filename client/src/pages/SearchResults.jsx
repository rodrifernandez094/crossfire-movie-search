import { useInfiniteQuery } from "react-query";
import styled from "styled-components";
import { getMovies } from "../apiCalls";
import { Container, Wrapper } from "../styles/Common.style";
import Card from "../components/Card";
import InfiniteScroll from "react-infinite-scroll-component";
import InfiniteSpinner from "../components/InfiniteSpinner";
import Spinner from "../components/Spinner";
import NotFound from "./NotFound";

const SearchResults = () => {
  const MovieWrapper = styled(Wrapper)`
    padding-top: 8rem;
  `;

  const query = localStorage.getItem("query");
  const {
    data,
    status,
    isError,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ["movies", query],
    ({ pageParam = 1 }) => {
      const searchUrl = `/api/movies/${query}&page=${pageParam}`;
      return getMovies(searchUrl);
    },
    {
      getNextPageParam: (lastPage) => lastPage.page + 1,
      keepPreviousData: true,
    }
  );

  if (isError) return <NotFound error={error} />;

  const movies =
    data?.pages.reduce((prevMovies, page) => {
      return prevMovies.concat(page.results);
    }, []) ?? [];

  return (
    <Container>
      {status === "loading" && <Spinner />}
      <InfiniteScroll
        dataLength={movies.length}
        hasMore={hasNextPage}
        next={() => fetchNextPage()}
        loader={isFetchingNextPage && <InfiniteSpinner />}
      >
        <MovieWrapper>
          {status === "success" && movies ? (
            movies?.map((movie) => {
              return <Card key={movie.id} movieData={movie} />;
            })
          ) : (
            <></>
          )}
        </MovieWrapper>
      </InfiniteScroll>
    </Container>
  );
};

export default SearchResults;
