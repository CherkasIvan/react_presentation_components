import {HeaderMenuBarStyled} from './HeaderMenuBarStyled'
import styled from 'styled-components';

function HeaderMenuBar({width, hight, color, children, display}) {
    return (
        <HeaderMenuBarStyled
        >{children}
        </HeaderMenuBarStyled>
    )
};

export default HeaderMenuBar;