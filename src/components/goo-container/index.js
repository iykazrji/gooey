import React from 'react';
import Styled from 'styled-components';
import { GooContext } from '../../context/gooContext';
import Anime from 'animejs';

const GooContainer = Styled.div`
    position: fixed;
    z-index: 0;
    width: 960px;
    height: 540px;
    margin: auto;
    top: 0; left: 0; bottom: 0; right: 0;
    > svg{
        transform: scale(1.2);
    }
`;

export default class GooContainerClass extends React.Component {
	render() {
		return (
			<GooContainer>
				<GooWrapper />
			</GooContainer>
		);
	}
}

class GooWrapper extends React.Component {
	alternatePaths = (gooPath1, gooPath2) => {
		console.log('Alternating paths');
		Anime.remove('#gooPath');
		Anime({
			targets: '#gooPath',
			d: [ { value: gooPath1 }, { value: gooPath2 } ],
			duration: 8000,
			direction: 'alternate',
			loop: true,
			easing: 'easeInOutElastic(0.8, 0.35)'
		});
	};

	morphPaths = (gooPath1, gooPath2, scale, xCord, yCord, color) => {
		Anime.remove('#gooPath');
		let tl = Anime.timeline();
		tl
			.add({
				targets: '#gooContainer',
				scale: { value: scale ? scale : 1 },
				translateX: xCord ? xCord : 0,
				translateY: yCord ? yCord : 0,
				duration: 7000
			})
			.add(
				{
					targets: '#gooPath',
					d: { value: gooPath1 },
					duration: 5000,
					direction: 'alternate',
					easing: 'easeInOutElastic(0.8, 0.35)',
					complete: () => {
						this.alternatePaths(gooPath1, gooPath2);
					}
				},
				'-=9500'
			);
	};

	componentDidMount() {}
	render() {
		return (
			<GooContext.Consumer>
				{(context) => {
					console.log('Context: ', context);
					return (
						<GooContainer>
							{this.morphPaths(
								context.state.gooPath1,
								context.state.gooPath2,
								context.state.scale,
								context.state.xCord,
								context.state.yCord,
								context.state.color
							)}
							<svg
								width="100%"
								height="100%"
								viewBox="0 0 2496 1404"
								preserveAspectRatio="none"
								id="gooContainer">
								<path
									d="M109.301676,611.874453 C81.3016755,428.874453 -150.698324,282.374453 160.801676,217.374453 C472.301676,152.374453 524.304568,-58.1436614 636.801676,15.3744532 C749.298783,88.8925678 800.338585,311.722238 1039.07013,311.722238 C1198.22449,311.722238 1308.80168,375.772976 1370.80168,503.874453 C1452.80168,715.874453 1381.46834,796.374453 1156.80168,745.374453 C819.801676,668.874453 904.301676,990.374453 584.301676,774.874453 C264.301676,559.374453 137.301676,794.874453 109.301676,611.874453 Z"
									fill="rgba(20, 20, 20, 0.065)"
									id="gooPath"
								/>
							</svg>
						</GooContainer>
					);
				}}
			</GooContext.Consumer>
		);
	}
}
