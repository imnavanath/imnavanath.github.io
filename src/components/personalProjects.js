import React from 'react';
import PropTypes from 'prop-types';
import { renderCustomProjects } from '../helper/index.js';

function PersonalProject ( {projects} ) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
			{ renderCustomProjects( projects ) }
		</div>
	);
};

PersonalProject.propTypes = {
	projects: PropTypes.array,
};

export default PersonalProject;
