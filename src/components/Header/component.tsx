import { useState } from 'react'
import { useUserContext } from '../../contexts/user'
import { LoginLogoutButton } from '../Button/component'
import { Link } from 'react-router-dom'
import { Modal } from '../Modal/component'
import { Form } from '../Form/component'

import styles from './component.module.css'

export const Header: React.FC = () => {
	const { user, login, logout } = useUserContext()
	const [isVisible, setIsVisible] = useState(false)

	return (
		<header className={styles.header}>
			<Link to='/'>
				<h1 className={styles.title}>Фильмопоиск</h1>
			</Link>
			<div>
				<LoginLogoutButton
					buttonText={user ? 'Выход' : 'Войти'}
					onClick={user ? logout : () => setIsVisible(!isVisible)}
				/>
				{isVisible && (
					<Modal>
						<Form />
					</Modal>
				)}
			</div>
		</header>
	)
}
