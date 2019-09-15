import React from 'react'

import { SHeader, SNavLogo, SDivLogo } from './style'
import WineLogo from '../../assets/wine-logo.svg'

const Header = () => {
    return (
        <SHeader>
            <SDivLogo>
                <SNavLogo href="/" className="toolbar-logo">
                    <img alt="wineLogo" className="logo" src={WineLogo}/>
                    ReWine
                </SNavLogo>
            </SDivLogo>
        </SHeader>
    );
}

export default Header;