import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { MdLocationOn, MdMail } from 'react-icons/md';
import { AiFillGithub, AiFillFilePdf } from 'react-icons/ai';
import { GrLinkedinOption, GrWordpress, GrDocumentPdf } from 'react-icons/gr';
import { RiPhoneFill, RiPaypalFill } from 'react-icons/ri';
import { FaBuilding, FaDev, FaFacebook, FaGlobe } from 'react-icons/fa';

const ListItem = ( {icon, title, value, link} ) => {
	return (
		<a
			href={link}
			target="_blank"
			rel="noreferrer"
			className="flex justify-start py-2 px-1 items-center"
		>
			<span className="w-2 m-2">{icon}</span>
			<div className="flex-grow font-medium px-2">{title}</div>
			<div className={`text-sm font-normal text-right mr-2 ml-3 ${link ? 'truncate' : ''}`}>
				<div
					style={{
						wordBreak: 'break-word',
					}}
				>
					{value}
				</div>
			</div>
		</a>
	);
};

function Details ( {profile, social, github} ) {
	return (
		<div className="card shadow-lg compact bg-base-100">
			<div className="card-body">
				<div className="text-base-content text-opacity-60">
					{
						<Fragment>
							{profile.location && (
								<ListItem
									icon={<MdLocationOn className="mr-2" />}
									title="Based in:"
									value={profile.location}
								/>
							)}
							{profile.company && (
								<ListItem
									icon={<FaBuilding className="mr-2" />}
									title="Company:"
									value={profile.company}
									link={'https://brainstormforce.com/'}
								/>
							)}
							{typeof social.resume !== 'undefined' && social.resume && (
								<ListItem
									icon={<AiFillFilePdf className="mr-2" />}
									title="Curriculum Vitae:"
									value={'View'}
									link={social.resume}
								/>
							)}
							<ListItem
								icon={<AiFillGithub className="mr-2" />}
								title="GitHub:"
								value={github.username}
								link={`https://github.com/${github.username}`}
							/>
							{typeof social.linkedin !== 'undefined' && social.linkedin && (
								<ListItem
									icon={<GrLinkedinOption className="mr-2" />}
									title="LinkedIn:"
									value={social.linkedin}
									link={`https://www.linkedin.com/in/${social.linkedin}`}
								/>
							)}
							{typeof social.wordpress !== 'undefined' && social.wordpress && (
								<ListItem
									icon={<GrWordpress className="mr-2" />}
									title="WordPress:"
									value={social.wordpress}
									link={`https://profiles.wordpress.org/${social.wordpress}`}
								/>
							)}
							{typeof social.dev !== 'undefined' && social.dev && (
								<ListItem
									icon={<FaDev className="mr-2" />}
									title="Dev:"
									value={social.dev}
									link={`https://dev.to/${social.dev}`}
								/>
							)}
							{typeof social.website !== 'undefined' && social.website && (
								<ListItem
									icon={<FaGlobe className="mr-2" />}
									title="Website:"
									value={social.website}
									link={social.website}
								/>
							)}
							{typeof social.facebook !== 'undefined' && social.facebook && (
								<ListItem
									icon={<FaFacebook className="mr-2" />}
									title="Facebook:"
									value={social.facebook}
									link={`https://www.facebook.com/${social.facebook}`}
								/>
							)}
							{typeof social.phone !== 'undefined' && social.phone && (
								<ListItem
									icon={<RiPhoneFill className="mr-2" />}
									title="Phone:"
									value={social.phone}
									link={`tel:${social.phone}`}
								/>
							)}
							{typeof social.email !== 'undefined' && social.email && (
								<ListItem
									icon={<MdMail className="mr-2" />}
									title="Email:"
									value={social.email}
									link={`mailto:${social.email}`}
								/>
							)}
							{typeof social.paypal !== 'undefined' && social.paypal && (
								<ListItem
									icon={<RiPaypalFill className="mr-2" />}
									title="Paypal:"
									value={social.paypal}
									link={`https://www.paypal.me/${social.paypal}`}
								/>
							)}
						</Fragment>
					}
				</div>
			</div>
		</div>
	);
};

Details.propTypes = {
	profile: PropTypes.object,
	social: PropTypes.object.isRequired,
	github: PropTypes.object.isRequired,
};

ListItem.propTypes = {
	icon: PropTypes.node,
	title: PropTypes.node,
	value: PropTypes.node,
	link: PropTypes.string,
};

export default Details;
