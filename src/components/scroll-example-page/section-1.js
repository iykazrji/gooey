import React from 'react';
import Styled from 'styled-components';
import { Watch } from 'scrollmonitor-react';
import Tilt from 'react-tilt';
import ScrollMonitor from 'react-scrollmonitor';
import { GooContext } from '../../context/gooContext';
import { ThemeContext } from '../../context/page-theme';

import featureImage from '../../resources/images/section-1-img.jpg';

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
    -webkit-text-stroke: 1.6px #FFFFFF;
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
    color: #FFFFFF;
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
					'M145.801676,472 C117.801676,289 -165.698324,219.374453 145.801676,154.374453 C457.301676,89.3744532 517.502893,-52.5181146 630,21 C742.497107,94.5181146 750.268455,285 989,285 C1227.73155,285 1322.01251,289.815654 1350,379.5 C1377.98749,469.184346 1438.5,722 1101.5,645.5 C764.5,569 866.5,1016 546.5,800.5 C226.5,585 173.801676,655 145.801676,472 Z',
				gooPath2:
					'M109.301676,611.874453 C81.3016755,428.874453 -150.698324,282.374453 160.801676,217.374453 C472.301676,152.374453 524.304568,-58.1436614 636.801676,15.3744532 C749.298783,88.8925678 800.338585,311.722238 1039.07013,311.722238 C1198.22449,311.722238 1308.80168,375.772976 1370.80168,503.874453 C1452.80168,715.874453 1381.46834,796.374453 1156.80168,745.374453 C819.801676,668.874453 904.301676,990.374453 584.301676,774.874453 C264.301676,559.374453 137.301676,794.874453 109.301676,611.874453 Z',
				xCord: 300,
				yCord: -50,
				scale: 1.9
			};
			let themeProperties = {
				backgroundColor: '#CC2936',
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
													<SectionHeader color={this.props.themeForeground}>
														Go down, soft sound.
													</SectionHeader>
													<SectionBody>
														Step into your skin, I'd rather jump in your bones Taking up
														your mouth so you'll breathe through your nose.
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
