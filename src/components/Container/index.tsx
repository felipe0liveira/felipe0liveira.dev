import style from './index.module.scss'

export const Container = ({ children }) => {
	return <main className={style.Container}>{children}</main>
}
