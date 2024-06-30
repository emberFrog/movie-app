import { Placeholder } from '../Placeholder/component'
import { GENRES, YEARS } from '../../constants/constants'
import styles from './component.module.css'

interface FilterBarProps {
	title: string
	setYear: React.Dispatch<React.SetStateAction<string>>
	setGenre: React.Dispatch<React.SetStateAction<string>>
}
export const FilterBlock = ({ title, setYear, setGenre }: FilterBarProps) => {
	return (
		<div className={styles.block}>
			<h3 className={styles.title}>{title}</h3>
			<div>
				<Placeholder options={GENRES} setFilter={setGenre} mark='Жанр' />
				<Placeholder options={YEARS} setFilter={setYear} mark='Год выпуска' />
			</div>
		</div>
	)
}
