import React, { useState, Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import colors from './colors.json';
import PortfolioIcons from '../helper/icons.js';
import { AiOutlineStar, AiOutlineFork } from 'react-icons/ai';

export function getInitialTheme ( themeConfig ) {
	if ( themeConfig.disableSwitch ) {
		return themeConfig.defaultTheme;
	}

	if (
		typeof window !== 'undefined' &&
		!(localStorage.getItem('portfolio-theme') === null) &&
		themeConfig.themes.includes(localStorage.getItem('portfolio-theme'))
	) {
	  let theme = localStorage.getItem('portfolio-theme');
	  return theme;
	}

	if ( themeConfig.respectPrefersColorScheme && !themeConfig.disableSwitch ) {
		return typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : themeConfig.defaultTheme;
	}

	return themeConfig.defaultTheme;
};

export function languageColor ( language ) {
	if ( typeof colors[language] !== 'undefined' ) {
		return colors[language].color;
	} else {
		return 'gray';
	}
};

export function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
};

export function renderCustomProjects( projects ) {
	return projects.map( ( item, index ) => (
		<a
			className="card shadow-lg compact bg-base-100 cursor-pointer"
			href={item.html_url}
			key={index}
			target={ '_blank' }
		>
			<div className="flex justify-between flex-col p-8 h-full w-full">
				<div>
					<div className="flex items-center opacity-60">
						{ PortfolioIcons.folder }
						<span>
							<h5 className="card-title text-lg">{item.name}</h5>
						</span>
					</div>
					<p className="mb-5 mt-1 text-base-content text-opacity-60 text-sm">
						{item.description}
					</p>
				</div>
				<div className="flex justify-between text-sm text-base-content text-opacity-60">
					<div className="flex flex-grow">
						<span className="mr-3 flex items-center">
							<AiOutlineStar className="mr-0.5" />
							<span>{item.stargazers_count}</span>
						</span>
						<span className="flex items-center">
							<AiOutlineFork className="mr-0.5" />
							<span>{item.forks_count}</span>
						</span>
					</div>
					<div>
						<span className="flex items-center">
						<div
							className="w-3 h-3 rounded-full mr-1 opacity-60"
							style={ { backgroundColor: languageColor(item.language ) } }
						/>
						<span>{item.language}</span>
						</span>
					</div>
				</div>
			</div>
		</a>
	));
}

export function sanitizeConfig ( config ) {

	const themes = typeof config.config.themeConfig !== 'undefined' && typeof config.config.themeConfig.themes !== 'undefined' ? config.config.themeConfig.themes : [
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
			username: config.config.github.username,
			sortBy:
				typeof config.config.github.sortBy !== 'undefined'
				? config.config.github.sortBy
				: 'stars',
			limit:
				typeof config.config.github.limit !== 'undefined' ? config.config.github.limit : 8,
			exclude: {
				projects:
				typeof config.config.github.exclude !== 'undefined' &&
				typeof config.config.github.exclude.projects !== 'undefined'
					? config.config.github.exclude.projects
					: [],
			},
			professional: typeof config.config.github.professional !== 'undefined' ? config.config.github.professional : [],
			personal: typeof config.config.github.personal !== 'undefined' ? config.config.github.personal : [],
			misc: typeof config.config.github.misc !== 'undefined' ? config.config.github.misc : [],
		},
		social: {
			linkedin:
				typeof config.config.social !== 'undefined' &&
				typeof config.config.social.linkedin !== 'undefined'
				? config.config.social.linkedin
				: '',
			wordpress:
				typeof config.config.social !== 'undefined' &&
				typeof config.config.social.wordpress !== 'undefined'
				? config.config.social.wordpress
				: '',
			facebook:
				typeof config.config.social !== 'undefined' &&
				typeof config.config.social.facebook !== 'undefined'
				? config.config.social.facebook
				: '',
			paypal:
				typeof config.config.social !== 'undefined' &&
				typeof config.config.social.paypal !== 'undefined'
				? config.config.social.paypal
				: '',
			dev:
				typeof config.config.social !== 'undefined' &&
				typeof config.config.social.dev !== 'undefined'
				? config.config.social.dev
				: '',
			website:
				typeof config.config.social !== 'undefined' &&
				typeof config.config.social.website !== 'undefined'
				? config.config.social.website
				: '',
			phone:
				typeof config.config.social !== 'undefined' &&
				typeof config.config.social.phone !== 'undefined'
				? config.config.social.phone
				: '',
			email:
				typeof config.config.social !== 'undefined' &&
				typeof config.config.social.email !== 'undefined'
				? config.config.social.email
				: '',
		},
		skills: typeof config.config.skills !== 'undefined' ? config.config.skills : {},
		experiences: typeof config.config.experiences !== 'undefined' ? config.config.experiences : [],
		tools: typeof config.config.tools !== 'undefined' ? config.config.tools : [],
		education: typeof config.config.education !== 'undefined' ? config.config.education : [],
		googleAnalytics: {
			id:
				typeof config.config.googleAnalytics !== 'undefined' &&
				typeof config.config.googleAnalytics.id !== 'undefined'
				? config.config.googleAnalytics.id
				: '',
		},
		themeConfig: {
			defaultTheme:
				typeof config.config.themeConfig !== 'undefined' &&
				typeof config.config.themeConfig.defaultTheme !== 'undefined'
				? config.config.themeConfig.defaultTheme
				: themes[0],
			disableSwitch:
				typeof config.config.themeConfig !== 'undefined' &&
				typeof config.config.themeConfig.disableSwitch !== 'undefined'
				? config.config.themeConfig.disableSwitch
				: false,
			respectPrefersColorScheme:
				typeof config.config.themeConfig !== 'undefined' &&
				typeof config.config.themeConfig.respectPrefersColorScheme !== 'undefined'
				? config.config.themeConfig.respectPrefersColorScheme
				: false,
			themes: themes
		},
	};
};

function LazyImage ( {placeholder, src, alt, ...rest} ) {
	const [ loading, setLoading ] = useState(true);

	useEffect( () => {
		const imageToLoad = new Image();
		imageToLoad.src = src;
		imageToLoad.onload = () => {
			setLoading(false);
		};
	}, [src] );

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
