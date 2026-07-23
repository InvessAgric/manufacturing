import { socialInstagramIcon, socialLinkedInIcon ,founderImage} from '../assets/assetRegistry'

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
				{ name: 'Kwame Mensah', role: 'Operations Director', bio: 'Drives efficient manufacturing and plant performance.' },
				{ name: 'Akosua Boateng', role: 'Quality Assurance Manager', bio: 'Ensures that every product meets our safety and quality standards.' },
			],
		},
		{
			group: 'Finance',
			title: 'Financial planning and compliance',
			members: [
				{ name: 'Kojo Adjei', role: 'Finance Controller', bio: 'Manages budgeting, cash flow, and fiscal accountability.' },
				{ name: 'Esi Owusu', role: 'Accounts Specialist', bio: 'Supports invoicing, payroll, and supplier payments.' },
			],
		},
		{
			group: 'Warehouse',
			title: 'Storage and distribution',
			members: [
				{ name: 'Nana Yeboah', role: 'Warehouse Supervisor', bio: 'Oversees inventory, safety, and warehouse logistics.' },
				{ name: 'Ama Serwaa', role: 'Inventory Coordinator', bio: 'Keeps stock levels accurate and ready for dispatch.' },
			],
		},
		{
			group: 'Sales',
			title: 'Customer engagement and growth',
			members: [
				{ name: 'Yaw Owusu', role: 'Sales Manager', bio: 'Leads customer relationships and market expansion.' },
				{ name: 'Adwoa Frimpong', role: 'Customer Success Lead', bio: 'Ensures clients receive the right products and support.' },
			],
		},
	]

	return (
		<section className="bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.12),transparent_35%),linear-gradient(180deg,#eef6f0_0%,#f8faf8_100%)] px-6 py-14 text-slate-900">
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
				<section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] items-center rounded-4xl bg-linear-to-br from-emerald-100/80 via-white to-slate-100 p-8 shadow-lg ring-1 ring-emerald-200">
					<div className="space-y-4">
						<p className="text-sm uppercase tracking-[0.3em] text-emerald-900">Founder</p>
						<h2 className="text-3xl font-semibold text-slate-900">{founder.name}</h2>
						<p className="text-base leading-7 text-slate-600">{founder.title}</p>
					<p className="mt-4 text-slate-700 leading-7">{founder.bio}</p>
					<p className="mt-4 text-slate-700 leading-7">{founder.extra}</p>
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

					<div className="overflow-hidden rounded-[1.75rem] bg-slate-100">
						<img src={founderImage} alt="Founder Francis Dei" className="h-full w-full object-cover" loading="lazy" />
					</div>
				</section>

				{teams.map((team) => (
					<section key={team.group} className="rounded-4xl bg-linear-to-b from-emerald-50/80 to-white p-8 shadow-sm ring-1 ring-emerald-200">
						<div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
							<div>
								<p className="text-sm uppercase tracking-[0.3em] text-emerald-700">{team.group}</p>
								<h2 className="text-3xl font-semibold text-slate-900">{team.title}</h2>
							</div>
							<p className="max-w-xl text-slate-600">{team.group === 'Management' ? 'Guiding the business with strategic planning and strong operational oversight.' : team.group === 'Finance' ? 'Tracking capital, ensuring compliance, and keeping the business on budget.' : team.group === 'Warehouse' ? 'Safely storing and delivering products from our manufacturing facility.' : 'Supporting customers and growing relationships in the market.'}</p>
						</div>

						<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
							{team.members.map((member) => (
								<article key={member.name} className="rounded-3xl border border-emerald-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
									<div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-lg font-semibold text-emerald-800">
										{member.name.split(' ').map((part) => part[0]).slice(0, 2).join('')}
									</div>
									<h3 className="text-lg font-semibold text-slate-900">{member.name}</h3>
									<p className="mt-1 text-sm font-medium text-emerald-700">{member.role}</p>
									<p className="mt-3 text-sm leading-6 text-slate-600">{member.bio}</p>
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
