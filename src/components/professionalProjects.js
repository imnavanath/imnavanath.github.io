import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineStar, AiOutlineFork, AiOutlineDownCircle } from 'react-icons/ai';
import { Disclosure } from '@headlessui/react';
import { languageColor, classNames } from '../helper/index.js';
import PortfolioIcons from '../helper/icons.js';

function ProfessionalProject ( {projects} ) {

	const renderProjects = ( projects ) => {
		return projects.map( ( item, index ) => (
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
	};

	return (
		<Fragment>
			<div className="bg-base-100 mb-6 card">
				<div className="card-body">
					<dl className="space-y-6 divide-y divide-gray-200">
						{
							<Disclosure as="div">
								{({ open = true }) => (
									<>
										<dt className="text-lg">
											<Disclosure.Button className="text-left w-full flex justify-between items-start">
												<span className="card-title opacity-70"> Organizational Projects </span>
												<span className="ml-6 h-7 flex items-center opacity-70">
													<AiOutlineDownCircle
														className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform opacity-70')}
														aria-hidden="true"
													/>
												</span>
											</Disclosure.Button>
										</dt>
										<Disclosure.Panel as="dd" className="mt-4">
											<div className="col-span-2">
												<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
													{ renderProjects( projects ) }
												</div>
											</div>
										</Disclosure.Panel>
									</>
								)}
							</Disclosure>
						}
					</dl>
				</div>
			</div>
		</Fragment>
	);
};

ProfessionalProject.propTypes = {
	projects: PropTypes.array,
};

export default ProfessionalProject;
