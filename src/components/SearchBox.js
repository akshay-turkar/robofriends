import React from 'react';

const SearchBox = ({searchFeild, searchChange}) => {
	return(
			<div className = "pa2">
				<input
					className = "pa3 ba b--green bg-lightest-blue" 
					type="search" 
					placeholder="Search Robots"
					onChange = {searchChange}
				 />
			</div>
		);
}



export default SearchBox;
//it is nessasary to assign same name  to the function as the file