import React from 'react';
import Styled from 'styled-components';
import { Watch } from 'scrollmonitor-react';
import { GooProvider, GooContext } from '../../context/gooContext';

const SectionContainer = Styled.div`
    width: 100%;
    min-height: 100vh;
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
	class Section2 extends React.Component {
		componentDidMount() {
			if (this.props.isInViewport) {
				console.log('In Viewport!!!');
			}
		}
		render() {
			if (this.props.isInViewport) {
				console.log('In Viewport!!!');
			}
			return (
				<SectionContainer>
					<SectionWrapper>
						<GooContext.Consumer>
							{(context) => <SectionHeader>This is The Second</SectionHeader>}
						</GooContext.Consumer>
					</SectionWrapper>
				</SectionContainer>
			);
		}
	}
);
