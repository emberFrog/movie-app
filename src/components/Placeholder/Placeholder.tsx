import { useState } from 'react'
import './placeholder.css'

export const Placeholder = ({
	options,
	mark,
}: {
	options: Record<string, string>
	mark: string
}) => {
	const [isListVisible, setIsListVisible] = useState(false)

	return (
		<>
			<p className='filter-mark'>{mark}</p>
			<div
				className='filter-field'
				onClick={() => setIsListVisible(!isListVisible)}
				style={isListVisible ? { border: '1px solid #FF5500' } : {}}
			>
				{`Выберите ${mark.toLowerCase().split(' ')[0]}`}
				{isListVisible ? (
					<img src='../../assets/Filter/arrow-square-up.svg' alt='arrow up' />
				) : (
					<img
						src='../../assets/Filter/arrow-square-down.svg'
						alt='arrow down'
					/>
				)}
			</div>
			{isListVisible && (
				<div className='placeholder-list'>
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
