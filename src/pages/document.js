// Here is the general Document Wrapper...
// Would also handle Routing...
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Styled from 'styled-components';

// Get Contexts...
import ThemeProvider, { ThemeContext } from '../context/page-theme';
import { GooProvider } from '../context/gooContext';

import GooContainer from '../components/goo-container';

// Get Pages
import ScrollExample from './scroll-example';

const PageContainer = Styled.div`
    width: 100%;
    min-height: 100vh;
    color: ${(props) => (props.foregroundColor ? props.foregroundColor : '#FFFFFF')};
    background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : '#333333')};
    font-family: 'Nunito Sans', sans-serif;
    position: relative;
    transition: color 0.35s ease-in, background-color 0.3s ease-in;
`;
const PageWrapper = Styled.div`
    position: relative;
    z-index: 1;
`;
const NavWrapper = Styled.div`
    width: 400px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 40px;
    justify-items: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 20px;
    z-index: 5;
`;
const NavItem = Styled.div`
    height: auto;
`;
const StyledLink = Styled(Link)`
    color: inherit;
    text-decoration: none;
    font-size: 13px;
`;

class Document extends React.Component {
	render() {
		return (
			<ThemeProvider>
				<GooProvider>
					<ThemeContext.Consumer>
						{(themeContext) => {
							return (
								<PageContainer
									backgroundColor={themeContext.state.backgroundColor}
									foregroundColor={themeContext.state.foregroundColor}>
									{/* Bring in the Site's head data... Could separate it but no need for this demo */}
									<Router>
										<Fragment>
											<NavWrapper>
												<NavItem>
													<StyledLink to="/scroll-example">Sroll Example</StyledLink>
												</NavItem>
												<NavItem>
													<StyledLink to="/slide-example">Slide Example</StyledLink>
												</NavItem>
											</NavWrapper>
											<GooContainer />
											<PageWrapper>
												<Fragment>
													<Route path="/" exact render={() => <ScrollExample />} />
													<Route component={ScrollExample} path="/scroll-example" />
												</Fragment>
											</PageWrapper>
										</Fragment>
									</Router>
								</PageContainer>
							);
						}}
					</ThemeContext.Consumer>
				</GooProvider>
			</ThemeProvider>
		);
	}
}

export default Document;
