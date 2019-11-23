import React from "react";
import Link from 'next/link';

class Test extends React.Component {
    static getInitialProps({ req, query }) {
        let name;
        if (req) {
            name = req.params.name;
        } else {
            name = query.name;
        }
        return { name };
    }

    render() {
        return (
            <div>
                My name is {this.props.name}
                <Link href="/user?name=chiara" as="/usuario/chiara"><a>Go to User Page!</a></Link>
            </div>
        );
    }
}

export default Test;
