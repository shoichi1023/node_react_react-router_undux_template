import React from "react";
import Store from "../Store";
import * as actions from "../actions/example"

class Example extends React.Component {
    render() {
        return (
            <button
                onClick={actions.example(this.props.store)}>
                change store's state
            </button>
        );
    }
}

export default Store.withStore(Example);