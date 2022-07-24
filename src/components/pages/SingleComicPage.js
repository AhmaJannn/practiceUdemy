import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import useMarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import { Page404 } from "./index";

import "./singleComicPage.scss";

const SingleComicPage = () => {
  const [comic, setComic] = useState(null);
  const { comicId } = useParams();

  const { loading, error, getComics, clearError } = useMarvelService();

  useEffect(() => {
    updateComic();
  }, [comicId]);

  const onComicLoaded = (comics) => {
    setComic(comics);
  };

  const updateComic = () => {
    clearError();
    getComics(comicId).then(onComicLoaded);
  };

  const errorMessage = error ? <Page404 /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = loading || error || !comic ? null : <View comic={comic} />;

  return (
    <>
      {errorMessage}
      {spinner}
      {content}
    </>
  );
};

const View = ({ comic }) => {
  const { title, description, pageCount, language, thumbnail, price } = comic;

  return (
    <div className="single-comic">
      <img src={thumbnail} alt={title} className="single-comic__img" />
      <div className="single-comic__info">
        <h2 className="single-comic__name">{title}</h2>
        <p className="single-comic__descr">{description}</p>
        <p className="single-comic__descr">{pageCount}</p>
        <p className="single-comic__descr">Language: {language}</p>
        <div className="single-comic__price">{price}</div>
      </div>
      <Link to="/comics" className="single-comic__back">
        Back to all
      </Link>
    </div>
  );
};

export default SingleComicPage;
