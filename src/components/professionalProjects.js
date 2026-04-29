import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineStar, AiOutlineFork } from 'react-icons/ai';
import { languageColor } from '../helper/index.js';
import PortfolioIcons from '../helper/icons.js';

function ProfessionalProject ( {projects} ) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
			{ projects.map( ( item, index ) => (
				<a
					className="card shadow-lg compact bg-base-100 cursor-pointer"
					href={item.link}
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
						{ item.isPrivate ? (
							<div className="flex justify-end text-sm font-medium text-primary">
								<span>Visit &rarr;</span>
							</div>
						) : (
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
						) }
					</div>
				</a>
			)) }
		</div>
	);
};

ProfessionalProject.propTypes = {
	projects: PropTypes.array,
};

export default ProfessionalProject;
