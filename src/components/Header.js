import React from 'react';
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function Header() {
    return (
        <HeaderContainer>
            <HeaderLeft>
                {/* TODO : OnClick */}
                <HeaderAvatar />
                <ScheduleIcon />
            </HeaderLeft>

            <HeaderSearch>
                <SearchIcon />
                <input placeholder="Search FutureLab" />
            </HeaderSearch>

            <HeaderRight>
                <HelpOutlineIcon />
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header;

const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    background-color: var(--slack-color);
    color: white;
`;

const HeaderLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    margin-left: 20px;

    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 30px;
    }
`;

const HeaderAvatar = styled(Avatar)`
    cursor: pointer;

    :hover {
       opacity: 0.8;
    }
`;

const HeaderSearch = styled.div`
    flex: 0.4;
    display: flex;
    padding: 0 50px;
    opacity: 1;
    border-radius: 6px;
    background-color: #421f44;
    text-align: center;
    border: 1px gray solid;
    color: gray;

    > input {
        background-color: transparent;
        border: none;
        text-align: center;
        min-width: 30vw;
        outline: 0;
        color: #fff;
    }
`;

const HeaderRight = styled.div`
    flex; 0.3;
    display: flex;
    margin-right: 20px;
`;