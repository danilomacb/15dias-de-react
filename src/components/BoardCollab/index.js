import React from 'react';

import './styles.css';

import SquareCollab from '../SquareCollab';

const SquareCollabs = qtd => {
    let max = qtd;
    const squares = [];

    while(max--) {
        squares.push(<SquareCollab key={max} />);
    }

    return squares;
};

const BoardCollab = ({qtd}) => (
    <article className="board-collab"><SquareCollab /></article>
);

export default BoardCollab;