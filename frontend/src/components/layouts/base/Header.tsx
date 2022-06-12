import React from 'react';
import styled from 'styled-components';

/**
 * Interface for header component props
 */
interface Props{
}

/**
 * Styled header component
 *
 * @param props - props of component
 */
const HeaderStyled = styled.div<Props>`
  display: flex;
  position: absolute;
  height: 10%;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  background-color: #66FFFF;
`;

/**
 * Header component
 *
 * @param props - props of component
 */
const Header: React.FC<Props> = ({ ...props }) => {
    return (
        <HeaderStyled { ...props } />
    );
};

export default Header;