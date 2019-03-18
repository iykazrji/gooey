import React from 'react';
import Styled from 'styled-components';
import { Watch } from 'scrollmonitor-react';
import Tilt from 'react-tilt';
import ScrollMonitor from 'react-scrollmonitor';
import { GooContext } from '../../context/gooContext';
import { ThemeContext } from '../../context/page-theme';

import featureImage from '../../resources/images/section-3-img.jpg';

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
	class Section1 extends React.Component {
		render() {
			let gooProperties = {
				gooPath1:
					'M269,623 C-76,439.5 -29.5,169 84.5,95 C198.5,21 331.5,-74 448,95 C564.5,264 467.5,290.5 910,380 C1205,439.666667 1331.5,581.833333 1289.5,806.5 C1262.82723,909.166667 1183.16056,1006.5 1050.5,1098.5 C851.509159,1236.5 718,1350.5 471,1130.5 C224,910.5 614,806.5 269,623 Z',
				gooPath2:
					'M278,511 C-67,327.5 -35.0854331,133.378222 78.9145669,59.3782217 C192.914567,-14.6217783 295,-44.5 411.5,124.5 C528,293.5 393.829134,212.256443 904.414567,344.378222 C1244.80486,432.459407 1360.65123,565.666667 1251.95369,744 C1208.97846,821 1121.16056,905.5 988.5,997.5 C789.509159,1135.5 621,1243 374,1023 C127,803 623,694.5 278,511 Z',
				xCord: 150,
				yCord: -150,
				scale: 1.9
			};
			let themeProperties = {
				backgroundColor: '#0A344D',
				foregroundColor: '#FFFFFF'
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
														I know I was supposed to call, I wasn't alone.
													</SectionHeader>
													<SectionBody>
														Standing on a corner in the rainy, hot night Wonderin' if you
														were at home My pockets full of someone else's cigarettes And I
														don't even smoke (I don't even smoke) .
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
