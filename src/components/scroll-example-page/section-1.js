import React from 'react';
import Styled from 'styled-components';
import { Watch } from 'scrollmonitor-react';

const SectionContainer = Styled.div`
    width: 100%;
    min-height: 110vh;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const SectionWrapper = Styled.div`
    width: 60%;
    margin: 0 auto;
`;
const SectionHeader = Styled.h2`
    font-family: 'Crimson Text', serif;
    font-size: 38px;
    display: block;
    text-align: center;
`;

export default Watch(
	class Section1 extends React.Component {
		render() {
			if (this.props.isInViewport) {
				console.log('In Viewport!!!');
			}
			return (
				<SectionContainer>
					<SectionWrapper>
						<SectionHeader>This is The first</SectionHeader>
					</SectionWrapper>
				</SectionContainer>
			);
		}
	}
);
