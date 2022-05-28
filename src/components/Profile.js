import { HelmetProvider } from 'react-helmet-async';
import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { Avatar, Theme, Details, Skill, Experience, Education, ProfessionalProject, PersonalProject, MiscProject, Tools, AboutMe } from './index.js';
import { getInitialTheme, sanitizeConfig } from '../helper/index.js';

import PropTypes from 'prop-types';
import PortfolioIcons from '../helper/icons.js';

function Profile( config ) {
	const [sanitizedConfig] = useState(
		typeof config === 'undefined' && !config ? null : sanitizeConfig(config)
	);
	const [theme, setTheme] = useState(null);
	const [profile, setProfile] = useState(null);

	const [professionlProjects, setProfessionlProjects] = useState(null);
	const [miscProjects, setMiscProjects] = useState(null);

	const loadData = useCallback(() => {
		fetch( `https://api.github.com/users/${sanitizedConfig.github.username}` )
		.then( response => response.json() )
		.then( ( response ) => {
			let profileData = {
				avatar: response.avatar_url,
				name: response.name ? response.name : '',
				bio: response.bio ? response.bio : '',
				location: response.location ? response.location : '',
				company: response.company ? response.company : '',
			};

			setProfile( profileData );
		})
		.then( () => {
			let excludeRepo = ``;

			sanitizedConfig.github.exclude.projects.forEach((project) => {
				excludeRepo += `+-repo:${sanitizedConfig.github.username}/${project}`;
			});

			let query = `user:${
				sanitizedConfig.github.username
			}+fork:false${excludeRepo}`;

			let url = `https://api.github.com/search/repositories?q=${query}&sort=${sanitizedConfig.github.sortBy}&per_page=${sanitizedConfig.github.limit}&type=Repositories`;

			const headers = {
				'Content-Type': 'application/vnd.github.v3+json'
			},
			finalPersonalRepos = [],
			finalMiscRepos = [];

			fetch( url, { headers } )
			.then( response => response.json() )
			.then( ( json ) => {
				json.items.forEach( ( projectRepo ) => {
					if( sanitizedConfig.github.personal.projects.includes( projectRepo.name ) ) {
						finalPersonalRepos.push( projectRepo );
					}

					if( sanitizedConfig.github.misc.projects.includes( projectRepo.name ) ) {
						finalMiscRepos.push( projectRepo );
					}
				});
				setProfessionlProjects( finalPersonalRepos );
				setMiscProjects( finalMiscRepos );
			} )
			.catch( ( error ) => {
				console.error( error );
			} );
		} )
		.catch( ( error ) => {
			console.error( error );
		} );
	}, []);

	useEffect(() => {
		if (sanitizedConfig) {
			setTheme(getInitialTheme(sanitizedConfig.themeConfig));
			loadData();
		}
	}, [sanitizedConfig]);

	useEffect(() => {
		theme && document.documentElement.setAttribute('data-theme', theme);
	}, [theme]);

	return (
		<HelmetProvider>
			<div className="fade-in h-screen">
			{ (	( sanitizedConfig && profile && professionlProjects && miscProjects ) && (
					<Fragment>
						<div className="p-4 lg:p-10 min-h-full bg-base-200">
							<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 rounded-box">
								<div className="col-span-1">
									<div className="grid grid-cols-1 gap-6">
										{!sanitizedConfig.themeConfig.disableSwitch && (
											<Theme
												theme={theme}
												setTheme={setTheme}
												themeConfig={sanitizedConfig.themeConfig}
											/>
										)}

										<Avatar profile={profile} />

										<Details
											profile={profile}
											github={sanitizedConfig.github}
											social={sanitizedConfig.social}
										/>

										<Experience
											experiences={sanitizedConfig.experiences}
										/>

										<Education
											education={sanitizedConfig.education}
										/>
									</div>
								</div>

								<div className="lg:col-span-2 col-span-1">
									<AboutMe/>

									<ProfessionalProject
										projects={sanitizedConfig.github.professional}
									/>

									<PersonalProject
										projects={ professionlProjects }
									/>

									<MiscProject
										projects={ miscProjects }
									/>

									<Skill
										skills={sanitizedConfig.skills}
									/>

									<Tools
										tools={sanitizedConfig.tools}
									/>
								</div>
							</div>
						</div>

						<footer className="p-4 footer bg-base-200 text-base-content footer-center">
							<div className="card compact bg-base-100 shadow">
								<a
									className="card-body"
									href="https://github.com/imnavanath/imnavanath.github.io/"
									target="_blank"
									rel="noreferrer"
								>
									<div>
										<p className="font-mono text-sm">
											Made with{' '}
											<span className="text-primary inline-block align-middle">
												{ PortfolioIcons.react }
											</span> and ❤️
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
				projects: PropTypes.array,
			}),
			professional: PropTypes.arrayOf(
				PropTypes.shape({
					name: PropTypes.string,
					description: PropTypes.string,
					stargazers_count: PropTypes.string,
					forks_count: PropTypes.string,
					language: PropTypes.string,
					link: PropTypes.string,
				})
			),
		}).isRequired,
		social: PropTypes.shape({
			linkedin: PropTypes.string,
			paypal: PropTypes.string,
			facebook: PropTypes.string,
			wordpress: PropTypes.string,
			behance: PropTypes.string,
			dev: PropTypes.string,
			website: PropTypes.string,
			phone: PropTypes.string,
			email: PropTypes.string,
		}),
		skills: PropTypes.object,
		tools: PropTypes.array,
		experiences: PropTypes.arrayOf(
				PropTypes.shape({
				company: PropTypes.string,
				position: PropTypes.string,
				from: PropTypes.string,
				to: PropTypes.string,
				link: PropTypes.string,
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
		googleAnalytics: PropTypes.shape({
			id: PropTypes.string,
		}),
		themeConfig: PropTypes.shape({
			defaultTheme: PropTypes.string,
			disableSwitch: PropTypes.bool,
			respectPrefersColorScheme: PropTypes.bool,
			themes: PropTypes.array
		}),
	}).isRequired,
};

export default Profile;
