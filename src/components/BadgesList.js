import React from "react";
import { Link } from 'react-router-dom';
import './styles/BadgesList.css'
import tw_logo from "../images/twitter-logo.png";
import Skeleton from 'react-loading-skeleton';
import Gravatar from "./Gravatar";


function useSearchBadges(badges){
	const [ query, setQuery ] = React.useState('');
	const [ filteredBadges, setFilteredBadges ] = React.useState(badges);

	React.useMemo(() => {
		const results = badges.filter( badge => {
			return `${badge.firstName} ${badge.lastName}`
			.toLowerCase()
			.includes(query.toLowerCase());
		});

		if(filteredBadges.length != results.length){
			setFilteredBadges(results)
		}
	}, [ badges, query ]);

	return { query, setQuery, filteredBadges }
}

function BadgesList (props) {

	const records = ['','','','','','']

	const skeleton = props.skeleton;

	const badges = (props.badges) ? props.badges : [];

	const { query, setQuery, filteredBadges } = useSearchBadges(badges);

	// const filteredBadges = badges.filter( badge => {
	// 	return `${badge.firstName} ${badge.lastName}`
	// 	.toLowerCase()
	// 	.includes(query.toLowerCase());
	// });

	if(skeleton){
		return (
			<ul className='list-unstyled'>

				{records.map(badge => {
					return (
						<li className='Badge__section-name-list'>
							&nbsp;&nbsp;<Skeleton circle={true} height={70} width={70}/> &nbsp;&nbsp;
							<div>
								{<Skeleton width={150}/>} 
								<br />
								{<Skeleton width={150}/>}
								<br />
								<Skeleton circle={true} height={20} width={20}/>&nbsp;{<Skeleton width={100}/>}
							</div>
						</li>
					);
				})}
			</ul>
		);
	}
	else{

		if(filteredBadges.length === 0){
			return (
				<div>
					<div className="form-group">
						<label>Filter Badges</label>
						<input type="text" className="form-control" 
							value={query}
							onChange={(e) => {
								setQuery(e.target.value)
							}}
						/>
					</div>
					<h3>No badges were found</h3>
					<Link className="btn btn-primary" to="/badges/new">
						Create new badge
					</Link>
				</div>
			)
		}

		return (
			<div className="BadgesList">
				<div className="form-group">
					<label>Filter Badges</label>
					<input type="text" className="form-control" 
						value={query}
						onChange={(e) => {
							setQuery(e.target.value)
						}}
					/>
				</div>
				<ul className='list-unstyled'>
					{filteredBadges.slice(0).reverse().map(badge => {
						return (
							<li key={badge.id} className='Badge__section-name-list'>
								<Link className="text-reset text-decoration-none Badge__link" to={`/badges/${badge.id}`}>
									<Gravatar 
										className="Badge__avatar-list"
										email={badge.email}
										alt={`${badge.firstName} ${badge.lastName}`}
									/>
									<div>
										{badge.firstName} {badge.lastName} 
										<br />
										{badge.jobTitle || <Skeleton count={5} />}
										<br />
										<img src={tw_logo} className='tw__logo' />
										<span className='twitter__blue_font'>{badge.twitter}</span>
									</div>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default BadgesList;