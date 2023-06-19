import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

const SectionWraper = styled.section(() => ({
	gridArea: 'my-section',
	backgroundColor: 'indigo',
}));

const SectionStyle = ({ children }) => {
	const theme = useTheme();

	return <SectionWraper theme={theme}>{children}</SectionWraper>;
};

export default SectionStyle;
