import React from "react";

import './styles/BadgesList.css'
import tw_logo from "../images/twitter-logo.png";

class BadgesList extends React.Component {
	render() {
		return (
			<ul className='list-unstyled'>
				{this.props.badges.map(badge => {
					return (
						<li key={badge.id} className='Badge__section-name-list'>
							<img src={badge.avatarUrl} className='Badge__avatar-list' />
							<div>
								{badge.firstName} {badge.lastName}
								<br />
								{badge.jobTitle}
								<br />
								<img src={tw_logo} className='tw__logo' />
								<span className='twitter__blue_font'>{badge.twitter}</span>
							</div>
						</li>
					);
				})}
			</ul>
		);
	}
}

export default BadgesList;