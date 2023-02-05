import emailjs from '@emailjs/browser'
import styled from 'styled-components'
import React, { useRef } from 'react'

function Form() {
	const form = useRef<HTMLFormElement>(null!)
	const button = useRef<HTMLButtonElement>(null!)

	const sendEmail = (e: React.FormEvent) => {
		e.preventDefault()
		button.current.disabled = true
		console.log(form.current)

		// emailjs
		// 	.sendForm(
		// 		`${import.meta.env.VITE_EMAIL_SERVICE_KEY}`,
		// 		`${import.meta.env.VITE_EMAIL_TEMPLATE_KEY}`,
		// 		form.current,
		// 		`${import.meta.env.VITE_EMAIL_PUBLIC_KEY}`
		// 	)
		// 	.then(
		// 		(result) => {
		// 			console.log(result.text)
		// 		},
		// 		(error) => {
		// 			console.log(error.text)
		// 		}
		// 	)
	}

	return (
		<StyledForm ref={form} onSubmit={sendEmail}>
			<label>Name</label>
			<input type="text" name="name" autoComplete="false" />
			<label>Email</label>
			<input type="email" name="email" autoComplete="false" />
			<label>Message</label>
			<textarea name="message" />
			<SubmitContainer>
				<button ref={button} type="submit">
					Send
				</button>
				<div>ERROR</div>
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
			outline: 1px solid var(--accent-700);
			border: 1px solid var(--primary-bg-600);
			box-shadow: rgba(42, 195, 222, 0.2) 0px 5px 25px inset,
				rgba(42, 195, 222, 0.2) 0px 0px 20px;
		}
	}

	textarea {
		height: 200px;
		resize: none;
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
	}
`

const SubmitContainer = styled.div`
	margin: 10px 0px;
	width: 100%;
	display: flex;
	gap: 20px;
	align-items: center;

	div {
		color: var(--accent-1000);
	}
`

export default Form
