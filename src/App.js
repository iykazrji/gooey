import React, { Component } from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

// Pages....
import Main from './pages/main';
import Document from './pages/document';
const AppWrapper = styled.div`
	background-color: #ffffff;
	min-height: 100vh;
	font-family: 'Crimson Text', serif;
`;

class App extends Component {
	render() {
		return (
			<AppWrapper className="App">
				<Helmet>
					<title>Gooey Testing</title>
					<link href="https://fonts.googleapis.com/css?family=Crimson+Text:400,600,700" rel="stylesheet" />
					<link
						href="https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,600,700,800,900"
						rel="stylesheet"
					/>
				</Helmet>
				<Document />
			</AppWrapper>
		);
	}
}

export default App;
