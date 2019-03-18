import React from 'react';

export const GooContext = React.createContext();

export class GooProvider extends React.Component {
	state = {
		gooPath1:
			'M145.801676,472 C117.801676,289 -165.698324,219.374453 145.801676,154.374453 C457.301676,89.3744532 517.502893,-52.5181146 630,21 C742.497107,94.5181146 750.268455,285 989,285 C1227.73155,285 1322.01251,289.815654 1350,379.5 C1377.98749,469.184346 1438.5,722 1101.5,645.5 C764.5,569 866.5,1016 546.5,800.5 C226.5,585 173.801676,655 145.801676,472 Z',
		gooPath2:
			'M109.301676,611.874453 C81.3016755,428.874453 -150.698324,282.374453 160.801676,217.374453 C472.301676,152.374453 524.304568,-58.1436614 636.801676,15.3744532 C749.298783,88.8925678 800.338585,311.722238 1039.07013,311.722238 C1198.22449,311.722238 1308.80168,375.772976 1370.80168,503.874453 C1452.80168,715.874453 1381.46834,796.374453 1156.80168,745.374453 C819.801676,668.874453 904.301676,990.374453 584.301676,774.874453 C264.301676,559.374453 137.301676,794.874453 109.301676,611.874453 Z',
		xCord: 200,
		yCord: -100,
		scale: 1.8,
		color: '#333333'
	};
	updateGooProperties = (gooPath1, gooPath2, xCord, yCord, scale, color) => {
		console.log('Update to xCord1:', xCord);
		this.setState((state) => ({
			gooPath1: gooPath1,
			gooPath2: gooPath2,
			xCord: xCord,
			yCord: yCord,
			scale: scale,
			color: color
		}));
	};
	render() {
		console.log('goo.xCord: ', this.state.xCord);
		return (
			<GooContext.Provider value={{ state: this.state, updateGooProperties: this.updateGooProperties }}>
				{this.props.children}
			</GooContext.Provider>
		);
	}
}
