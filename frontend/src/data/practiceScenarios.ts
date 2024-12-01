import { ScenarioType } from '../types/practice';

export const practiceScenarios: ScenarioType[] = [
  // Home Sellers Category
  {
    id: 'SELLER-001',
    category: 'Home Sellers',
    name: 'Hesitant Homeowner',
    title: 'Market Timing Discussion',
    description: 'A homeowner is uncertain about selling due to market conditions.',
    sampleDialogue: 'Why should I sell now when prices might go higher?',
    welcomeMessage: 'Welcome to the hesitant seller scenario. Press spacebar to begin.',
    difficulty: ['beginner', 'advanced'],
    objectives: [
      'Address market timing concerns',
      'Present current market analysis',
      'Build confidence in decision-making'
    ],
    skills: ['Market Analysis', 'Confidence Building', 'Objection Handling']
  },
  {
    id: 'SELLER-002',
    category: 'Home Sellers',
    name: 'Expired Listing',
    title: 'Expired Listing Conversion',
    description: 'The homeowner is frustrated because their property didn\'t sell after being on the market for months.',
    sampleDialogue: 'I\'ve already tried selling with an agent, and it didn\'t work.',
    welcomeMessage: 'Welcome to the expired listing scenario. Press spacebar to begin.',
    difficulty: ['advanced'],
    objectives: [
      'Analyze previous listing issues',
      'Present new marketing strategy',
      'Differentiate your approach'
    ],
    skills: ['Listing Analysis', 'Marketing Strategy', 'Differentiation']
  },
  {
    id: 'SELLER-003',
    category: 'Home Sellers',
    name: 'FSBO Value Proposition',
    title: 'FSBO Conversion',
    description: 'A seller is attempting to sell their home on their own to save money on commission.',
    sampleDialogue: 'Why would I pay you when I can sell it myself?',
    welcomeMessage: 'Welcome to the FSBO conversion scenario. Press spacebar to begin.',
    difficulty: ['advanced'],
    objectives: [
      'Demonstrate agent value',
      'Present market statistics',
      'Handle commission objections'
    ],
    skills: ['Value Proposition', 'Statistical Analysis', 'Commission Defense']
  },
  {
    id: 'SELLER-004',
    category: 'Home Sellers',
    name: 'Downsizing Seller',
    title: 'Retiree Transition',
    description: 'A retiree is looking to sell their family home to move into a smaller property.',
    sampleDialogue: 'I need to sell, but I\'m worried about finding the right place to move to.',
    welcomeMessage: 'Welcome to the downsizing seller scenario. Press spacebar to begin.',
    difficulty: ['beginner'],
    objectives: [
      'Address transition concerns',
      'Coordinate selling and buying timeline',
      'Present downsizing options'
    ],
    skills: ['Transition Planning', 'Timeline Management', 'Property Matching']
  },
  {
    id: 'SELLER-005',
    category: 'Home Sellers',
    name: 'Reluctant Inheritor',
    title: 'Inherited Property Decision',
    description: 'Someone who has inherited a property they aren\'t sure what to do with.',
    sampleDialogue: 'I don\'t even know where to start—should I sell or rent this property?',
    welcomeMessage: 'Welcome to the inherited property scenario. Press spacebar to begin.',
    difficulty: ['beginner', 'advanced'],
    objectives: [
      'Present property options',
      'Analyze rental vs. sale potential',
      'Guide decision-making process'
    ],
    skills: ['Investment Analysis', 'Property Evaluation', 'Consultation']
  },

  // Home Buyers Category
  {
    id: 'BUYER-001',
    category: 'Home Buyers',
    name: 'First-Time Buyer',
    title: 'First-Time Home Purchase',
    description: 'A buyer is overwhelmed by the process and unsure of what they can afford.',
    sampleDialogue: 'This all seems so complicated—I don\'t even know where to start.',
    welcomeMessage: 'Welcome to the first-time buyer scenario. Press spacebar to begin.',
    difficulty: ['beginner'],
    objectives: [
      'Explain buying process',
      'Discuss financing options',
      'Build buyer confidence'
    ],
    skills: ['Process Education', 'Financial Guidance', 'Buyer Counseling']
  },
  {
    id: 'BUYER-002',
    category: 'Home Buyers',
    name: 'Upgrading Buyer',
    title: 'Family Home Upgrade',
    description: 'A family looking to upgrade from their current home to a larger property.',
    sampleDialogue: 'We need more space, but we\'re worried about timing the sale of our current home.',
    welcomeMessage: 'Welcome to the home upgrade scenario. Press spacebar to begin.',
    difficulty: ['advanced'],
    objectives: [
      'Coordinate buying and selling timeline',
      'Present financing options',
      'Address transition concerns'
    ],
    skills: ['Timeline Management', 'Transaction Coordination', 'Market Strategy']
  },
  {
    id: 'BUYER-003',
    category: 'Home Buyers',
    name: 'Relocating Buyer',
    title: 'Quick Relocation Purchase',
    description: 'Someone moving to the area for a job and needs help finding a home quickly.',
    sampleDialogue: 'I need to move fast, but I\'m not familiar with this area.',
    welcomeMessage: 'Welcome to the relocation scenario. Press spacebar to begin.',
    difficulty: ['beginner', 'advanced'],
    objectives: [
      'Provide area overview',
      'Streamline property search',
      'Coordinate remote closing'
    ],
    skills: ['Area Knowledge', 'Virtual Tours', 'Remote Transaction']
  },
  {
    id: 'BUYER-004',
    category: 'Home Buyers',
    name: 'Budget-Conscious Buyer',
    title: 'Value-Focused Purchase',
    description: 'A buyer with strict budget constraints looking for the best deal.',
    sampleDialogue: 'I can\'t go above $300K—what can you show me in that range?',
    welcomeMessage: 'Welcome to the budget-focused scenario. Press spacebar to begin.',
    difficulty: ['beginner'],
    objectives: [
      'Maximize budget potential',
      'Present value opportunities',
      'Explain financing options'
    ],
    skills: ['Value Analysis', 'Negotiation', 'Market Knowledge']
  },
  {
    id: 'BUYER-005',
    category: 'Home Buyers',
    name: 'Luxury Buyer',
    title: 'High-End Property Search',
    description: 'A high-net-worth individual looking for exclusive properties with specific features.',
    sampleDialogue: 'I\'m only interested in homes with a view and high-end amenities.',
    welcomeMessage: 'Welcome to the luxury buyer scenario. Press spacebar to begin.',
    difficulty: ['advanced'],
    objectives: [
      'Present exclusive listings',
      'Highlight premium features',
      'Provide white-glove service'
    ],
    skills: ['Luxury Market', 'Premium Service', 'Feature Analysis']
  },

  // Investors Category
  {
    id: 'INV-001',
    category: 'Investors',
    name: 'Buy-and-Hold Investor',
    title: 'Long-Term Rental Strategy',
    description: 'An investor looking for long-term rental properties with strong cash flow.',
    sampleDialogue: 'What kind of rental income can I expect in this area?',
    welcomeMessage: 'Welcome to the buy-and-hold investor scenario. Press spacebar to begin.',
    difficulty: ['beginner', 'advanced'],
    objectives: [
      'Analyze rental market potential',
      'Calculate ROI projections',
      'Present cash flow analysis'
    ],
    skills: ['Investment Analysis', 'Market Research', 'Financial Modeling']
  },
  {
    id: 'INV-002',
    category: 'Investors',
    name: 'Fix-and-Flip Investor',
    title: 'Quick Flip Strategy',
    description: 'Someone seeking properties to renovate and sell quickly for a profit.',
    sampleDialogue: 'I need something undervalued that I can flip within six months.',
    welcomeMessage: 'Welcome to the fix-and-flip scenario. Press spacebar to begin.',
    difficulty: ['advanced'],
    objectives: [
      'Identify renovation potential',
      'Estimate repair costs',
      'Project resale value'
    ],
    skills: ['Property Analysis', 'Renovation Assessment', 'Market Timing']
  },
  {
    id: 'INV-003',
    category: 'Investors',
    name: 'BRRRR Investor',
    title: 'BRRRR Strategy Implementation',
    description: 'An investor following the Buy, Rehab, Rent, Refinance, Repeat strategy.',
    sampleDialogue: 'Do you have any distressed properties with strong rental potential?',
    welcomeMessage: 'Welcome to the BRRRR strategy scenario. Press spacebar to begin.',
    difficulty: ['advanced'],
    objectives: [
      'Evaluate distressed properties',
      'Assess rehabilitation needs',
      'Analyze refinancing potential'
    ],
    skills: ['Distressed Property Analysis', 'Renovation Planning', 'Financial Strategy']
  },
  {
    id: 'INV-004',
    category: 'Investors',
    name: 'Portfolio Expander',
    title: 'Turnkey Portfolio Growth',
    description: 'An experienced investor looking to grow their portfolio with turnkey properties.',
    sampleDialogue: 'I want something low-maintenance that will generate steady income.',
    welcomeMessage: 'Welcome to the portfolio expansion scenario. Press spacebar to begin.',
    difficulty: ['advanced'],
    objectives: [
      'Present turnkey opportunities',
      'Analyze portfolio fit',
      'Project long-term returns'
    ],
    skills: ['Portfolio Analysis', 'Property Management', 'Investment Strategy']
  },
  {
    id: 'INV-005',
    category: 'Investors',
    name: 'Skeptical Investor',
    title: 'Agent Value Demonstration',
    description: 'An investor who doubts the value of working with an agent.',
    sampleDialogue: 'Why would I use an agent when I can find deals myself?',
    welcomeMessage: 'Welcome to the skeptical investor scenario. Press spacebar to begin.',
    difficulty: ['advanced'],
    objectives: [
      'Demonstrate market access',
      'Showcase agent resources',
      'Present value proposition'
    ],
    skills: ['Value Communication', 'Network Leverage', 'Deal Analysis']
  },

  // Cold Leads Category
  {
    id: 'COLD-001',
    category: 'Cold Leads',
    name: 'Homeowner Curious About Value',
    title: 'Value Inquiry Conversion',
    description: 'A homeowner wants to know their home\'s worth but isn\'t committed to selling.',
    sampleDialogue: 'I\'m not really looking to sell, but I\'d like to know what my home is worth.',
    welcomeMessage: 'Welcome to the value inquiry scenario. Press spacebar to begin.',
    difficulty: ['beginner', 'advanced'],
    objectives: [
      'Provide value insight',
      'Build long-term relationship',
      'Identify future opportunities'
    ],
    skills: ['Value Analysis', 'Lead Nurturing', 'Relationship Building']
  },
  {
    id: 'COLD-002',
    category: 'Cold Leads',
    name: 'Unresponsive Lead',
    title: 'Lead Reactivation',
    description: 'Someone who has previously shown interest but hasn\'t responded to recent follow-ups.',
    sampleDialogue: 'I don\'t remember signing up for anything—why are you calling me?',
    welcomeMessage: 'Welcome to the lead reactivation scenario. Press spacebar to begin.',
    difficulty: ['advanced'],
    objectives: [
      'Refresh lead memory',
      'Re-establish connection',
      'Present new value proposition'
    ],
    skills: ['Lead Recovery', 'Communication Strategy', 'Value Demonstration']
  },
  {
    id: 'COLD-003',
    category: 'Cold Leads',
    name: 'Distant Landlord',
    title: 'Out-of-State Property Solution',
    description: 'A property owner living far away from their rental property and unsure of what to do with it.',
    sampleDialogue: 'I\'m out of state, and I don\'t have time to deal with this property anymore.',
    welcomeMessage: 'Welcome to the distant landlord scenario. Press spacebar to begin.',
    difficulty: ['advanced'],
    objectives: [
      'Present property solutions',
      'Address management concerns',
      'Demonstrate local expertise'
    ],
    skills: ['Property Management', 'Remote Service', 'Problem Solving']
  },
  {
    id: 'COLD-004',
    category: 'Cold Leads',
    name: 'Potential Renter Turned Buyer',
    title: 'Renter Conversion',
    description: 'Someone renting but now considering homeownership.',
    sampleDialogue: 'I wasn\'t planning to buy, but with these rents, maybe I should.',
    welcomeMessage: 'Welcome to the renter conversion scenario. Press spacebar to begin.',
    difficulty: ['beginner'],
    objectives: [
      'Compare renting vs. buying',
      'Explain buying process',
      'Present financing options'
    ],
    skills: ['Financial Analysis', 'Process Education', 'Buyer Conversion']
  },
  {
    id: 'COLD-005',
    category: 'Cold Leads',
    name: 'Homeowner Waiting for Market',
    title: 'Market Timing Discussion',
    description: 'A cold lead who believes the market will improve in the future.',
    sampleDialogue: 'I\'m waiting for prices to go up before I sell.',
    welcomeMessage: 'Welcome to the market timing scenario. Press spacebar to begin.',
    difficulty: ['advanced'],
    objectives: [
      'Address market timing concerns',
      'Present current opportunities',
      'Analyze waiting costs'
    ],
    skills: ['Market Analysis', 'Timing Strategy', 'Cost-Benefit Analysis']
  },

  // Challenging Scenarios Category
  {
    id: 'CHAL-001',
    category: 'Challenging Scenarios',
    name: 'Divorcing Couple',
    title: 'Divorce Property Sale',
    description: 'A couple selling their home due to a divorce.',
    sampleDialogue: 'We just want to get this over with as fast as possible.',
    welcomeMessage: 'Welcome to the divorce property scenario. Press spacebar to begin.',
    difficulty: ['advanced'],
    objectives: [
      'Manage emotional dynamics',
      'Coordinate with both parties',
      'Expedite sale process'
    ],
    skills: ['Conflict Resolution', 'Emotional Intelligence', 'Process Management']
  },
  {
    id: 'CHAL-002',
    category: 'Challenging Scenarios',
    name: 'Financially Distressed Seller',
    title: 'Distressed Property Solution',
    description: 'A homeowner facing foreclosure or financial challenges.',
    sampleDialogue: 'I\'m behind on payments and don\'t know what to do next.',
    welcomeMessage: 'Welcome to the distressed seller scenario. Press spacebar to begin.',
    difficulty: ['advanced'],
    objectives: [
      'Present solution options',
      'Address financial urgency',
      'Coordinate with lenders'
    ],
    skills: ['Distressed Property', 'Financial Counseling', 'Solution Strategy']
  },
  {
    id: 'CHAL-003',
    category: 'Challenging Scenarios',
    name: 'Out-of-Town Executor',
    title: 'Estate Sale Management',
    description: 'Someone handling the sale of a deceased relative\'s home.',
    sampleDialogue: 'I\'m not from here, and I just need this done without too much hassle.',
    welcomeMessage: 'Welcome to the estate sale scenario. Press spacebar to begin.',
    difficulty: ['advanced'],
    objectives: [
      'Simplify remote process',
      'Handle estate requirements',
      'Manage property preparation'
    ],
    skills: ['Estate Sales', 'Remote Management', 'Process Simplification']
  },
  {
    id: 'CHAL-004',
    category: 'Challenging Scenarios',
    name: 'Market Pessimist',
    title: 'Market Confidence Building',
    description: 'Someone convinced that the market is about to crash.',
    sampleDialogue: 'Why would I buy or sell now? The market is too risky.',
    welcomeMessage: 'Welcome to the market pessimist scenario. Press spacebar to begin.',
    difficulty: ['advanced'],
    objectives: [
      'Address market concerns',
      'Present market data',
      'Build client confidence'
    ],
    skills: ['Market Analysis', 'Risk Assessment', 'Confidence Building']
  },
  {
    id: 'CHAL-005',
    category: 'Challenging Scenarios',
    name: 'Unreasonable Seller',
    title: 'Price Expectations Management',
    description: 'A seller insisting on an unrealistic price for their home.',
    sampleDialogue: 'I need at least $600K, even though my neighbor sold for $450K.',
    welcomeMessage: 'Welcome to the price expectations scenario. Press spacebar to begin.',
    difficulty: ['advanced'],
    objectives: [
      'Present market reality',
      'Handle price objections',
      'Align expectations'
    ],
    skills: ['Price Strategy', 'Expectation Management', 'Negotiation']
  },

  // Objections and Obstacles Category
  {
    id: 'OBJ-001',
    category: 'Objections and Obstacles',
    name: 'Commission Objection',
    title: 'Commission Value Defense',
    description: 'A seller who thinks your commission is too high.',
    sampleDialogue: 'Why should I pay you 6% when another agent offered to do it for less?',
    welcomeMessage: 'Welcome to the commission objection scenario. Press spacebar to begin.',
    difficulty: ['advanced'],
    objectives: [
      'Demonstrate value proposition',
      'Compare service levels',
      'Handle price objections'
    ],
    skills: ['Value Communication', 'Service Differentiation', 'Negotiation']
  },
  {
    id: 'OBJ-002',
    category: 'Objections and Obstacles',
    name: 'Already Have an Agent',
    title: 'Agent Loyalty Challenge',
    description: 'A homeowner or buyer claims they\'re already working with someone else.',
    sampleDialogue: 'I\'m happy with my current agent—thanks anyway.',
    welcomeMessage: 'Welcome to the agent loyalty scenario. Press spacebar to begin.',
    difficulty: ['advanced'],
    objectives: [
      'Respect existing relationships',
      'Highlight unique value',
      'Create future opportunity'
    ],
    skills: ['Professional Ethics', 'Value Proposition', 'Relationship Building']
  },
  {
    id: 'OBJ-003',
    category: 'Objections and Obstacles',
    name: 'Need to Think About It',
    title: 'Decision Delay Management',
    description: 'A prospect delaying their decision.',
    sampleDialogue: 'I\'ll let you know after I\'ve had some time to think.',
    welcomeMessage: 'Welcome to the decision delay scenario. Press spacebar to begin.',
    difficulty: ['beginner', 'advanced'],
    objectives: [
      'Address underlying concerns',
      'Create urgency',
      'Secure next steps'
    ],
    skills: ['Objection Handling', 'Motivation Discovery', 'Follow-up Strategy']
  },
  {
    id: 'OBJ-004',
    category: 'Objections and Obstacles',
    name: 'Trust Issues',
    title: 'Trust Building',
    description: 'Someone skeptical of real estate agents in general.',
    sampleDialogue: 'How do I know I can trust you to have my best interests in mind?',
    welcomeMessage: 'Welcome to the trust building scenario. Press spacebar to begin.',
    difficulty: ['advanced'],
    objectives: [
      'Build credibility',
      'Demonstrate transparency',
      'Show client focus'
    ],
    skills: ['Trust Building', 'Reputation Management', 'Client Advocacy']
  },
  {
    id: 'OBJ-005',
    category: 'Objections and Obstacles',
    name: 'Timeline Objection',
    title: 'Timeline Management',
    description: 'A seller who insists they\'re not ready yet.',
    sampleDialogue: 'Maybe in six months or a year—I\'m not in a rush.',
    welcomeMessage: 'Welcome to the timeline objection scenario. Press spacebar to begin.',
    difficulty: ['beginner', 'advanced'],
    objectives: [
      'Identify true timeline',
      'Present market opportunities',
      'Create action plan'
    ],
    skills: ['Timeline Strategy', 'Market Analysis', 'Planning']
  }
];

export default practiceScenarios;
