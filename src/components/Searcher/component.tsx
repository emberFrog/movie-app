import styles from './component.module.css'

export const Searcher = () => {
	return (
		<div className={styles.searcher}>
			<img className={styles.icon} src='../../assets/img/input/Icon.svg' />
			<input
				className={styles.searcherInput}
				type='search'
				placeholder='Название фильма'
			></input>
		</div>
	)
}
