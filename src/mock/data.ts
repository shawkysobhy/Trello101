import { Board } from "../state/models";
export const boardsV1 :Board[]=  [
		{
			id: '0',
			name: 'Platform Launch',
			columns: [
				{
					id: '0',
					title: 'Todo',
					tasks: [
						{
							id: '0',
							title: 'Build UI for onboarding flow',
							description: '',
							status: 'Todo',
							subtasks: [
								{
									title: 'Sign up page',
									isChecked: true,
								},
								{
									title: 'Sign in page',
									isChecked: false,
								},
								{
									title: 'Welcome page',
									isChecked: false,
								},
							],
						},
						{
							id: '1',
							title: 'Build UI for search',
							description: '',
							status: 'Todo',
							subtasks: [
								{
									title: 'Search page',
									isChecked: false,
								},
							],
						},
						{
							id: '2',
							title: 'Build settings UI',
							description: '',
							status: 'Todo',
							subtasks: [
								{
									title: 'Account page',
									isChecked: false,
								},
								{
									title: 'Billing page',
									isChecked: false,
								},
							],
						},
						{
							id: '3',
							title: 'QA and test all major user journeys',
							description:
								'Once we feel version one is ready, we need to rigorously test it both internally and externally to identify any major gaps.',
							status: 'Todo',
							subtasks: [
								{
									title: 'Internal testing',
									isChecked: false,
								},
								{
									title: 'External testing',
									isChecked: false,
								},
							],
						},
					],
				},
				{
					id: '1',
					title: 'Doing',
					tasks: [
						{
							id: '4',
							title: 'Design settings and search pages',
							description: '',
							status: 'Doing',
							subtasks: [
								{
									title: 'Settings - Account page',
									isChecked: true,
								},
								{
									title: 'Settings - Billing page',
									isChecked: true,
								},
								{
									title: 'Search page',
									isChecked: false,
								},
							],
						},
						{
							id: '5',
							title: 'Add account management endpoints',
							description: '',
							status: 'Doing',
							subtasks: [
								{
									title: 'Upgrade plan',
									isChecked: true,
								},
								{
									title: 'Cancel plan',
									isChecked: true,
								},
								{
									title: 'Update payment method',
									isChecked: false,
								},
							],
						},
						{
							id: '6',
							title: 'Design onboarding flow',
							description: '',
							status: 'Doing',
							subtasks: [
								{
									title: 'Sign up page',
									isChecked: true,
								},
								{
									title: 'Sign in page',
									isChecked: false,
								},
								{
									title: 'Welcome page',
									isChecked: false,
								},
							],
						},
						{
							id: '7',
							title: 'Add search enpoints',
							description: '',
							status: 'Doing',
							subtasks: [
								{
									title: 'Add search endpoint',
									isChecked: true,
								},
								{
									title: 'Define search filters',
									isChecked: false,
								},
							],
						},
						{
							id: '8',
							title: 'Add authentication endpoints',
							description: '',
							status: 'Doing',
							subtasks: [
								{
									title: 'Define user model',
									isChecked: true,
								},
								{
									title: 'Add auth endpoints',
									isChecked: false,
								},
							],
						},
						{
							id: '9',
							title:
								'Research pricing points of various competitors and trial different business models',
							description:
								"We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
							status: 'Doing',
							subtasks: [
								{
									title: 'Research competitor pricing and business models',
									isChecked: true,
								},
								{
									title: 'Outline a business model that works for our solution',
									isChecked: false,
								},
								{
									title:
										'Talk to potential customers about our proposed solution and ask for fair price expectancy',
									isChecked: false,
								},
							],
						},
					],
				},
				{
					id: '2',
					title: 'Done',
					tasks: [
						{
							id: '10',
							title: 'Conduct 5 wireframe tests',
							description:
								'Ensure the layout continues to make sense and we have strong buy-in from potential users.',
							status: 'Done',
							subtasks: [
								{
									title: 'Complete 5 wireframe prototype tests',
									isChecked: true,
								},
							],
						},
						{
							id: '11',
							title: 'Create wireframe prototype',
							description:
								'Create a greyscale clickable wireframe prototype to test our asssumptions so far.',
							status: 'Done',
							subtasks: [
								{
									title: 'Create clickable wireframe prototype in Balsamiq',
									isChecked: true,
								},
							],
						},
						{
							id: '12',
							title: 'Review results of usability tests and iterate',
							description:
								"Keep iterating through the subtasks until we're clear on the core concepts for the app.",
							status: 'Done',
							subtasks: [
								{
									title:
										'Meet to review notes from previous tests and plan changes',
									isChecked: true,
								},
								{
									title: 'Make changes to paper prototypes',
									isChecked: true,
								},
								{
									title: 'Conduct 5 usability tests',
									isChecked: true,
								},
							],
						},
						{
							id: '13',
							title:
								'Create paper prototypes and conduct 10 usability tests with potential customers',
							description: '',
							status: 'Done',
							subtasks: [
								{
									title: 'Create paper prototypes for version one',
									isChecked: true,
								},
								{
									title: 'Complete 10 usability tests',
									isChecked: true,
								},
							],
						},
						{
							id: '14',
							title: 'Market discovery',
							description:
								'We need to define and refine our core product. Interviews will help us learn common pain points and help us define the strongest MVP.',
							status: 'Done',
							subtasks: [
								{
									title: 'Interview 10 prospective customers',
									isChecked: true,
								},
							],
						},
						{
							id: '15',
							title: 'Competitor analysis',
							description: '',
							status: 'Done',
							subtasks: [
								{
									title: 'Find direct and indirect competitors',
									isChecked: true,
								},
								{
									title: 'SWOT analysis for each competitor',
									isChecked: true,
								},
							],
						},
						{
							id: '16',
							title: 'Research the market',
							description:
								'We need to get a solid overview of the market to ensure we have up-to-date estimates of market size and demand.',
							status: 'Done',
							subtasks: [
								{
									title: 'Write up research analysis',
									isChecked: true,
								},
								{
									title: 'Calculate TAM',
									isChecked: true,
								},
							],
						},
					],
				},
			],
		},
		{
			id: '1',
			name: 'Marketing Plan',
			columns: [
				{
					id: '0',
					title: 'Todo',
					tasks: [
						{
							id: '17',
							title: 'Plan Product Hunt launch',
							description: '11',
							status: 'Todo',
							subtasks: [
								{
									title: 'Find hunter',
									isChecked: false,
								},
								{
									title: 'Gather assets',
									isChecked: false,
								},
								{
									title: 'Draft product page',
									isChecked: false,
								},
								{
									title: 'Notify customers',
									isChecked: false,
								},
								{
									title: 'Notify network',
									isChecked: false,
								},
								{
									title: 'Launch!',
									isChecked: false,
								},
							],
						},
						{
							id: '18',
							title: 'Share on Show HN',
							description: '',
							status: 'Todo',
							subtasks: [
								{
									title: 'Draft out HN post',
									isChecked: false,
								},
								{
									title: 'Get feedback and refine',
									isChecked: false,
								},
								{
									title: 'Publish post',
									isChecked: false,
								},
							],
						},
						{
							id: '19',
							title: 'Write launch article to publish on multiple channels',
							description: '',
							status: 'Todo',
							subtasks: [
								{
									title: 'Write article',
									isChecked: false,
								},
								{
									title: 'Publish on LinkedIn',
									isChecked: false,
								},
								{
									title: 'Publish on Inndie Hackers',
									isChecked: false,
								},
								{
									title: 'Publish on Medium',
									isChecked: false,
								},
							],
						},
					],
				},
				{
					id: '1',
					title: 'Doing',
					tasks: [],
				},
			],
		},
		{
			id: '2',
			name: 'Roadmap',
			columns: [
				{
					title: 'Now',
					id: '0',
					tasks: [
						{
							id: '20',
							title: 'Launch version one',
							description: '',
							status: 'Now',
							subtasks: [
								{
									title: 'Launch privately to our waitlist',
									isChecked: false,
								},
								{
									title: 'Launch publicly on PH, HN, etc.',
									isChecked: false,
								},
							],
						},
						{
							id: '21',
							title: 'Review early feedback and plan next steps for roadmap',
							description:
								"Beyond the initial launch, we're keeping the initial roadmap completely empty. This meeting will help us plan out our next steps based on actual customer feedback.",
							status: 'Now',
							subtasks: [
								{
									title: 'Interview 10 customers',
									isChecked: false,
								},
								{
									title: 'Review common customer pain points and suggestions',
									isChecked: false,
								},
								{
									title: 'Outline next steps for our roadmap',
									isChecked: false,
								},
							],
						},
					],
				},
				{
					id: '1',
					title: 'Next',
					tasks: [],
				},
				{
					id: '2',
					title: 'Later',
					tasks: [],
				},
			],
		},
	]