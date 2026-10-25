import github from "devicon/icons/github/github-original.svg?raw";
import linkedin from "devicon/icons/linkedin/linkedin-plain.svg?raw";
import Footer from "../footer/Footer";
import Icon from "../tech/Icon";
import { inner } from "../tech/Icons";

const links = [
	{
		text: "GITHUB",
		href: "https://github.com/MichaelWagnr",
		color: "var(--color-accent-1000)",
		svg: inner(github),
	},
	{
		text: "LINKEDIN",
		href: "https://www.linkedin.com/in/mwagner514",
		color: "var(--color-accent-700)",
		svg: inner(linkedin),
	},
];

function Contact() {
	return (
		<section
			id="contact"
			className="w-full bg-primary-bg-700"
		>
			<div className="min-h-fit grid place-content-center max-w-page py-10 mx-auto">
				<div className="border border-accent-900 rounded-[5px] max-w-[520px] py-2.5 px-5 flex flex-col items-center gap-2.5 text-center max-[560px]:border-0 max-[560px]:pt-0">
					<h2 className="text-accent-900">Contact</h2>
					<p>Feel free to reach out to me through the following platforms:</p>
					<div className="flex flex-wrap justify-center gap-5">
						{links.map((link) => (
							<a
								key={link.text}
								href={link.href}
								target="_blank"
								aria-label={link.text}
								className="transition-transform duration-400 hover:scale-105"
							>
								<Icon color={link.color} text={link.text} svg={link.svg} />
							</a>
						))}
					</div>
				</div>
			</div>
			<Footer />
		</section>
	);
}

export default Contact;
