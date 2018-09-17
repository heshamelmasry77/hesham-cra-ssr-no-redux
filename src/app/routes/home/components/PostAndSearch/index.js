import React, { Component } from "react";
import "./styles/PostAndSearch.css";

class PostAndSearch extends Component {
    render() {
        return (
            <div className="PostAndSearch">
                <a className="button green" href="">start your search</a>
                <a className="button yellow" href="">post your room</a>
            </div>
        );
    }
}

export default PostAndSearch;
