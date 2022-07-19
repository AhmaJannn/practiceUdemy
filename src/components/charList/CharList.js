import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import MarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

import './charList.scss';

const CharList = (props) => {

    const [charList, setCharList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(210);
    const [charEnded, setCharEnded] = useState(false);

    const marvelService = new MarvelService();

    useEffect(() => {
        localStorage.getItem('CharList') === null ? onRequest() : getCharLocalStorage();
    }, [])

    const onRequest = (offset) => {
        onCharListLoading();
        marvelService
            .getAllCharacter(offset)
            .then(onCharListLoaded)
            .catch(onError)
    }

    const getCharLocalStorage = () => {
        const rawCharList = localStorage.getItem('CharList');
        const rawOffset = localStorage.getItem('Offset');

        setCharList(JSON.parse(rawCharList));
        setLoading(false);
        setNewItemLoading(false);
        setOffset(+rawOffset);

        renderItems(charList);
    }

    const onCharListLoading = () => {
        setNewItemLoading(true);
    }

    const onCharListLoaded = (newCharList) => {
        let ended = false;
        if (newCharList.length < 9) {
            ended = true;
        }

        setCharList(charList => [...charList, ...newCharList]);
        setLoading(false);
        setNewItemLoading(false);
        setOffset(offset => offset + 9);
        setCharEnded(ended);

        localStorage.setItem('CharList', JSON.stringify([...charList, ...newCharList]));
        localStorage.setItem('Offset', offset.toString());
    }

    const onError = () => {
        setError(true);
        setLoading(false);
        setNewItemLoading(false);
    }

    const itemRefs = useRef([]);

    const focusMyRef = (id) => {
        itemRefs.current.forEach(item => { item.classList.remove('char__item_selected') });
        itemRefs.current[id].classList.add('char__item_selected');
        itemRefs.current[id].focus();
    }

    function renderItems(arr) {
        const items = arr.map((item, i) => {

            let imgStyle = {'objectFit' : 'cover'};
            if ((item.thumbnail.lastIndexOf("image_not_available") > 0)) {
                imgStyle = {'objectFit' : 'unset'};
            }

            return (
                <li
                    ref={el => itemRefs.current[i] = el}
                    tabIndex={0}
                    className="char__item"
                    key={item.id}
                    onClick={() => {
                        props.onCharSelected(item.id);
                        focusMyRef(i);
                    }}
                    onKeyDown = {(e) => {
                        if (e.key === "Enter") {
                            props.onCharSelected(item.id);
                            focusMyRef(i);
                        }
                    }}>
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

    const content = () => {
        if (loading) {
            return <Spinner />
        }
        if (error) {
            return <ErrorMessage />
        }
        return (
            renderItems(charList)
        )
    }

    return (
        <div className="char__list">
            {content()}
            <button
                className="button button__main button__long"
                disabled={newItemLoading}
                style={{'display': charEnded ? 'none' : 'block'}}
                onClick={() => onRequest(offset)}
            >
                <div className="inner">load more</div>
            </button>
        </div>
    )

}

CharList.propTypes = {
    onCharSelected: PropTypes.func
}

export default CharList;