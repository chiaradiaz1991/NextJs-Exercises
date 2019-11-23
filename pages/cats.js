import React from "react";
import axios from "axios";

class Cats extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            catImage: props.img
        }
    }

    static async getInitialProps({ req, query }) {
        const cats = await axios.get('https://api.thecatapi.com/v1/images/search');

        return {
            img: cats.data[0].url
        }
    }

    async handleClick() {
        const cats = await axios.get('https://api.thecatapi.com/v1/images/search');
        this.setState({
            catImage: cats.data[0].url
        })
    }

    render() {
        return (
            <div>
                <button onClick={() => { this.handleClick() }}>Get a new Cat!</button>
                <br />
                <img src={this.state.catImage} />
            </div>
        );
    }
}

export default Cats;