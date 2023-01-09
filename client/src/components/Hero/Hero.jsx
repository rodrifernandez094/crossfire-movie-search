import { useQuery } from "react-query";
import { getPopularMovies } from "../../apiCalls";
import { useNavigate } from "react-router-dom";
import { Title, Subtitle, Button, Container, Banner } from "./hero.styles";
import NotFound from "../../pages/NotFound";

const Hero = ({ config }) => {
  const navigate = useNavigate();

  const { data, isError, error } = useQuery("popularMovies", getPopularMovies);
  if (isError) return <NotFound error={error} />;

  const title = data?.results[0]?.original_title;
  const subtitle = data?.results[0]?.overview;
  const movieId = data?.results[0]?.id;

  const backdropsUrl = `${config?.images?.secure_base_url}${config?.images.backdrop_sizes[3]}`;
  const bgImage = `${backdropsUrl}/${data?.results[0]?.backdrop_path}`;

  return (
    <Container background={bgImage}>
      <Banner>
        <Title> {title} </Title>
        <Subtitle> {subtitle} </Subtitle>
        <Button onClick={() => navigate(`/movie/${movieId}`)}>See more</Button>
      </Banner>
    </Container>
  );
};

export default Hero;
