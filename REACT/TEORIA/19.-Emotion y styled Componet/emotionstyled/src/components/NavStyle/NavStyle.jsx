import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

const NavWrapper = styled.header(() => ({
	gridArea: 'my-nav',
	backgroundColor: 'cornflowerblue',
}));

const NavbarStyle = ({ children }) => {
	const theme = useTheme();

	return <NavWrapper theme={theme}>{children}</NavWrapper>;
};

export default NavbarStyle;
