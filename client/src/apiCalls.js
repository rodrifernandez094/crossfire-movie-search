export const getMovies = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw Error("Not found");
  }
  const data = await response.json();
  if (data.errors) {
    throw Error("Not found");
  }
  return data;
};

export const getMovie = async (id) => {
  const response = await fetch(
    `/api/movie/${id}&append_to_response=credits,images`
  );
  return response.json();
};

export const getConfig = async () => {
  const response = await fetch("/api/config");
  const data = await response.json();
  localStorage.setItem("config", JSON.stringify(data));

  return data;
};

export const getPopularMovies = async () => {
  const response = await fetch("/api/discover/movie?sort_by=popularity.desc");
  return response.json();
};
