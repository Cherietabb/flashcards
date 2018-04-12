import React from 'react';
import CardFlip from "./CardFlip";

const contentStyles = theme => ({
	container: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	pos: {
		marginBottom: 12,
	},
});

function CardContainer() {
		return (
			<div className={contentStyles.container}>
				<CardFlip />
			</div>
		)
}

export default CardContainer;
