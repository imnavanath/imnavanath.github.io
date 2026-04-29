const config = {
	github: {
		username: 'imnavanath',
		sortBy: 'stars',
		limit: 20,
		exclude: {
			projects: ['astra-slider', 'astra-filters', 'imnavanath', 'twentytwentyone'],
		},
		personal: {
			projects: ['global-block-settings', 'network-wide-custom-code', 'wp-block-essentials', 'easy-theme-plugin-switcher', 'ast-wp-cli', 'uae-posts-custom-skins', 'bsf-announcements', 'wp-posts-tailwind-integration', 'bsf-docs-suggester', 'developer-tool', 'additional-script-wordpress-plugin', 'person-cpt-wordpress-plugin'],
		},
		misc: {
			projects: ['imnavanath.github.io', 'extended-woocommerce', 'user-login-registration-php-test', 'dental-template'],
		},
		professional: [
			{
				name: 'astra',
				description: 'A very lightweight and beautiful theme made to work with Page Builders.',
				stargazers_count: '337',
				forks_count: '126',
				language: 'PHP',
				link: 'https://github.com/brainstormforce/astra'
			},
			{
				name: 'spectra',
				description: 'Free WordPress page builder with 35+ blocks, 250+ templates, and a Gutenberg-native workflow powering 1M+ sites.',
				isPrivate: true,
				link: 'https://wpspectra.com/'
			},
			{
				name: 'surerank',
				description: 'A modern, lightweight WordPress SEO plugin focused on simplicity, schema, and Core Web Vitals.',
				isPrivate: true,
				link: 'https://surerank.com/'
			},
			{
				name: 'surecookie',
				description: 'GDPR/CCPA-ready cookie consent and compliance plugin for WordPress.',
				isPrivate: true,
				link: 'https://surecookie.com/'
			},
			{
				name: 'suredash',
				description: 'Centralized React-driven dashboard to manage and orchestrate the SureProducts ecosystem.',
				isPrivate: true,
				link: 'https://suredash.com/'
			},
			{
				name: 'suremembers',
				description: 'Powerful WordPress membership plugin for content gating, drip access, and member management.',
				isPrivate: true,
				link: 'https://suremembers.com/'
			}
		]
	},
	social: {
		linkedin: 'navanath-bhosale',
		resume: 'https://drive.google.com/file/d/1rQ5qjxKvWOFoqYbUPZ4G6VYgP1TxCp3g/view',
		paypal: 'NavanathBhosale',
		facebook: 'navnath.bhosale.3',
		instagram: 'i_am_navanath',
		wordpress: 'navanathbhosale',
		dev: 'imnavanath',
		website: 'https://imnavanath.github.io/',
		phone: '+918177877802',
		email: 'navanath.bhosale95@gmail.com',
	},
	skills: {
		HTML: 'DiHtml5',
		CSS: 'DiCss3',
		Sass: 'SiSass',
		JavaScript: 'DiJavascript',
		TypeScript: 'SiTypescript',
		jQuery: 'DiJqueryLogo',
		React: 'DiReact',
		'Node.js': 'SiNodedotjs',
		PHP: 'DiPhp',
		MySQL: 'DiMysql',
		Git: 'DiGit',
		WordPress: 'DiWordpress',
		Tailwind: 'DiGhostSmall',
		Bootstrap: 'DiBootstrap',
	},
	tools: [
		'Claude Code',
		'Cursor',
		'Visual Code Studio',
		'Jira',
		'Git',
		'Git Bash',
		'Laragon',
		'Local by Flywheel',
		'Blackfire',
		'WordPress',
		'Grammarly',
		'Slack',
		'Google Meet',
		'Gmail',
		'Zoom',
		'React Developer Tools Extension',
		'JSON Formatter Extension',
	],
	experiences: [
		{
			company: 'Brainstorm Force',
			position: 'Lead Developer',
			from: 'February 2018',
			to: 'Present',
			link: 'https://brainstormforce.com/'
		}
	],
    education: [
		{
			institution: 'Envision Institute, Nigadi',
			degree: 'Semantic Web Design-Development',
			from: '2017',
			to: '2018',
		},
		{
			institution: 'Pimpri Chinchwad College of Engineering',
			degree: 'Bachelor of Computer Science (BE)',
			from: '2013',
			to: '2017',
		},
		{
			institution: 'K.N.M.G Jr College, Chinchwad',
			degree: 'Higher Secondary Certificate (HSC)',
			from: '2010',
			to: '2012',
		},
		{
			institution: 'Smt. S. D. Gange Prashala',
			degree: 'Secondary School Certificate (SSC)',
			from: '2000',
			to: '2010',
		},
	],
	googleAnalytics: {
		// GA3 tracking id UA-XXXXXXXXX-X | G-XXXXXXXXXX
		id: 'GTM-597LZCD',
	}
};

export default config;
