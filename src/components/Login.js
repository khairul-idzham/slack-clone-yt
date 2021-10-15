import React from 'react';
import styled from 'styled-components';

function Login() {
    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img src="https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png" alt="" />
            </LoginInnerContainer>
        </LoginContainer>
    )
}

export default Login;

const LoginContainer = styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    display: grid;
    place-items: center;
`;

const LoginInnerContainer = styled.div`
    > img {
        object-fit: contain;
        height: 100px;
        margin-bottom: 40px;
    }
`;
