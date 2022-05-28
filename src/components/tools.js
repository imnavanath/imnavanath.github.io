import React from "react";
import PropTypes from 'prop-types';

function Tools ( {tools} ) {

	return (
		<>
			{typeof tools !== 'undefined' && (
				<div className="card shadow-lg compact mb-6 bg-base-100">
					<div className="card-body">
						<div className="mx-3">
							<h5 className="card-title">
								{
									<span className="opacity-70"> My Favourite Tools </span>
								}
							</h5>
						</div>
						<div className="p-3 flow-root">
							<div className="-m-1 flex flex-wrap">
							{ tools &&
								tools.map( (tool, index) => (
									<div
										key={index}
										className="m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary bg-opacity-90 rounded-full"
									>
										{ tool }
									</div>
								) )
							}
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

Tools.propTypes = {
	tools: PropTypes.array.isRequired,
};

export default Tools;
