import React from "react";
import axios from "axios";

class User extends React.Component {
    static async getInitialProps({ req, query }) {
        let name;
        if (req) {
            name = req.params.name;
        } else {
            name = query.name;
        }

        const response = await axios.get('https://api.github.com/users/chiaradiaz1991');
        console.log(1);
        console.log(response.data);

        return {
            name
        };
    }

    render() {
        return (
            <div>
                My name is {this.props.name}
            </div>
        );
    }
}

export default User;
