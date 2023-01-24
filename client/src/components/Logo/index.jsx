import React from "react";

import { Container } from "./styles";

const Logo = () => {

    return (
        <Container>
            <img src={ require("../../util/logo.png") } alt=""/>
        </Container>
    )
}

export default Logo;