import defaultMoviePoster from "../assets/images/movie-poster.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { poster_path, title, id } = props.movieData;

  const Card = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
    max-width: 240px;
    max-height: 340px;
    position: relative;
  `;

  const ImgContainer = styled.div`
    overflow: hidden;
  `;

  const CardImg = styled.img`
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
    transition: all 250ms;
    background-size: cover;
    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  `;

  const config = JSON.parse(localStorage.getItem("config"));
  const imgUrl = `${config.images.secure_base_url}${config.images.poster_sizes[3]}/${poster_path}`;
  return (
    <Card>
      <ImgContainer>
        <Link to={`/movie/${id}`}>
          <CardImg
            src={poster_path ? `${imgUrl}` : `${defaultMoviePoster}`}
            alt={`${title}`}
            className="rounded-top"
          />
        </Link>
      </ImgContainer>
    </Card>
  );
};

export default Card;
