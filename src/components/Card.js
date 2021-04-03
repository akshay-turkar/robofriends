import React from 'react';

const Card = ({ name, email, id }) => {
	
	return( 
		<div className= "bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5">
			<img src ={`https://robohash.org/${id}?size=200x200`} alt = "robo"/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>	
		);
}
export default Card;
//tachyons predefiened classes used inside className
//if you want to add js in jsx use {}
//we have use ES6 in line 4 to make it cleaner
// if we didnt initialize props the we have to use
//props.name
//props.email