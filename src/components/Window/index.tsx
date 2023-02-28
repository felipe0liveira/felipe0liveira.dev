import { useState } from 'react'

export enum WindowState {
	MINIMIZED = 'minimized',
	OPEN = 'open',
}

interface WindowProps {
	children: JSX.Element
	title: string
	initialWindowState?: WindowState
}

export const Window = ({
	children,
	title,
	initialWindowState,
}: WindowProps) => {
	const [windowState, setWindowState] = useState<WindowState>(
		initialWindowState || WindowState.OPEN
	)

	const close = () =>
		alert('Why do you want to close this window? For sure no!')

	const minimize = () => {
		if (windowState === WindowState.MINIMIZED) {
			alert(
				"It's already minimized! Duuh!\nIf you want to open the window again tap on the maximize button!"
			)
		}

		if (windowState === WindowState.OPEN) {
			setWindowState(WindowState.MINIMIZED)
		}
	}

	const maximize = () => {
		if (windowState === WindowState.OPEN) {
			alert("It's already maximized! Duuh!")
		}

		if (windowState === WindowState.MINIMIZED) {
			setWindowState(WindowState.OPEN)
		}
	}
	return (
		<div className='window'>
			<div
				className={`title-bar ${
					windowState === WindowState.MINIMIZED && 'inactive'
				}`}
			>
				<h1 className='title-bar-text'>{title}</h1>
				<div className='title-bar-controls'>
					<button aria-label='Minimize' onClick={minimize}></button>
					<button aria-label='Maximize' onClick={maximize}></button>
					<button aria-label='Close' onClick={close}></button>
				</div>
			</div>
			{windowState === WindowState.OPEN && (
				<div className='window-body'>{children}</div>
			)}
		</div>
	)
}
