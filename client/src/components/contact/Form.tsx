import emailjs from '@emailjs/browser'
import React, { useRef, useState } from 'react'

type Status = 'idle' | 'sending' | 'sent' | 'failed'

const field =
	'bg-inherit border border-accent-900 rounded-[2.5px] p-2.5 w-full text-primary-fg-100 text-p focus:outline-none focus:border-accent-700 focus:shadow-[inset_0_5px_25px_rgba(42,195,222,0.2),0_0_20px_rgba(42,195,222,0.2)]'

const button = {
	idle: 'rounded-[5px] w-[100px] px-5 py-2.5 text-accent-900 border-accent-900 hover:text-accent-700 hover:border-accent-700 hover:cursor-pointer hover:scale-105',
	sending: 'rounded-[5px] w-[100px] px-5 py-2.5 text-accent-900 border-accent-900 opacity-70',
	sent: 'w-fit px-2.5 py-[5px] rounded-[50%] text-accent-400 border-accent-400 pointer-events-none',
	failed: 'hidden',
}

const buttonText = { idle: 'Send', sending: 'Sending', sent: '✓', failed: '' }

function Form() {
	const form = useRef<HTMLFormElement>(null!)

	const [message, setMessage] = useState<JSX.Element | null>(null)
	const [status, setStatus] = useState<Status>('idle')

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
				<span className="text-accent-1000">Please fill out all fields.</span>
			)

		if (!/^(.*@.*\.\w{2,3})$/.test(formInput.email))
			return setMessage(
				<span className="text-accent-1000">Please enter valid email.</span>
			)

		setMessage(null)
		setStatus('sending')

		emailjs
			.sendForm(
				`${import.meta.env.VITE_EMAIL_SERVICE_KEY}`,
				`${import.meta.env.VITE_EMAIL_TEMPLATE_KEY}`,
				form.current,
				`${import.meta.env.VITE_EMAIL_PUBLIC_KEY}`
			)
			.then(
				() => {
					setStatus('sent')
					setMessage(
						<span className="text-accent-400">
							Thank you! I'll get back to you soon.
						</span>
					)
				},
				() => {
					setStatus('failed')
					setMessage(
						<span className="text-accent-1000">
							Something went wrong, please email me directly{' '}
							<a className="underline" href="mailto:michaelwagner780@gmail.com">
								here
							</a>
						</span>
					)
				}
			)
	}

	return (
		<form ref={form} onSubmit={sendEmail} className="flex flex-col w-full gap-[5px] [&>label]:text-accent-900">
			<label>Name</label>
			<input
				type="text"
				name="name"
				autoComplete="false"
				className={field}
				onChange={(e) => handleInput(e)}
				value={formInput.name}
			/>
			<label>Email</label>
			<input
				type="email"
				name="email"
				autoComplete="false"
				className={field}
				onChange={(e) => handleInput(e)}
				value={formInput.email}
			/>
			<label>Message</label>
			<textarea
				className={`${field} h-[200px] resize-none max-phone:h-[130px]`}
				name="message"
				onChange={(e) => handleInput(e)}
				value={formInput.message}
			/>
			<div className="my-2.5 h-10 w-full flex gap-5 items-center">
				<button
					type="submit"
					disabled={status !== 'idle'}
					className={`block self-center bg-inherit border text-p transition-all duration-800 ${button[status]}`}>
					{buttonText[status]}
				</button>
				<div className="text-primary-fg-100">{message}</div>
			</div>
		</form>
	)
}

export default Form
