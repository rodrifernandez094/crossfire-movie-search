import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getMovie } from "../apiCalls";
import {
  MovieContainer,
  Profile,
  InfoContainer,
  Score,
  MetaData,
  Credits,
  CreditsText,
  Title,
} from "../styles/movieInfo/Movie.styles";
import Spinner from "../components/Spinner";
const Movie = () => {
  const { id } = useParams();
  const { data, status } = useQuery(["movie", id], () => getMovie(id), {
    keepPreviousData: true,
  });
  const config = JSON.parse(localStorage.getItem("config"));
  const backdropsUrl = `${config?.images?.secure_base_url}${config?.images?.backdrop_sizes[3]}`;
  const bgImage = `${backdropsUrl}/${data?.images?.backdrops[0]?.file_path}`;

  return (
    <MovieContainer background={bgImage}>
      {status === "loading" && <Spinner />}
      {status === "success" && (
        <Profile>
          <InfoContainer>
            <Title> {data?.original_title} </Title>
            <MetaData className="d-flex justify-content-between text-muted w-50 meta">
              {data?.genres[0] && <p>{data?.genres[0]?.name}</p>}
              <p>{data?.release_date}</p>
              <p>
                TMDB
                <Score score={data?.vote_average}>
                  {Math.round(data?.vote_average * 10) / 10}
                </Score>
              </p>
            </MetaData>
            <p> {data?.overview} </p>
            <Credits className="credits d-flex w-75 justify-content-between">
              <div className="director d-flex flex-column">
                <p>Director</p>
                {data?.credits?.crew[0] && (
                  <CreditsText className="text-muted">
                    {data.credits?.crew[0]?.name}
                  </CreditsText>
                )}
              </div>
              <div className="cast">
                <p>Actors</p>
                {data?.credits?.cast[0] &&
                  data?.credits?.cast.slice(0, 3).map((actor) => {
                    return <CreditsText> {actor?.name} </CreditsText>;
                  })}
              </div>
            </Credits>
          </InfoContainer>
        </Profile>
      )}
    </MovieContainer>
  );
};

export default Movie;
