import styles from './component.module.css'

export const Searcher = () => {
	return (
		<div className={styles.searcher}>
			<input type='search' placeholder='Название фильма'></input>
		</div>
	)
}
