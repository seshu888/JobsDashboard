# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


index.css
1. Always write common styles in index.css
2.body { margin :0,padding :0;width:100vw;font-family:""}
    *{
        box-sizing:border-box;
    }
    html{
        font-size:100%;
        observe it is %
    }
    :root{
        --nav-height:6rem;
        page-heiht{
            min-height:calc(100vh - var(--nav-height))
        }
        .full-page-height{
            min-height:100vh;
        }
    }

very imp
  <nav className="nav">
        <div className="nav-container">
        <img src={logo} className="logo" />
        </div>
      </nav>

2.styled-components allow us to avoid same classname collisions(because each component has unique id if you create two buttons with same classname in diff components but they will have unique class name in dom representation and unique id's) if you use normal css then you will definitely face this problem 
we can pass js login like props to css



import React, { useState, useEffect } from 'react';
import styles from '../styles/layout.module.scss';
import Link from 'next/link';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import SidebarLinks from '../jsondata/sidebar-links.json';

const Layout = (props) => {
	const [ sidebarOpened, setSidebarOpened ] = useState(true);
	const [ windowWidth, setWindowWidth ] = useState(null);

	const router = useRouter();

	useEffect(() => {
		let user = Cookies.get('user');
		if (!user) router.replace('/');

		handleResize();
		window.addEventListener('resize', handleResize);
	}, []);

	useEffect(
		() => {
			if (windowWidth < 576) setSidebarOpened(false);
			else setSidebarOpened(true);
		},
		[ windowWidth ]
	);

	const handleResize = () => setWindowWidth(window.innerWidth);

	const handleSidebar = () => {
		setSidebarOpened(!sidebarOpened);
	};

	const handleLogout = () => {
		Cookies.remove('user');
		router.replace('/');
	};

	return (
		<div className={styles.mainContainer + ' ' + (sidebarOpened ? styles.sidebarOpened : '')}>
			<div className={styles.sidebarContainer}>
				<div className={styles.sidebarHeader}>
					{sidebarOpened && (
						<p>
							<span>MyBiz</span>
							<span className="ms-1">Flyers</span>
						</p>
					)}
					<div
						className={styles.sidebarCircle + ' ' + (windowWidth < 576 ? styles.clickDisabled : '')}
						onClick={handleSidebar}
					>
						{sidebarOpened ? <ChevronLeftIcon /> : <ChevronRightIcon />}
					</div>
				</div>
				<div className={styles.sidebarItemContainer}>
					{SidebarLinks.map((link, index) => (
						<Link key={index} className={styles.sidebarItemTitle} href={link.path}>
							{link.title}
						</Link>
					))}
				</div>
			</div>

			<div className={styles.contentContainer}>
				<div className={styles.topbar}>
					{windowWidth >= 576 && <div />}
					<h3 className="m-0">{props.title}</h3>
					<p onClick={handleLogout}>Logout</p>
				</div>
				<div className={styles.mainContent}>{props.children}</div>
			</div>
		</div>
	);
};
export default Layout;


@import "./variables.module.scss";
.mainContainer{
	width:100vw;
	height:100vh;
	display: flex;
}
.sidebarContainer {
	background-color: rgb(50, 50, 70);
	width: 80px;
	height:100%;
	transition:width 0.2s ease-out;
}
.sidebarContainer .sidebarHeader {
	padding: 20px 14px;
	height: 73px;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	border-bottom: 1px solid #656565;
}
.sidebarHeader p {
	margin: 0;
	font-size: 1.2rem;
}
.sidebarHeader p span {
	display: inline-block;
}
.sidebarHeader p span::first-letter {
	color: $secondary-color;
}
.sidebarHeader .sidebarCircle {
	width: 32px;
	height: 32px;
	border-radius: 50%;
	border: 2px solid white;
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;
}
.sidebarHeader .sidebarCircle.clickDisabled {
	opacity: 0.5;
	pointer-events: none;
}
.sidebarHeader svg { 
	font-size: 2rem;
}
.sidebarItemContainer {
	padding: 20px 0px;
	margin-top: 10px;
	display: flex;
	flex-direction: column;
}
.sidebarItemContainer a {
	padding: 10px 10px;
    text-decoration: none;
    color: white;
    background: #484855;
    margin-bottom: 15px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
	font-size: 16px;
    font-weight: 300;
}
.sidebarItemContainer a:hover {
	background: $primary-color;
}
.sidebarOpened .sidebarContainer {
	width: 220px;
}
.sidebarOpened .sidebarContainer .sidebarHeader {
	justify-content: space-between;
}
.sidebarOpened .sidebarItemContainer a {
	padding: 10px 20px;
	font-size: 17px;
}
.contentContainer {
	width: calc(100% - 80px);
	color: red;
}
.sidebarOpened .contentContainer {
	width: calc(100% - 220px);
}
.contentContainer .topbar {
	height: 73px;
	background-color: $secondary-color;
	padding: 0px 20px;
	color: white;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.contentContainer .topbar h3 {
	font-size: 21px;
}
.contentContainer .topbar p {
	margin: 0;
	cursor: pointer;
	font-size: 15px;
}
.mainContent {
	padding: 10px;
    height: calc(100% - 73px);
    overflow-y: auto;
	background-color: #f8f9fa;
}
@media only screen and (min-width: 576px) {
	.contentContainer .topbar h3 {
		font-size: 24px;
	}
	.contentContainer .topbar p {
		font-size: 16px;
	}
	.mainContent {
		padding: 20px;
	}
}
@media only screen and (min-width: 992px) {
	.contentContainer .topbar h3 {
		font-size: 28px;
	}
	.mainContent {
		padding: 30px;
	}
}