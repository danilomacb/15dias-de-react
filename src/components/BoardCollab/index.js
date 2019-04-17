import React from 'react';
import SquareCollab from '../SquareCollab';

const SquareCollabs = qtd => {
    const squares = [];

    for(let i = 0; i < qtd; i++) {
        squares.push(<SquareCollab />);
    }

    return squares;
};

const BoardCollab = ({qtd}) => (
    <article>{SquareCollabs(qtd)}</article>
);

export default BoardCollab;