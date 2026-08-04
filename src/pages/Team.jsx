import { socialInstagramIcon, socialLinkedInIcon ,founderImage} from '../assets/assetRegistry'
import enosImage from '../assets/images/our-team/enos.webp'
import evansImage from '../assets/images/our-team/Evans-Poku-Boateng.webp'
import rejoiceImage from '../assets/images/our-team/Rejoice.webp'
import rolfImage from '../assets/images/our-team/Rolf.webp'

// Team page: highlights the founder and the broader leadership and support teams.
function Team() {
	const founder = {
		name: 'Francis Dei',
		title: 'Founder and CEO of INVESS Ltd',
		bio: 'Francis Dei is the founder and CEO of Invess Agriculture Limited. He holds a Master’s degree in Agronomy and a Bachelor’s degree in Agronomy from the University of Cape Coast. As the CEO, Francis Dei is responsible for making major corporate decisions, managing overall operations, and setting the company’s strategic direction.',
		extra: 'With over 14 years of experience in the field of agronomy and the agro-business industry in Ghana and Africa, Francis is widely recognized for his expertise. He has provided consulting services to renowned multinational companies, including Dupont Pioneer, Unifert, Acron, and Glofert Limited, showcasing his in-depth knowledge and valuable contributions to the sector. His academic background and extensive practical experience make him a valuable asset in driving IAL’s agricultural initiatives and ensuring the delivery of high-quality products and services.',
		socials: [
			{ name: 'Facebook', href: 'https://www.facebook.com/invessagric/', icon: 'facebook' },
			{ name: 'LinkedIn', href: 'https://gh.linkedin.com/company/invess-agriculture-ltd', icon: socialLinkedInIcon },
			{ name: 'Instagram', href: 'https://www.instagram.com/invess_agric/', icon: socialInstagramIcon },
		],
	}

	const teams = [
		{
			group: 'Management',
			title: 'Leadership and oversight',
			members: [
				{
					name: 'Rolf Schadendorf',
					role: 'CFO and Head of Business Development',
					bio: 'Leads financial strategy, partnerships, and long-term commercial growth initiatives.',
					image: rolfImage,
					socials: [
						{ name: 'Facebook', href: '' },
					],
				},
				{
					name: 'Rejoice Yawa Quao',
					role: 'General Manager',
					bio: 'Oversees business operations and coordinates execution across key departments.',
					image: rejoiceImage,
					socials: [
						{ name: 'LinkedIn', href: '' },
					],
				},
				{
					name: 'Evans Poku Boateng',
					role: 'Commercial Manager',
					bio: 'Drives market expansion, customer relationships, and go-to-market execution.',
					image: evansImage,
				},
			],
		},
		{
			group: 'Finance',
			title: 'Financial planning and operations',
			members: [
				{ name: 'Fred Amegavor', role: 'Head of Finance', bio: 'Leads financial planning, controls, and performance reporting.' },
				{ name: 'Nadia Ahiakpor', role: 'Finance', bio: 'Supports finance operations, reporting workflows, and day-to-day financial administration.' },
				{
					name: 'Javier Rubio',
					role: 'Project Manager',
					bio: 'Coordinates project delivery, timelines, and cross-functional execution.',
					socials: [
						{ name: 'LinkedIn', href: 'https://www.linkedin.com/in/javier-rubio-56110055?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAuVXxkBqyJtK1k2MCkCVixdlWFUI4fLEJQ&lipi=urn%3Ali%3Apage%3Ad_flagship3_company%3BsIdMABuCSB%2B3uwxy6hsKHw%3D%3D' },
					],
				},
			],
		},
		{
			group: 'Compliance',
			title: 'Governance and regulatory adherence',
			members: [
				{ name: 'Daniel Amankwah', role: 'Compliance', bio: 'Supports compliance monitoring and helps maintain adherence to internal policies and regulatory requirements.' },
				{
					name: 'Enos Nii Odai Botchway',
					role: 'Compliance Support',
					bio: 'Supports compliance workflows, controls documentation, and reporting quality.',
					image: enosImage,
					socials: [
						{ name: 'LinkedIn', href: 'https://www.linkedin.com/in/enos-nii-odai-botchway-8b7123143/' },
					],
				},
			],
		},
		{
			group: 'Warehouse',
			title: 'Storage and distribution',
			members: [
				{ name: 'Bright Dzorkpey', role: 'Warehouse Manager', bio: 'Leads warehouse operations, inventory flow, and safe dispatch coordination.' },
				{ name: 'Joshua Appiah', role: 'Warehouse Team', bio: 'Supports day-to-day warehouse operations, inventory handling, and dispatch readiness.' },
				{ name: 'Nana Yeboah', role: 'Warehouse Supervisor', bio: 'Oversees inventory, safety, and warehouse logistics.' },
			],
		},
		{
			group: 'Sales',
			title: 'Customer engagement and growth',
			members: [
				{ name: 'Prince Baafi Yeboah', role: 'Head of Sales', bio: 'Leads sales strategy, customer acquisition, and channel performance across markets.' },
				{ name: 'Selase Gborson', role: 'Sales', bio: 'Supports customer engagement, account follow-up, and sales coordination across target markets.' },
			],
		},
	]

	return (
		<section className="bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.12),transparent_35%),linear-gradient(180deg,#eef6f0_0%,#f8faf8_100%)] px-6 py-14  text-slate-900 pt-20">
			<div className="mx-auto max-w-6xl space-y-14">
				<header className="space-y-6 text-center rounded-4xl bg-white/90 p-8 shadow-sm ring-1 ring-emerald-100">
					<p className="text-xs uppercase tracking-[0.45em] text-emerald-800">Meet our team</p>
					<h1 className="text-4xl font-semibold sm:text-5xl text-slate-900">Meet the people growing Ghana’s agricultural progress.</h1>
					<p className="mx-auto max-w-2xl text-base leading-8 text-slate-700">
						Our team is the driving force behind Invess Agric’s success. Comprised of skilled professionals in agronomy, manufacturing, warehouse operations, finance, and sales, we deliver reliable blended fertilizers, seeds, and farm inputs while supporting growers across Ghana.
					</p>
					<p className="mx-auto max-w-2xl text-base leading-8 text-slate-700">
						United by a shared passion for agriculture, we work together every day to enhance crop productivity, strengthen farm supply chains, and bring practical solutions to farmers and communities.
					</p>
				</header>
				<section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] items-start rounded-4xl bg-linear-to-br from-emerald-100/80 via-white to-slate-100 p-6 lg:p-7 shadow-lg ring-1 ring-emerald-200">
					<div className="space-y-4">
						<p className="text-sm uppercase tracking-[0.3em] text-emerald-900">Founder</p>
						<h2 className="text-2xl lg:text-3xl font-semibold text-slate-900">{founder.name}</h2>
						<p className="text-sm lg:text-base leading-6 text-slate-600">{founder.title}</p>
					<p className="mt-3 text-sm lg:text-base text-slate-700 leading-6">{founder.bio}</p>
					<p className="mt-3 text-sm text-slate-600 leading-6 hidden xl:block">{founder.extra}</p>
					<div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
						<div className="rounded-3xl bg-emerald-900/10 px-4 py-3 text-sm font-semibold text-emerald-900">Agronomy-led leadership</div>
						<div className="rounded-3xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700">Trusted farm solutions</div>
					</div>
					<div className="mt-6 flex flex-wrap gap-3">
						<a href={founder.socials[0].href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm text-slate-700 transition hover:border-emerald-400 hover:bg-emerald-50">
							<svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-emerald-700" aria-hidden="true">
								<path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.2v-2.9h2.2V9.3c0-2.2 1.3-3.5 3.3-3.5.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2v1.5h2.3l-.4 2.9h-1.9v7A10 10 0 0 0 22 12Z" />
							</svg>
							<span>Facebook</span>
						</a>
						<a href={founder.socials[1].href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm text-slate-700 transition hover:border-emerald-400 hover:bg-emerald-50">
							<img src={founder.socials[1].icon} alt="LinkedIn" className="h-4 w-4" loading="lazy" />
							<span>LinkedIn</span>
						</a>
						<a href={founder.socials[2].href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm text-slate-700 transition hover:border-emerald-400 hover:bg-emerald-50">
							<img src={founder.socials[2].icon} alt="Instagram" className="h-4 w-4" loading="lazy" />
							<span>Instagram</span>
						</a>
					</div>
					</div>

					<div className="overflow-hidden rounded-[1.75rem] bg-slate-100 h-56 sm:h-72 lg:h-full max-h-[430px] lg:max-h-[460px]">
						<img src={founderImage} alt="Founder Francis Dei" className="h-full w-full object-cover object-top" loading="lazy" />
					</div>
				</section>

				{teams.map((team) => (
					<section key={team.group} className="rounded-4xl bg-linear-to-b from-emerald-50/80 to-white p-8 shadow-sm ring-1 ring-emerald-200">
						<div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
							<div>
								<p className="text-sm uppercase tracking-[0.3em] text-emerald-700">{team.group}</p>
								<h2 className="text-3xl font-semibold text-slate-900">{team.title}</h2>
							</div>
							<p className="max-w-xl text-slate-600">{team.group === 'Management' ? 'Guiding the business with strategic planning and strong operational oversight.' : team.group === 'Finance' ? 'Tracking capital performance, reporting, and budget discipline.' : team.group === 'Compliance' ? 'Maintaining governance standards and regulatory adherence across operations.' : team.group === 'Warehouse' ? 'Safely storing and delivering products from our manufacturing facility.' : 'Supporting customers and growing relationships in the market.'}</p>
						</div>

						<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
							{team.members.map((member) => (
								<article key={member.name} className="rounded-3xl border border-emerald-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
									{member.image ? (
										<img src={member.image} alt={member.name} className="mb-4 h-16 w-16 rounded-full object-cover" loading="lazy" />
									) : (
										<div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-lg font-semibold text-emerald-800">
											{member.name.split(' ').map((part) => part[0]).slice(0, 2).join('')}
										</div>
									)}
									<h3 className="text-lg font-semibold text-slate-900">{member.name}</h3>
									<p className="mt-1 text-sm font-medium text-emerald-700">{member.role}</p>
									<p className="mt-3 text-sm leading-6 text-slate-600">{member.bio}</p>
									{member.socials?.length ? (
										<div className="mt-4 flex flex-wrap gap-2">
											{member.socials.map((social) => (
												social.href ? (
														<a key={`${member.name}-${social.name}`} href={social.href} target="_blank" rel="noopener noreferrer" className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700 hover:border-emerald-400 hover:bg-emerald-50">
															{social.name}
														</a>
													) : (
														<span key={`${member.name}-${social.name}`} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-500">
															{social.name}
														</span>
													)
											))}
										</div>
									) : null}
								</article>
							))}
						</div>
					</section>
				))}
			</div>
		</section>
	)
}

export default Team
