import React from 'react';
import Styled from 'styled-components';
import Anime from 'animejs';

const PageWrapper = Styled.div`
    min-height: 100%;
    width: 100%;
    position: relative;
`;

const PageWrapperInner = Styled.div`
    width: 80%;
    margin: 0 auto;
    position: relative;
    z-index: 2;
`;

const PageHeading = Styled.h3`
    font-size: 60px;
    margin-top: 200px;
    margin-bottom: 30px;
    letter-spacing: -2px;
    line-height: 62px;
`;

const ToggleButton = Styled.button`
    display: block;
    width: 200px;
    background-color: rgba(88, 164, 176, 0.15);
    color: #58A4B0;
    text-align: center;
    padding: 20px 0px;
    font-family: 'Nunito Sans', sans-serif;
    border-radius: 5px;
    font-size: 17px;
    font-weight: 600;
    border: none;
    cursor: pointer;
`;

const BgContainer = Styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 0;
    > svg {
        width: 100%;
        height: 100%;
        transform: rotate(360deg);
        > path{
            transform: scale(0);
        }
    }
`;

class Main extends React.Component {
	state = {
		show: false
	};

	toggleShow = () => {
		this.setState({
			show: !this.state.show
		});
	};

	displayBg = (show) => {
		console.log('Show: ', show);
		if (show) {
			Anime({
				duration: 4750,
				targets: '#bg',
				d: [
					{
						value:
							'M6.03472564,371.852858 C-30.2182387,293.010988 126.92425,315.508225 300,245.029551 C473.07575,174.550877 338.111041,-122.879974 626.5,57.4786744 C914.888959,237.837323 859.536909,126.847785 1093.76845,126.847785 C1249.92282,126.847785 1408.6819,181.720364 1570.04569,291.465523 C1643.6819,422.155174 1643.6819,487.5 1570.04569,487.5 C1459.59139,487.5 998.127483,503.886862 626.5,371.852858 C254.872517,239.818853 42.28769,450.694727 6.03472564,371.852858 Z'
					},
					{
						value:
							'M0.5,1221.5544 C172.166667,763.851465 344.5,479.833333 517.5,369.5 C777,204 638,120 1192,34.5 C1561.33333,-22.5 1881.66667,-7.66666667 2153,79 C2524.33333,187 2768,404.333333 2884,731 C3058,1221 2587.60176,2103.30561 2224,2320.5 C1860.39824,2537.69439 900.000278,2418.06593 517.5,2320.5 C262.499815,2255.45605 90.1664813,1889.14085 0.5,1221.5544 Z'
					},
					{
						value: [
							'M16.0347256,496.852858 C-20.2182387,418.010988 -5.97214168,73.141345 175.035292,182.478674 C356.042725,291.816004 438.108148,-135.340534 726.497107,45.0181146 C1014.88607,225.376763 726.497107,251.847785 1103.76845,251.847785 C1355.28269,251.847785 1514.04177,306.720364 1580.04569,416.465523 C1681.71447,552.502314 1601.28392,663.946117 1338.75402,750.796934 C944.95918,881.07316 869.716107,1017.07947 498.088624,885.045463 C126.461141,753.011458 52.28769,575.694727 16.0347256,496.852858 Z'
						]
					}
				],
				easing: 'easeInOutElastic(1, 0.55)',
				scale: 1
			});
		} else {
			Anime({
				duration: 1750,
				targets: '#bg',
				d: [
					{
						value: [
							'M16.0347256,496.852858 C-20.2182387,418.010988 -5.97214168,73.141345 175.035292,182.478674 C356.042725,291.816004 438.108148,-135.340534 726.497107,45.0181146 C1014.88607,225.376763 726.497107,251.847785 1103.76845,251.847785 C1355.28269,251.847785 1514.04177,306.720364 1580.04569,416.465523 C1681.71447,552.502314 1601.28392,663.946117 1338.75402,750.796934 C944.95918,881.07316 869.716107,1017.07947 498.088624,885.045463 C126.461141,753.011458 52.28769,575.694727 16.0347256,496.852858 Z'
						]
					}
				],
				scale: 0,
				easing: 'easeInOutQuint'
			});
		}
	};

	render() {
		this.displayBg(this.state.show);

		return (
			<PageWrapper>
				<PageWrapperInner>
					<PageHeading>I can Show you the World</PageHeading>
					<ToggleButton onClick={this.toggleShow}>Show Me</ToggleButton>
				</PageWrapperInner>
				<BgContainer>
					<svg width="100%" height="100%" viewBox="0 0 1920 1080" preserveAspectRatio="none">
						<path
							d="M16.0347256,496.852858 C-20.2182387,418.010988 -5.97214168,73.141345 175.035292,182.478674 C356.042725,291.816004 438.108148,-135.340534 726.497107,45.0181146 C1014.88607,225.376763 726.497107,251.847785 1103.76845,251.847785 C1355.28269,251.847785 1514.04177,306.720364 1580.04569,416.465523 C1681.71447,552.502314 1601.28392,663.946117 1338.75402,750.796934 C944.95918,881.07316 869.716107,1017.07947 498.088624,885.045463 C126.461141,753.011458 52.28769,575.694727 16.0347256,496.852858 Z"
							fill="#dc3f57"
							id="gooPath"
						/>
					</svg>
				</BgContainer>
			</PageWrapper>
		);
	}
}

export default Main;
