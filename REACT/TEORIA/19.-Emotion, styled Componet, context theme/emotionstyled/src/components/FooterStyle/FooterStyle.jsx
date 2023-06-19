import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

const FooterWrapper = styled.footer(({ variant, theme }) => ({
	gridArea: 'my-footer',
	backgroundColor: 'coral',
}));

const FooterStyle = ({ children }) => {
	const theme = useTheme();

	return <FooterWrapper theme={theme}>{children}</FooterWrapper>;
};

export default FooterStyle;
