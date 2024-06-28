import { Placeholder } from '../Placeholder/Placeholder'
import './filter-bar.css'

type Genre =
	| '0'
	| 'comedy'
	| 'drama'
	| 'action'
	| 'thriller'
	| 'horror'
	| 'family'
	| 'cartoon'
	| 'fantasy'
	| 'romance'
	| 'adventure'
	| 'musical'
	| 'war'

const GENRES: Record<Genre, string> = {
	'0': 'Не выбран',
	comedy: 'Комедия',
	drama: 'Драма',
	action: 'Боевик',
	thriller: 'Триллер',
	horror: 'Ужасы',
	family: 'Семейный',
	cartoon: 'Анимированный',
	fantasy: 'Фэнтези',
	romance: 'Романтика',
	adventure: 'Приключения',
	musical: 'Мюзикл',
	war: 'Военный',
}

type Year = '0' | '2009' | '2008' | '2007' | '2006' | '1990-2005' | '1950-1989'

const YEARS: Record<Year, string> = {
	'0': 'Не выбран',
	'2009': '2009',
	'2008': '2008',
	'2007': '2007',
	'2006': '2006',
	'1990-2005': '1990-2005',
	'1950-1989': '1950-1989',
}

export const FilterBar = () => {
	return (
		<div className='filter-bar'>
			<h3 className='filter-title'>Фильтр</h3>
			<div className='filters'>
				<Placeholder options={GENRES} mark='Жанр' />
				<Placeholder options={YEARS} mark='Год выпуска' />
			</div>
		</div>
	)
}
