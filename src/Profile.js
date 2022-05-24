import axios from 'axios';

import { HelmetProvider } from 'react-helmet-async';
import { Fragment, useCallback, useEffect, useState } from 'react';

import { Avatar, Theme, Details, Skill, Experience, Education, Project } from './components/index.js';
import { getInitialTheme, sanitizeConfig } from './helper/index.js';

import PropTypes from 'prop-types';

function Profile( { config } ) {
	const [sanitizedConfig] = useState(
		typeof config === 'undefined' && !config ? null : sanitizeConfig(config)
	);
	const [theme, setTheme] = useState(null);
	const [loading, setLoading] = useState(true);
	const [profile, setProfile] = useState(null);
	const [repo, setRepo] = useState(null);

	useEffect(() => {
		if (sanitizedConfig) {
			setTheme(getInitialTheme(sanitizedConfig.themeConfig));
			loadData();
		}
	}, [sanitizedConfig]);

	useEffect(() => {
	theme && document.documentElement.setAttribute('data-theme', theme);
	}, [theme]);

	const loadData = useCallback( () => {
		axios
		.get(`https://api.github.com/users/${sanitizedConfig.github.username}`)
		.then((response) => {
		let data = response.data;

		let profileData = {
			avatar: data.avatar_url,
			name: data.name ? data.name : '',
			bio: data.bio ? data.bio : '',
			location: data.location ? data.location : '',
			company: data.company ? data.company : '',
		};

		setProfile(profileData);
		})
		.then(() => {
		let excludeRepo = ``;

		sanitizedConfig.github.exclude.projects.forEach((project) => {
			excludeRepo += `+-repo:${sanitizedConfig.github.username}/${project}`;
		});

		let query = `user:${
			sanitizedConfig.github.username
		}+fork:${!sanitizedConfig.github.exclude.forks}${excludeRepo}`;

		let url = `https://api.github.com/search/repositories?q=${query}&sort=${sanitizedConfig.github.sortBy}&per_page=${sanitizedConfig.github.limit}&type=Repositories`;

		axios
			.get(url, {
				headers: {
					'Content-Type': 'application/vnd.github.v3+json',
				},
			})
			.then((response) => {
				let data = response.data;
				setRepo(data.items);
			})
		})
		.finally(() => {
			setLoading(false);
		});
	}, [setLoading]);

	return (
		<HelmetProvider>
			<div className="fade-in h-screen">
			{ (	sanitizedConfig && (
					<Fragment>
						<div className="p-4 lg:p-10 min-h-full bg-base-200">
							<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 rounded-box">
								<div className="col-span-1">
									<div className="grid grid-cols-1 gap-6">
										{!sanitizedConfig.themeConfig.disableSwitch && (
											<Theme
												theme={theme}
												setTheme={setTheme}
												loading={loading}
												themeConfig={sanitizedConfig.themeConfig}
											/>
										)}
										<Avatar profile={profile} loading={loading} />
										<Details
											profile={profile}
											loading={loading}
											github={sanitizedConfig.github}
											social={sanitizedConfig.social}
										/>
										<Skill
											loading={loading}
											skills={sanitizedConfig.skills}
										/>
										<Experience
											loading={loading}
											experiences={sanitizedConfig.experiences}
										/>
										<Education
											loading={loading}
											education={sanitizedConfig.education}
										/>
									</div>
								</div>
								<div className="lg:col-span-2 col-span-1">
									<div className="grid grid-cols-1 gap-6">
										<Project
											repo={repo}
											loading={loading}
											github={sanitizedConfig.github}
											googleAnalytics={sanitizedConfig.googleAnalytics}
										/>
									</div>
								</div>
							</div>
						</div>

						<footer className="p-4 footer bg-base-200 text-base-content footer-center">
							<div className="card compact bg-base-100 shadow">
								<a
									className="card-body"
									href="https://github.com/imnavanath/"
									target="_blank"
									rel="noreferrer"
								>
									<div>
										<p className="font-mono text-sm">
											Made with{' '}
											<span className="text-primary">Profile</span> and ❤️
										</p>
									</div>
								</a>
							</div>
						</footer>
					</Fragment>
				)
			) }
			</div>
		</HelmetProvider>
	);
};

Profile.propTypes = {
	config: PropTypes.shape({
	github: PropTypes.shape({
		username: PropTypes.string.isRequired,
		sortBy: PropTypes.oneOf(['stars', 'updated']),
		limit: PropTypes.number,
		exclude: PropTypes.shape({
		forks: PropTypes.bool,
		projects: PropTypes.array,
		}),
	}).isRequired,
	social: PropTypes.shape({
		linkedin: PropTypes.string,
		twitter: PropTypes.string,
		facebook: PropTypes.string,
		dribbble: PropTypes.string,
		behance: PropTypes.string,
		medium: PropTypes.string,
		dev: PropTypes.string,
		website: PropTypes.string,
		phone: PropTypes.string,
		email: PropTypes.string,
	}),
	skills: PropTypes.array,
	experiences: PropTypes.arrayOf(
			PropTypes.shape({
			company: PropTypes.string,
			position: PropTypes.string,
			from: PropTypes.string,
			to: PropTypes.string,
		})
	),
	education: PropTypes.arrayOf(
		PropTypes.shape({
			institution: PropTypes.string,
			degree: PropTypes.string,
			from: PropTypes.string,
			to: PropTypes.string,
		})
	),
	blog: PropTypes.shape({
		source: PropTypes.string,
		username: PropTypes.string,
		limit: PropTypes.number,
	}),
	googleAnalytics: PropTypes.shape({
		id: PropTypes.string,
	}),
	themeConfig: PropTypes.shape({
		defaultTheme: PropTypes.string,
		disableSwitch: PropTypes.bool,
		respectPrefersColorScheme: PropTypes.bool,
		themes: PropTypes.array,
		customTheme: PropTypes.shape({
		primary: PropTypes.string,
		secondary: PropTypes.string,
		accent: PropTypes.string,
		neutral: PropTypes.string,
		'base-100': PropTypes.string,
		'--rounded-box': PropTypes.string,
		'--rounded-btn': PropTypes.string,
		}),
	}),
	}).isRequired,
};

export default Profile;
