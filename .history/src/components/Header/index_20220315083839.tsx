import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

import { Container } from './styles';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      Hello World

      <Switch
    
        onChange={toggleTheme}
        checked={true}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={10}
        offColor="#a8a8b3"
        onColor="#a8eb12"
      />
    </Container>
  );
};

export default Header;