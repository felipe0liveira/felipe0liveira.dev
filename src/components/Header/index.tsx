import style from './index.module.scss'

export const Header = ({ children }) => {
	return <header className={style.Header}>{children}</header>
}
