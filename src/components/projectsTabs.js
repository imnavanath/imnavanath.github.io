import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from '@headlessui/react';
import { classNames } from '../helper/index.js';
import ProfessionalProject from './professionalProjects.js';
import PersonalProject from './personalProjects.js';
import MiscProject from './miscProjects.js';

function ProjectsTabs ( { professional, personal, misc } ) {
	const tabs = [
		{ label: 'Organizational', panel: <ProfessionalProject projects={professional} /> },
		{ label: 'Personal', panel: <PersonalProject projects={personal} /> },
		{ label: 'Misc', panel: <MiscProject projects={misc} /> },
	];

	return (
		<div className="bg-base-100 mb-6 card">
			<div className="card-body">
				<Tab.Group defaultIndex={0}>
					<Tab.List className="tabs tabs-boxed bg-base-200 mb-4 flex w-full">
						{ tabs.map( ( t ) => (
							<Tab
								key={t.label}
								className={ ( { selected } ) =>
									classNames(
										'tab flex-1',
										selected ? 'tab-active' : 'opacity-70'
									)
								}
							>
								{t.label}
							</Tab>
						) ) }
					</Tab.List>
					<Tab.Panels>
						{ tabs.map( ( t ) => (
							<Tab.Panel key={t.label} className="focus:outline-none">
								{t.panel}
							</Tab.Panel>
						) ) }
					</Tab.Panels>
				</Tab.Group>
			</div>
		</div>
	);
};

ProjectsTabs.propTypes = {
	professional: PropTypes.array,
	personal: PropTypes.array,
	misc: PropTypes.array,
};

export default ProjectsTabs;
