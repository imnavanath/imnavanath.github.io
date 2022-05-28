import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineDownCircle } from 'react-icons/ai';
import { Disclosure } from '@headlessui/react';
import { classNames, renderCustomProjects } from '../helper/index.js';

function PersonalProject ( {projects} ) {

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
												<span className="card-title opacity-70"> Personal Projects </span>
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
													{ renderCustomProjects( projects ) }
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

PersonalProject.propTypes = {
	projects: PropTypes.array,
};

export default PersonalProject;
