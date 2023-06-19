import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import ButtonStyle from '../ButtonStyle/ButtonStyle';

const HeaderWrapper = styled.header(() => ({
	gridArea: 'my-header',
	backgroundColor: 'crimson',
}));

const HeaderStyle = ({ children }) => {
	const theme = useTheme();

	return (
		<HeaderWrapper theme={theme}>
			<ButtonStyle variant='small'>
				<div>Change Theme</div>
			</ButtonStyle>
		</HeaderWrapper>
	);
};

export default HeaderStyle;
