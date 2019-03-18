import React from 'react';
import Styled from 'styled-components';
import { GooContext, GooProvider } from '../context/gooContext';
import { ThemeContext } from '../context/page-theme';

//Get Page Sections
import Section1 from '../components/scroll-example-page/section-1';
import Section2 from '../components/scroll-example-page/section-2';

const PageContainer = Styled.div`
    min-height: 110vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const ScrollExample = (props) => {
	let gooProperties = {
		section1: {
			gooPath1:
				'M145.801676,472 C117.801676,289 -165.698324,219.374453 145.801676,154.374453 C457.301676,89.3744532 517.502893,-52.5181146 630,21 C742.497107,94.5181146 750.268455,285 989,285 C1227.73155,285 1322.01251,289.815654 1350,379.5 C1377.98749,469.184346 1438.5,722 1101.5,645.5 C764.5,569 866.5,1016 546.5,800.5 C226.5,585 173.801676,655 145.801676,472 Z',
			gooPath2:
				'M109.301676,611.874453 C81.3016755,428.874453 -150.698324,282.374453 160.801676,217.374453 C472.301676,152.374453 524.304568,-58.1436614 636.801676,15.3744532 C749.298783,88.8925678 800.338585,311.722238 1039.07013,311.722238 C1198.22449,311.722238 1308.80168,375.772976 1370.80168,503.874453 C1452.80168,715.874453 1381.46834,796.374453 1156.80168,745.374453 C819.801676,668.874453 904.301676,990.374453 584.301676,774.874453 C264.301676,559.374453 137.301676,794.874453 109.301676,611.874453 Z',
			xCord: 200,
			yCord: -100,
			scale: 1.8
		},
		section2: {
			gooPath1:
				'M74.3016755,488.874453 C-109,275 91.5,188.722238 221.5,188.722238 C351.5,188.722238 494.248313,-59.0181146 606.74542,14.5 C719.242528,88.0181146 621.14026,101.444476 1004.07013,188.722238 C1259.35671,246.907413 1314.66667,324.166667 1170,420.5 C1026.33333,559.833333 838.581807,569.666667 606.74542,450 C258.990841,270.5 837.5,1184 517.5,968.5 C197.5,753 257.603351,702.748906 74.3016755,488.874453 Z',
			gooPath2:
				'M73.7228316,417.009272 C-109.578844,203.134819 90.921156,116.857057 220.921156,116.857057 C350.921156,116.857057 461.502893,-55.0181146 574,18.5 C686.497107,92.0181146 553.07013,97.722238 936,185 C1191.28658,243.185175 1283.61991,320.521599 1213,417.009272 C1040.28077,510.759637 838.002963,497.801486 606.166577,378.134819 C258.411997,198.634819 814,1019.5 494,804 C174,588.5 257.024507,630.883725 73.7228316,417.009272 Z',
			xCord: -70,
			yCord: 100,
			scale: 1.7
		}
	};
	let themeProperties = {
		section1: {
			backgroundColor: '#CC2936',
			foregroundColor: '#FFFFFF'
		},
		section2: {
			backgroundColor: '#E9CB4B',
			foregroundColor: '#333333'
		}
	};
	return (
		<PageContainer>
			<ThemeContext.Consumer>
				{(themeContext) => (
					<GooContext.Consumer>
						{(gooContext) => (
							<React.Fragment>
								<Section1
									autoStart={true}
									enterViewport={(watcher) => {
										console.log('Section 1 is visible');
										gooContext.updateGooProperties(
											gooProperties.section1.gooPath1,
											gooProperties.section1.gooPath2,
											gooProperties.section1.xCord,
											gooProperties.section1.yCord,
											gooProperties.section1.scale
										);
										themeContext.updateForegroundColor(themeProperties.section1.foregroundColor);
										themeContext.updateBackgroundColor(themeProperties.section1.backgroundColor);
									}}
									fullyEnterViewport={(watcher) => {
										console.log('Section 1 is Fully visible');
										gooContext.updateGooProperties(
											gooProperties.section1.gooPath1,
											gooProperties.section1.gooPath2,
											gooProperties.section1.xCord,
											gooProperties.section1.yCord,
											gooProperties.section1.scale
										);
										themeContext.updateForegroundColor(themeProperties.section1.foregroundColor);
										themeContext.updateBackgroundColor(themeProperties.section1.backgroundColor);
									}}
								/>
								<Section2
									xCord={gooContext.state.xCord}
									enterViewport={(watcher) => {
										console.log('Section 2 is visible');
										gooContext.updateGooProperties(
											gooProperties.section2.gooPath1,
											gooProperties.section2.gooPath2,
											gooProperties.section2.xCord,
											gooProperties.section2.yCord,
											gooProperties.section2.scale
										);
										themeContext.updateForegroundColor(themeProperties.section2.foregroundColor);
										themeContext.updateBackgroundColor(themeProperties.section2.backgroundColor);
									}}
									fullyEnterViewport={(watcher) => {
										console.log('Section 2 is Fully visible');
										gooContext.updateGooProperties(
											gooProperties.section2.gooPath1,
											gooProperties.section2.gooPath2,
											gooProperties.section2.xCord,
											gooProperties.section2.yCord,
											gooProperties.section2.scale
										);
										themeContext.updateForegroundColor(themeProperties.section2.foregroundColor);
										themeContext.updateBackgroundColor(themeProperties.section2.backgroundColor);
									}}
								/>
							</React.Fragment>
						)}
					</GooContext.Consumer>
				)}
			</ThemeContext.Consumer>
		</PageContainer>
	);
};

export default ScrollExample;
