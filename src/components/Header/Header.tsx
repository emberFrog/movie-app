import { LogButton } from '../LogButton/LogButton'
import './header.css'

export const Header: React.FC = () => {
	return (
		<header>
			<h1 className='app-title'>Фильмопоиск</h1>
			<div>
				<LogButton />
			</div>
		</header>
	)
}
