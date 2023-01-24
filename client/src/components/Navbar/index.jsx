import React from "react";

import { Container, Option } from "./styles";

const Navbar = () => {

    return (
        <Container>
            <div className="navbar-options">
                <Option>
                    <i className="bi bi-house-door-fill"></i>
                    <h4>Home</h4>
                </Option>

                <Option>
                    <i className="bi bi-search"></i>
                    <h4>Search</h4>
                </Option>

                <Option>
                    <i className="bi bi-music-note-list"></i>
                    <h4>Your Library</h4>
                </Option>
            </div>

            <div className="navbar-playlist">
                <Option>
                    <i className="bi bi-plus-square-fill"></i>
                    <h4>Create Playlist</h4>
                </Option>
            </div>
        </Container>
    )
}

export default Navbar;