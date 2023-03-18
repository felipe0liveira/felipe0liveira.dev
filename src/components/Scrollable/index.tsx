import style from './index.module.scss'

export const Scrollable = ({ children, height = 100 }) => {
	return (
		<div className={style.Scrollable} style={{ maxHeight: `${height}px` }}>
			{children}
		</div>
	)
}
