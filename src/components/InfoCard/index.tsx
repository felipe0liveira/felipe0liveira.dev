import styles from './index.module.scss'

export const InfoCard = ({ children, backgroundUrl = null }) => {
	return (
		<div
			className={styles.InfoCard}
			style={{
				backgroundImage: backgroundUrl ? `url(${backgroundUrl})` : 'none',
			}}
		>
			<div
				className={styles.Content}
				style={{
					backgroundColor: backgroundUrl ? `rgba(39, 39, 39, 0.95)` : 'unset',
				}}
			>
				{children}
			</div>
		</div>
	)
}
