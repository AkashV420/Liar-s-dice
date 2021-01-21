import React from "react";
class Body extends React.Component {

    handleJoin = async (e) =>{
        e.preventDefault();
        const accounts = await window.ethereum.enable();
        const account = accounts[0];
        const Game= this.props.token;
        const gas = await Game.methods.joinGame(this.state.number).estimateGas();
        const result = await Game.methods.joinGame().send({ from: account, gas });
        console.log(result);
      }
    render() {
        // get the contract state from drizzleState
        const address = this.props.account;
        const gameJoined = this.props.gameJoined;
        // if it exists, then we display its value
        return <p>Your Address: {address}<br />
            <button disabled={!gameJoined} onClick={this.handleGet} type="button">Join Game</button>
            <br /> Your Dices: {} <br />
            <br /> Address {} has bidded: {}
            <br /> <br /> <button>Challenge</button> <br /> <br /></p>;
    }
}

export default Body;