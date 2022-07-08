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

    renderItems(arr) {
        const items = arr.map((item) => {

            let imgStyle = {'objectFit' : 'cover'};
            if ((item.thumbnail.lastIndexOf("image_not_available") > 0)) {
                imgStyle = {'objectFit' : 'unset'};
            }

            return (
                <li
                    className="char__item"
                    key={item.id}
                    onClick={() => this.props.onCharSelected(item.id)}>
                    <img src={item.thumbnail} alt={item.name} style={imgStyle}/>
                    <div className="char__name">{item.name}</div>
                </li>
            )
        });
        return (
            <ul className="char__grid">
                {items}
            </ul>
        )
    }

    content = () => {
        if (this.state.loading) {
            return <Spinner />
        }
        if ( this.state.error) {
            return <ErrorMessage />
        }
        return (
            this.renderItems(this.state.charList)
        )
    }

    render() {
        return (
            <div className="char__list">
                {this.content()}
                <button className="button button__main button__long">
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }

}


export default CharList;