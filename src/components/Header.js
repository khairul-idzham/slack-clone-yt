import React from 'react';
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';
import ScheduleIcon from '@mui/icons-material/Schedule';

function Header() {
    return (
        <HeaderContainer>
            <HeaderLeft>
                {/* TODO : OnClick */}
                <HeaderAvatar />
                <ScheduleIcon />
            </HeaderLeft>

            {/* Header Center */}

            {/* Header Right */}

        </HeaderContainer>
    )
}

export default Header;

const HeaderContainer = styled.div`
    display: flex;
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

const HeaderAvatar = styled(Avatar)``;