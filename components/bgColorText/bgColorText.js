const BgColorText = ({ children, color = '#C0E3EE', isShadow = false, isFullWidth = false }) => {
	const styles = {
		display: 'inline-block',
		backgroundColor: color
	};

	if (isFullWidth) {
		styles.width = '100%';
	}

	if (isShadow) {
		styles.boxShadow = 'rgba(0, 0, 0, 0.16) 0px 2px 3px, rgba(0, 0, 0, 0.23) 0px 2px 3px';
	}

	return (
		<span style={styles}>
            {children}
        </span>
	);
}

export default BgColorText;
