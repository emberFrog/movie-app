import React from 'react'
import styles from './component.module.css'

interface LoginLogoutButtonProps {
	buttonText: string
	onClick: () => void
}

export const LoginLogoutButton: React.FC<LoginLogoutButtonProps> = ({
	buttonText,
	onClick,
}) => {
	return (
		<button className={styles.button} onClick={onClick}>
			{buttonText}
		</button>
	)
}
