import { useState } from 'react'
import arrowDownSvg from '../../assets/img/Filter/arrow-square-down.svg'
import arrowUpSvg from '../../assets/img/Filter/arrow-square-up.svg'

import styles from './component.module.css'

interface PlaceholderProps {
	options: Record<string, string>
	mark: string
	setFilter: React.Dispatch<React.SetStateAction<string>>
}

export const Placeholder = ({ options, mark, setFilter }: PlaceholderProps) => {
	const optionsValues = Object.values(options)
	const [isListVisible, setIsListVisible] = useState(false)

	// console.log(filters)
	// const [option, setOption] = useState('0')

	// const filters = (key: string) => {
	// 	// setOption(key)
	// 	console.log(setOption(key))
	// }

	return (
		<>
			<p>{mark}</p>
			<div
				className={styles.field}
				onClick={() => setIsListVisible(!isListVisible)}
				style={isListVisible ? { border: '1px solid #FF5500' } : {}}
			>
				{`Выберите ${mark.toLowerCase().split(' ')[0]}`}
				{isListVisible ? (
					<img src={arrowUpSvg} alt='arrow up' />
				) : (
					<img src={arrowDownSvg} alt='arrow down' />
				)}
			</div>
			{isListVisible && (
				<div className={styles.dropdown}>
					<ul>
						{Object.keys(options).map(key => (
							<li key={key}>{options[key as keyof typeof options]}</li>
						))}
					</ul>
				</div>
			)}
		</>
	)
}
