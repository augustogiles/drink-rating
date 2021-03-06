import styled from 'styled-components'

export const SHeader = styled.header`
    position: fixed;
    background: rgb(137, 24, 38);
    font-size: 13px;
    line-height: 1.53846;
    width: 100%;
    height: 56px;
    top: 0;
    left: 0;
    z-index: 1;
`

export const SNavLogo = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 20px;
    font-weight: 600;
    line-height: 1.53846;
    text-decoration: none;
    color: white;

    .logo{
        width: 32px;
    }
`
export const SDivLogo = styled.div`
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`

