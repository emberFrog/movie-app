import React from 'react'
import styles from './component.module.css'
import { createPortal } from 'react-dom'

export const Modal = ({ children }) => {
	return createPortal(
		<>
			<div className={styles.modal}>{children}</div>
		</>,
		document.body
	)
}
