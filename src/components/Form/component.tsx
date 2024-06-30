import React, { useState } from 'react'

import styles from './component.module.css'
import { LoginLogoutButton } from '../Button/component'

interface FormProps {}

export const Form: React.FC<FormProps> = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		if (!username || !password) {
			alert('Логин и пароль обязательны!')
			return
		}
	}

	return (
		<form className={styles.field} onSubmit={handleSubmit}>
			<div className={styles.header}>
				<h2 className={styles.title}>Авторизация</h2>
				<img src='../../assets/img/input/close.svg' alt='close'></img>
			</div>
			<label htmlFor='username'>
				Логин <span className={styles.asterisk}>*</span>
			</label>
			<input
				id='username'
				className={styles.input}
				placeholder='Введите логин'
				type='text'
				value={username}
				onChange={e => setUsername(e.target.value)}
				required
			/>

			<label htmlFor='password'>
				Пароль <span className={styles.asterisk}>*</span>
			</label>
			<input
				id='password'
				className={styles.input}
				placeholder='Введите пароль'
				type='password'
				value={password}
				onChange={e => setPassword(e.target.value)}
				required
			/>
			<div className={styles.controls}>
				<LoginLogoutButton buttonText='Войти' />
				<button className={styles.cancelBtn} type='submit'>
					Отменить
				</button>
			</div>
		</form>
	)
}
