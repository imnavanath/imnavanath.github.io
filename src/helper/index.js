import { useState, Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';

export function skeleton ( {
	width = null,
	height = null,
	style = {},
	shape = 'rounded-full',
	className = null,
	} ) {
		return (
			<div className={`bg-base-300 animate-pulse ${shape}${className ? ` ${className}` : ''}${width ? ` ${width}` : ''}${height ? ` ${height}` : ''}`} style={style}/>
		);
};

export function getInitialTheme ( themeConfig ) {
	if ( themeConfig.disableSwitch ) {
		return themeConfig.defaultTheme;
	}

	if (
		typeof window !== 'undefined' &&
		!(localStorage.getItem('gitprofile-theme') === null) &&
		themeConfig.themes.includes(localStorage.getItem('gitprofile-theme'))
	) {
	  let theme = localStorage.getItem('gitprofile-theme');
	  return theme;
	}

	if ( themeConfig.respectPrefersColorScheme && !themeConfig.disableSwitch ) {
		return typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : themeConfig.defaultTheme;
	}

	return themeConfig.defaultTheme;
};

export function languageColor ( language ) {
	return 'gray';
};

export function sanitizeConfig ( config ) {
	const customTheme =
	typeof config.themeConfig !== 'undefined' &&
	typeof config.themeConfig.customTheme !== 'undefined' ? config.themeConfig.customTheme : {
		primary: '#fc055b',
		secondary: '#219aaf',
		accent: '#e8d03a',
		neutral: '#2A2730',
		'base-100': '#E3E3ED',
		'--rounded-box': '3rem',
		'--rounded-btn': '3rem',
	};

	const themes =
	typeof config.themeConfig !== 'undefined' && typeof config.themeConfig.themes !== 'undefined' ? config.themeConfig.themes : [
		'light',
		'dark',
		'cupcake',
		'bumblebee',
		'emerald',
		'corporate',
		'synthwave',
		'retro',
		'cyberpunk',
		'valentine',
		'halloween',
		'garden',
		'forest',
		'aqua',
		'lofi',
		'pastel',
		'fantasy',
		'wireframe',
		'black',
		'luxury',
		'dracula',
		'cmyk',
		'autumn',
		'business',
		'acid',
		'lemonade',
		'night',
		'coffee',
		'winter',
		'procyon',
	];

	return {
		github: {
			username: config.github.username,
			sortBy:
				typeof config.github.sortBy !== 'undefined'
				? config.github.sortBy
				: 'stars',
			limit:
				typeof config.github.limit !== 'undefined' ? config.github.limit : 8,
			exclude: {
				forks:
				typeof config.github.exclude !== 'undefined' &&
				typeof config.github.exclude.forks !== 'undefined'
					? config.github.exclude.forks
					: false,
				projects:
				typeof config.github.exclude !== 'undefined' &&
				typeof config.github.exclude.projects !== 'undefined'
					? config.github.exclude.projects
					: [],
			},
		},
		social: {
			linkedin:
				typeof config.social !== 'undefined' &&
				typeof config.social.linkedin !== 'undefined'
				? config.social.linkedin
				: '',
			twitter:
				typeof config.social !== 'undefined' &&
				typeof config.social.twitter !== 'undefined'
				? config.social.twitter
				: '',
			facebook:
				typeof config.social !== 'undefined' &&
				typeof config.social.facebook !== 'undefined'
				? config.social.facebook
				: '',
			dribbble:
				typeof config.social !== 'undefined' &&
				typeof config.social.dribbble !== 'undefined'
				? config.social.dribbble
				: '',
			behance:
				typeof config.social !== 'undefined' &&
				typeof config.social.behance !== 'undefined'
				? config.social.behance
				: '',
			medium:
				typeof config.social !== 'undefined' &&
				typeof config.social.medium !== 'undefined'
				? config.social.medium
				: '',
			dev:
				typeof config.social !== 'undefined' &&
				typeof config.social.dev !== 'undefined'
				? config.social.dev
				: '',
			website:
				typeof config.social !== 'undefined' &&
				typeof config.social.website !== 'undefined'
				? config.social.website
				: '',
			phone:
				typeof config.social !== 'undefined' &&
				typeof config.social.phone !== 'undefined'
				? config.social.phone
				: '',
			email:
				typeof config.social !== 'undefined' &&
				typeof config.social.email !== 'undefined'
				? config.social.email
				: '',
		},
		skills: typeof config.skills !== 'undefined' ? config.skills : [],
		experiences: typeof config.experiences !== 'undefined' ? config.experiences : [],
		education: typeof config.education !== 'undefined' ? config.education : [],
		googleAnalytics: {
			id:
				typeof config.googleAnalytics !== 'undefined' &&
				typeof config.googleAnalytics.id !== 'undefined'
				? config.googleAnalytics.id
				: '',
		},
		themeConfig: {
			defaultTheme:
				typeof config.themeConfig !== 'undefined' &&
				typeof config.themeConfig.defaultTheme !== 'undefined'
				? config.themeConfig.defaultTheme
				: themes[0],
			disableSwitch:
				typeof config.themeConfig !== 'undefined' &&
				typeof config.themeConfig.disableSwitch !== 'undefined'
				? config.themeConfig.disableSwitch
				: false,
			respectPrefersColorScheme:
				typeof config.themeConfig !== 'undefined' &&
				typeof config.themeConfig.respectPrefersColorScheme !== 'undefined'
				? config.themeConfig.respectPrefersColorScheme
				: false,
			themes: themes,
			customTheme: customTheme,
		},
	};
};

function LazyImage ( placeholder, src, alt, ...rest ) {
	const [ loading, setLoading ] = useState(true);

	useEffect(() => {
		const imageToLoad = new Image();
		imageToLoad.src = src;
		imageToLoad.onload = () => {
			setLoading(false);
		};
	}, [src]);

	return (
		<Fragment>
			{loading ? placeholder : <img src={src} alt={alt} {...rest} />}
		</Fragment>
	);
};

LazyImage.propTypes = {
	placeholder: PropTypes.node,
	alt: PropTypes.string,
	src: PropTypes.string,
};

export default LazyImage;
