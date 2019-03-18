import React from 'react';
import Styled from 'styled-components';
import { Watch } from 'scrollmonitor-react';
import Tilt from 'react-tilt';
import ScrollMonitor from 'react-scrollmonitor';
import { GooContext } from '../../context/gooContext';
import { ThemeContext } from '../../context/page-theme';

import featureImage from '../../resources/images/section-4-img.jpg';

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
    position: relative;
    display: flex;
    flex-direction: row;
    transform-style: preserve-3d;
    transform: perspective(1000px);
`;
const SectionTextContent = Styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 2;
    justify-content: center;
    align-items: center;
    padding: 40px;
    transform: translateZ(40px);
`;
const SectionHeader = Styled.h2`
    font-size: 50px;
    display: block;
    text-align: left;
    position: relative;
    z-index: 1;
    color: transparent;
    -webkit-text-stroke: 1.6px ${(props) => props.color};
    letter-spacing: 7px;
    transform: translateX(-120px);
    line-height: 49px;
    margin: 0;
    margin-bottom: 20px;
`;
const SectionBody = Styled.p`
    font-family: 'Crimson Text', sans-serif;
    font-size: 19px;
    line-height: 18px;
    font-weight: 500;
`;
const ImageWrapper = Styled.div`
    height: 350px;
    width: 500px;
    background-image: url(${(props) => props.featureImage});
    background-position: center;
    background-size: 'cover';
    position: absolute;
    top: 0;
    z-index: 0;
    box-shadow: 0px 0px 50px rgba(10, 10, 10, 0.19);
`;

export default Watch(
	class Section4 extends React.Component {
		render() {
			let gooProperties = {
				gooPath1:
					'M644,349.378222 C620.5,125.378222 26.9145669,150 26.9145669,64.3782217 C26.9145669,-21.2435566 223.298066,-21.2435566 447.899033,64.3782217 C672.5,150 766.5,243.5 870.5,331 C939.833333,389.333333 973.5,447 971.5,504 C973.5,541 886,573.5 709,601.5 C443.5,643.5 -37.5,299.5 2.5,258 C42.5,216.5 667.5,573.378222 644,349.378222 Z',
				gooPath2:
					'M585,334 C561.5,110 57.1758537,129.838112 32.7612867,44.2163337 C8.3467198,-41.4054446 283.5,20 453.745753,44.2163337 C623.991505,68.4326674 758,150.338112 862,237.838112 C931.333333,296.171445 973.5,363.725408 988.5,440.5 C1012.5,596.833333 924,669.333333 723,658 C421.5,641 -70.3065604,326.676224 8.3467198,237.838112 C87,149 608.5,558 585,334 Z',
				xCord: 300,
				yCord: 160,
				scale: 3
			};
			let themeProperties = {
				backgroundColor: '#FFFFFF',
				foregroundColor: '#000000'
			};

			return (
				<SectionContainer>
					<ThemeContext.Consumer>
						{(themeContext) => (
							<GooContext.Consumer>
								{(gooContext) => (
									<Tilt options={{ reverse: true, max: 35, perspective: 500, speed: 500, scale: 1 }}>
										<ScrollMonitor
											enterViewport={() => {
												console.log('Viewport is entered...');
												console.log('Context XCord: ', gooContext.state.xCord);
												gooContext.updateGooProperties(
													gooProperties.gooPath1,
													gooProperties.gooPath2,
													gooProperties.xCord,
													gooProperties.yCord,
													gooProperties.scale
												);
												themeContext.updateForegroundColor(themeProperties.foregroundColor);
												themeContext.updateBackgroundColor(themeProperties.backgroundColor);
											}}>
											<SectionWrapper>
												<ImageWrapper featureImage={featureImage} />
												<SectionTextContent>
													<SectionHeader color={themeContext.state.foregroundColor}>
														Eledumare bless you with body oh baby oh.
													</SectionHeader>
													<SectionBody>
														Cunning money Oyaa hold the fire Hold the gander Only money Only
														money Only money .
													</SectionBody>
												</SectionTextContent>
											</SectionWrapper>
										</ScrollMonitor>
									</Tilt>
								)}
							</GooContext.Consumer>
						)}
					</ThemeContext.Consumer>
				</SectionContainer>
			);
		}
	}
);
