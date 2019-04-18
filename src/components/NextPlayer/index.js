import React, { Component } from 'react';

import './styles.css'

class NextPlayer extends Component {
    state = {content: "X"};

    handleClick = () => {
        this.setState(this.state.content === "X" ? {content: "O"} : {content: "X"});
    }

    async componentDidMount() {
        document.body.addEventListener('click', this.handleClick);
    }

    render () {
        return (
            <p className="next-player">
                Próximo Jogador: {this.state.content}
            </p>
        )
    }
}

export default NextPlayer;