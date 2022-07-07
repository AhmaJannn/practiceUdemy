import {Component} from "react";
import MarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

import './charList.scss';

class CharList extends Component {

    state = {
        charList: [],
        loading: true,
        error: false
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.marvelService
            .getAllCharacter()
            .then(this.onCharListLoaded)
            .catch(this.onError)
    }


    onCharListLoaded = (charList) => {
        this.setState({charList, loading: false})
    }

    onError = () => {
        this.setState({error: true, loading: false})
    }


    render() {
        const {charList, loading, error} = this.state;
        const errorMessage = error ? <ErrorMessage /> : null;
        const spinner = loading ?  <Spinner /> : null;
        const content = !(loading || error) ? charList.map((item) => {
            const {id, name, thumbnail} = item;
            return <CharListItem key={id} name={name} thumbnail={thumbnail} />
        }) : null;


        return (
            <div className="char__list">
                {errorMessage}
                {spinner}
                <ul className="char__grid">
                {content}
                </ul>
                <button className="button button__main button__long">
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }

}

const CharListItem = ({name, thumbnail}) => {

    let imgStyle = {'objectFit' : 'cover'};
    if ((thumbnail.lastIndexOf("image_not_available") > 0)) {
        imgStyle = {'objectFit' : 'unset'};
    }

    return (
            <li className="char__item">
                <img src={thumbnail} alt={name} style={imgStyle}/>
                <div className="char__name">{name}</div>
            </li>
    )
}

export default CharList;