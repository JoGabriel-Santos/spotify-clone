import React from "react";

import { Grid } from "./styles";

import Logo from "../Logo";
import Navbar from "../Navbar";
import UserOptions from "../UserOptions";

const Layout = () => {

    return (
        <Grid>
            <Logo/>
            <Navbar/>
            <UserOptions/>
        </Grid>
    );
};

export default Layout;