import React from "react";
import PropTypes from 'prop-types';

import {
	DiHtml5,
	DiCss3,
	DiJavascript,
	DiJqueryLogo,
	DiBootstrap,
	DiGhostSmall,
	DiReact,
	DiPhp,
	DiMysql,
	DiGit,
	DiWordpress
} from "react-icons/di";
function Skill ( {skills} ) {

	const skillsMarkup = Object.entries( skills ).map( ( [ key, icon ] ) => {
		let iconTag = '';

		switch ( key ) {
			case 'HTML':
				iconTag = <DiHtml5 className="w-8 h-8" />;
				break;

			case 'CSS':
				iconTag = <DiCss3 className="w-8 h-8" />;
				break;

			case 'JavaScript':
				iconTag = <DiJavascript className="w-8 h-8" />;
				break;

			case 'jQuery':
				iconTag = <DiJqueryLogo className="w-8 h-8" />;
				break;

			case 'Bootstrap':
				iconTag = <DiBootstrap className="w-8 h-8" />;
				break;

			case 'Tailwind':
				iconTag = <DiGhostSmall className="w-8 h-8" />;
				break;

			case 'React':
				iconTag = <DiReact className="w-8 h-8" />;
				break;

			case 'PHP':
				iconTag = <DiPhp className="w-8 h-8" />;
				break;

			case 'MySQL':
				iconTag = <DiMysql className="w-8 h-8" />;
				break;

			case 'Git':
				iconTag = <DiGit className="w-8 h-8" />;
				break;

			case 'WordPress':
				iconTag = <DiWordpress className="w-8 h-8" />;
				break;
		}

		return (
			<div
				key={key}
				className="m-1 leading-none text-xs inline-flex items-center font-bold leading-sm px-4 py-4 badge-ghost bg-opacity-90 rounded flex flex-col"
			>
				{ iconTag }
				{ <span className="font-semibold mt-2 opacity-70"> { key } </span> }
			</div>
		);
	} );

	return (
		<>
			{typeof skills !== 'undefined' && (
				<div className="card shadow-lg compact mb-6 bg-base-100">
					<div className="card-body">
						<div className="mx-3">
							<h5 className="card-title">
								{
									<span className="opacity-70"> Tech Stack </span>
								}
							</h5>
						</div>
						<div className="p-3 flow-root">
							<div className="-m-1 flex flex-wrap justify-between">
								{ skillsMarkup }
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

Skill.propTypes = {
	skills: PropTypes.object.isRequired,
};

export default Skill;
