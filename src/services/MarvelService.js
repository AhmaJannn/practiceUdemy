import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {
  const _apiBase = "https://gateway.marvel.com:443/v1/public/";
  const _apiKey = "apikey=e85841c137b935d1ad9c083f74518ab6";
  const _baseOffset = 210;

  const { loading, error, request, clearError } = useHttp();

  const getAllCharacter = async (offset = _baseOffset) => {
    const res = await request(
      `${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`
    );
    return res.data.results.map(_transformCharacter);
  };

  const getCharacter = async (id) => {
    const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
    return _transformCharacter(res.data.results[0]);
  };

  const getAllComics = async (offset = 0) => {
    const res = await request(
      `${_apiBase}comics?limit=8&offset=${offset}&${_apiKey}`
    );
    return res.data.results.map(_transformComics);
  };

  const _transformCharacter = (char) => {
    return {
      id: char.id,
      name: char.name,
      description: char.description
        ? `${char.description.slice(0, 210)}...`
        : "There is no description for this character",
      thumbnail: char.thumbnail.path + "." + char.thumbnail.extension,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
      comics: char.comics.items,
    };
  };

  const _transformComics = (comics) => {
    return {
      id: comics.id,
      title: comics.title,
      price: comics.prices[0].price
        ? `${comics.prices[0].price}$`
        : "not available",
      thumbnail: comics.thumbnail.path + "." + comics.thumbnail.extension,
      description: comics.description || "There is no description",
      language: comics.textObjects.language || "en-us",
      pageCount: comics.pageCount
        ? `${comics.pageCount} p.`
        : "No information about the number of pages",
    };
  };

  return {
    loading,
    error,
    getAllCharacter,
    getCharacter,
    getAllComics,
    clearError,
  };
};

export default useMarvelService;
