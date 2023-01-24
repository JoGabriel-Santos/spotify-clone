import React from "react";

import { Container, Navigation, UserInfo } from "./styles";

const UserOptions = () => {

    return (
        <Container>
            <Navigation>
                <div className="prev">
                    <i className="bi bi-arrow-left-circle prev"></i>
                </div>

                <div className="next">
                    <i className="bi bi-arrow-right-circle"></i>
                </div>
            </Navigation>

            <UserInfo>
                <h4>Gabriel</h4>
            </UserInfo>
        </Container>
    )
}

export default UserOptions;