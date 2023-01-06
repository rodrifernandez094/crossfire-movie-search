import { useQuery } from "react-query";
import { getPopularMovies } from "../../apiCalls";
import { Link } from "react-router-dom";
import { Title, Subtitle, Button, Container, Banner } from "./hero.styles";

const Hero = () => {
  const config = JSON.parse(localStorage.getItem("config"));
  const backdropsUrl = `${config.images.secure_base_url}${config.images.backdrop_sizes[3]}`;

  const { data, isError, error } = useQuery("popularMovies", getPopularMovies);
  if (isError) console.log(error);

  const title = data?.results[0]?.original_title;
  const subtitle = data?.results[0]?.overview;
  const movieId = data?.results[0]?.id;
  const bgImage = `${backdropsUrl}/${data?.results[0]?.backdrop_path}`;

  return (
    <Container background={bgImage}>
      <Banner>
        <Title> {title} </Title>
        <Subtitle> {subtitle} </Subtitle>
        <Link to={`/movie/${movieId}`}>
          <Button>See more</Button>
        </Link>
      </Banner>
    </Container>
  );
};

export default Hero;
