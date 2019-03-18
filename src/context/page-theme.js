import React, { Component } from 'react';

export const ThemeContext = React.createContext();

class ThemeProvider extends Component {
	state = {
		backgroundColor: '#FFFFFF',
		foregroundColor: '#333333'
	};
	render() {
		return (
			<ThemeContext.Provider
				value={{
					state: this.state,
					updateForegroundColor: (newForegroundColor) => {
						this.setState({ foregroundColor: newForegroundColor });
					},
					updateBackgroundColor: (newBackgroundColor) => {
						this.setState({ backgroundColor: newBackgroundColor });
					}
				}}>
				{this.props.children}
			</ThemeContext.Provider>
		);
	}
}

export default ThemeProvider;
