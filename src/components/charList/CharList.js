import {Component} from "react";
import MarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

import './charList.scss';

class CharList extends Component {

    state = {
        charList: [],
        lock: true,
        loading: true,
        error: false,
        newItemLoading: false,
        offset: 210,
        charEnded: false,
    }

    marvelService = new MarvelService();

    componentDidMount() {
        (localStorage.getItem('CharList') === null) ? this.onRequest() : this.getCharLocalStorage();
    }

    getCharLocalStorage = () => {
        const rawCharList = localStorage.getItem('CharList');
        const rawOffset = localStorage.getItem('Offset');

        this.setState({
            charList: JSON.parse(rawCharList),
            offset: +rawOffset,
            loading: false,
            newItemLoading: false
        })

        this.renderItems(this.state.charList)
    }

    onRequest = (offset) => {
        this.onCharListLoading();
        this.marvelService
            .getAllCharacter(offset)
            .then(this.onCharListLoaded)
            .catch(this.onError)


    }

    onCharListLoading = () => {
        this.setState({
            newItemLoading: true,
        })
    }

    onCharListLoaded = (newCharList) => {
        let ended = false;
        if (newCharList.length < 9) {
            ended = true;
        }

        this.setState(({offset ,charList}) => ({
            charList: [...charList, ...newCharList],
            loading: false,
            newItemLoading: false,
            offset: offset + 9,
            charEnded: ended
        }))

        localStorage.setItem('CharList', JSON.stringify(this.state.charList));
        localStorage.setItem('Offset', this.state.offset.toString());
    }

    onError = () => {
        this.setState({error: true, loading: false, newItemLoading: false})
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
        if (this.state.error) {
            return <ErrorMessage />
        }
        return (
            this.renderItems(this.state.charList)
        )
    }

    render() {
        const {newItemLoading, offset, charEnded} = this.state
        return (
            <div className="char__list">
                {this.content()}
                <button
                    className="button button__main button__long"
                    disabled={newItemLoading}
                    style={{'display': charEnded ? 'none' : 'block'}}
                    onClick={() => this.onRequest(offset)}
                >
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }

}


export default CharList;