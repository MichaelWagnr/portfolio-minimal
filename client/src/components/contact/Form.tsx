import emailjs from '@emailjs/browser'
import styled from 'styled-components'
import React, { useRef, useState } from 'react'

function Form() {
	const form = useRef<HTMLFormElement>(null!)
	const button = useRef<HTMLButtonElement>(null!)

	const [message, setMessage] = useState<JSX.Element | null>(null)

	const [formInput, setFormInput] = useState({
		name: '',
		email: '',
		message: '',
	})

	const handleInput = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target
		setFormInput({ ...formInput, [name]: value })
	}

	const sendEmail = (e: React.FormEvent) => {
		e.preventDefault()

		if (!formInput.name || !formInput.email || !formInput.message)
			return setMessage(
				<span className="error">Please fill out all fields.</span>
			)

		if (!/^(.*@.*\.\w{2,3})$/.test(formInput.email))
			return setMessage(
				<span className="error">Please enter valid email.</span>
			)

		//Sending status
		setMessage(null)
		button.current.disabled = true
		button.current.innerText = 'Sending'

		try {
			emailjs
				.sendForm(
					`${import.meta.env.VITE_EMAIL_SERVICE_KEY}`,
					`${import.meta.env.VITE_EMAIL_TEMPLATE_KEY}`,
					form.current,
					`${import.meta.env.VITE_EMAIL_PUBLIC_KEY}`
				)
				.then(
					(result) => {
						button.current.innerText = '✓'
						button.current.className = 'success'
						return setMessage(
							<span className="success">
								Thank you! I'll get back to you soon.
							</span>
						)
						// console.log(result.text)
					},
					(error) => {
						throw new Error(error)
						// console.log(error.text)
					}
				)
		} catch {
			button.current.disabled = true
			button.current.className = 'error'
			return setMessage(
				<span className="error">
					Something went wrong, please email me directly{' '}
					<a href="mailto:michaelwagner780@gmail.com">here</a>
				</span>
			)
		}
	}

	return (
		<StyledForm ref={form} onSubmit={sendEmail}>
			<label>Name</label>
			<input
				type="text"
				name="name"
				autoComplete="false"
				onChange={(e) => handleInput(e)}
				value={formInput.name}
			/>
			<label>Email</label>
			<input
				type="email"
				name="email"
				autoComplete="false"
				onChange={(e) => handleInput(e)}
				value={formInput.email}
			/>
			<label>Message</label>
			<textarea
				name="message"
				onChange={(e) => handleInput(e)}
				value={formInput.message}
			/>
			<SubmitContainer>
				<button ref={button} type="submit">
					Send
				</button>
				<div>{message}</div>
			</SubmitContainer>
		</StyledForm>
	)
}

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 5px;

	label {
		color: var(--accent-900);
	}

	input,
	textarea {
		background: inherit;
		border: 1px solid var(--accent-900);
		border-radius: 2.5px;
		padding: 10px;
		width: 100%;
		color: var(--primary-fg-100);
		font-family: inherit;
		font-size: var(--p);

		&:focus {
			outline: none;
			border: 1px solid var(--accent-700);
			box-shadow: rgba(42, 195, 222, 0.2) 0px 5px 25px inset,
				rgba(42, 195, 222, 0.2) 0px 0px 20px;
		}
	}

	textarea {
		height: 200px;
		resize: none;

		@media (max-width: 495px) {
			height: 130px;
		}
	}

	button {
		color: var(--accent-700);
		border: 1px solid var(--accent-700);
		background: inherit;
		display: block;
		width: 100px;
		font-size: var(--p);
		border-radius: 5px;
		align-self: center;
		padding: 10px 20px;
		text-decoration: none;
		transition: all 0.8s;

		&:hover {
			color: var(--accent-700);
			border: 1px solid var(--accent-700);
			cursor: pointer;
			transform: scale(1.05);
		}

		&:disabled {
			color: var(--accent-900);
			border: 1px solid var(--accent-900);
			opacity: 0.7;
		}

		&.success {
			color: var(--accent-400);
			border: 1px solid var(--accent-400);
			border-radius: 50%;
			padding: 5px 10px;
			width: fit-content;
			opacity: 1;
			pointer-events: none;
		}

		&.error {
			display: none;
		}
	}
`

const SubmitContainer = styled.div`
	margin: 10px 0px;
	height: 40px;
	width: 100%;
	display: flex;
	gap: 20px;
	align-items: center;

	div {
		color: var(--primary-fg-100);

		.error {
			color: var(--accent-1000);
		}

		.success {
			color: var(--accent-400);
		}

		a {
			color: var(--primary-fg-100);
		}
	}
`

export default Form
