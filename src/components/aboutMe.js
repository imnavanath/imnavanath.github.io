import React from "react";

function AboutMe () {
	return (
		<div className="card shadow-lg compact bg-base-100 mb-6">
			<div className="card-body">
				<h2 className="card-title opacity-80">Hi, I'm Navanath 👋</h2>
				<p className="text-base-content text-opacity-70 mt-2 leading-relaxed">
					I'm a <span className="font-semibold">Lead Developer at Brainstorm Force</span>,
					building full-stack WordPress products since 2018. I lead day-to-day development
					across the <span className="font-semibold">SureProducts</span> ecosystem -
					SureRank, SureCookie, SureDash and SureMembers - alongside the flagship
					<span className="font-semibold"> Astra</span> theme and
					<span className="font-semibold"> Spectra</span> page builder.
				</p>
				<p className="text-base-content text-opacity-70 mt-3 leading-relaxed">
					I care about lightweight, accessible UIs, fast page loads, and shipping
					features that real users feel. I've recently been pairing my workflow with
					AI-assisted development (Claude Code, Cursor) to ship more, faster - without
					sacrificing review quality.
				</p>

				<div className="stats stats-vertical lg:stats-horizontal shadow mt-5 bg-base-200">
					<div className="stat">
						<div className="stat-title">PRs merged</div>
						<div className="stat-value text-primary">360</div>
						<div className="stat-desc">last 12 months</div>
					</div>
					<div className="stat">
						<div className="stat-title">Reviews given</div>
						<div className="stat-value">1,048</div>
						<div className="stat-desc">last 12 months</div>
					</div>
					<div className="stat">
						<div className="stat-title">Active repos</div>
						<div className="stat-value">21</div>
						<div className="stat-desc">SureProducts (SureRank, SureDash, SureMembers, SureCookie: Includes Plugins + SaaS Apps)</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutMe;
