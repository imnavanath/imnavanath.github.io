import React from "react";
import { IoColorWandOutline } from "react-icons/io5";
import PropTypes from 'prop-types';
import PortfolioIcons from '../helper/icons.js';
function Theme ( { theme, setTheme, themeConfig } ) {
	const changeTheme = (e, selectedTheme) => {
		e.preventDefault();
		document.querySelector('html').setAttribute('data-theme', selectedTheme);

		typeof window !== 'undefined' && localStorage.setItem( 'portfolio-theme', selectedTheme );

		setTheme(selectedTheme);
	};

	return (
		<div className="card overflow-visible shadow-lg compact bg-base-100">
			<div className="flex-row items-center space-x-4 flex pl-6 pr-2 py-4">
				<div className="flex-1">
					<h5 className="card-title">
						{
							<span className="opacity-70">Theme</span>
						}
					</h5>
					<span className="text-base-content text-opacity-40 capitalize text-sm">
					{
						theme === themeConfig.defaultTheme ? 'Default' : theme
					}
					</span>
				</div>
				<div className="flex-0">
					{
						<div title="Change Theme" className="dropdown dropdown-end">
							<div
								tabIndex={0}
								className="btn btn-ghost m-1 normal-case opacity-50"
							>
								<IoColorWandOutline className="inline-block w-5 h-5 stroke-current md:mr-2" />
								<span className="hidden md:inline">Switch Theme</span>
								{ PortfolioIcons.theme }
							</div>
							<div
								tabIndex={0}
								className="mt-16 overflow-y-auto shadow-2xl top-px dropdown-content max-h-96 w-52 rounded-b-box bg-base-200 text-base-content"
							>
								<ul className="p-4 menu compact">
									{ [
										themeConfig.defaultTheme,
										...themeConfig.themes.filter(
											(item) => item !== themeConfig.defaultTheme
									),
									].map( ( item, index ) => (
										<li key={index}>
											<a
												onClick={(e) => changeTheme(e, item)}
												className={`${theme === item ? 'active' : ''}`}
											>
												<span className="opacity-60 capitalize">
													{item === themeConfig.defaultTheme ? 'Default' : item}
												</span>
											</a>
										</li>
									) ) }
								</ul>
							</div>
						</div>
					}
				</div>
			</div>
		</div>
	);
};

Theme.propTypes = {
	theme: PropTypes.string,
	setTheme: PropTypes.func.isRequired,
	themeConfig: PropTypes.object.isRequired,
};

export default Theme;
