import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let SearchFieldRightSideIcon = (props) => {
	return (
		<SvgIcon {...props} titleAccess='three icon ' viewBox='0 0 70 12'>
			<path
				fill='#515de1'
				d='M3.12 10.5h3.76C6.7 11.37 5.91 12 5 12c-.91 0-1.7-.63-1.88-1.5zm5.72-3.7l.94.92c.22.22.28.54.16.82a.77.77 0 0 1-.7.46H.76a.77.77 0 0 1-.71-.46.74.74 0 0 1 .16-.82l.94-.92V3.75A3.8 3.8 0 0 1 5 0a3.8 3.8 0 0 1 3.84 3.75V6.8z'></path>
			<path
				fill='#525F7F'
				d='M34 12a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm-.75-5.93v.3a.75.75 0 0 0 1.44.29 2.63 2.63 0 1 0-3.32-2.53.75.75 0 0 0 1.51-.01A1.13 1.13 0 0 1 34 3a1.12 1.12 0 0 1 0 2.23.75.75 0 0 0-.75.83zM34 10.5a1.13 1.13 0 1 0 0-2.25 1.13 1.13 0 0 0 0 2.25zm30-2.25c1.09 0 2.13-.41 2.92-1.15l1.33.5A2.7 2.7 0 0 1 70 10.12v1.12c0 .41-.34.75-.75.75h-10.5a.75.75 0 0 1-.75-.75v-1.13C58 9 58.7 8 59.76 7.6l1.32-.5A4.23 4.23 0 0 0 64 8.26zM63.85 0h.3a2.63 2.63 0 0 1 2.61 2.84l-.12 1.48a2.65 2.65 0 0 1-5.28 0l-.12-1.48A2.63 2.63 0 0 1 63.85 0z'></path>
		</SvgIcon>
	);
};

SearchFieldRightSideIcon = styled(SearchFieldRightSideIcon, { name: 'three-icon' })(({ theme }) => ({
	width: '70px',
	height: '12px'
}));
export default SearchFieldRightSideIcon;
