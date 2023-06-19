import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

const AsideWraper = styled.aside(() => ({
	gridArea: 'my-aside',
	backgroundColor: 'yellow',
}));

const AsideStyle = ({ children }) => {
	const theme = useTheme();

	return <AsideWraper theme={theme}>{children}</AsideWraper>;
};

export default AsideStyle;
