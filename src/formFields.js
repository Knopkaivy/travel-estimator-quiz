export const formFields = [
  {
    name: 'from',
    header: 'What is your starting location?',
    detail: '',
    next: 'to',
    input: {
      type: 'text',
      initialValue: '',
      isRequired: true,
      minLength: 3,
      maxLength: 20,
    },
  },
  {
    name: 'to',
    header: 'What about destination?',
    detail: '',
    next: 'adults',
    input: {
      type: 'text',
      initialValue: '',
      isRequired: true,
      minLength: 3,
      maxLength: 20,
    },
  },
  {
    name: 'adults',
    header: 'How many adults are traveling?',
    detail: 'At least 1 and up to 9.',
    next: 'children',
    input: {
      type: 'number',
      initialValue: 1,
      isRequired: true,
      min: 1,
      max: 9,
    },
  },
  {
    name: 'children',
    header: 'Any children?',
    detail: 'Pick up to 9.',
    next: 'duration',
    input: {
      type: 'number',
      initialValue: 0,
      isRequired: false,
      min: 0,
      max: 9,
    },
  },
  {
    name: 'duration',
    header: 'How many days do you plan to travel?',
    detail: 'Choose between 3 and 30.',
    next: 'budget',
    input: {
      type: 'number',
      initialValue: 3,
      isRequired: true,
      min: 3,
      max: 30,
    },
  },
  {
    name: 'budget',
    header: 'What is your budget?',
    detail: '',
    next: 'season',
    input: {
      type: 'radio',
      initialValue: '',
      isRequired: true,
      options: [
        {
          name: 'modest',
          id: 'modest',
          description: [
            'Cheapest flights',
            'Carry on only.',
            'Shared accommodations',
            'Street food',
            'Public transportation.',
          ],
        },
        {
          name: 'mid-grade',
          id: 'mid',
          description: [
            'Affordable flights',
            'One check in bag per person.',
            'Modest hotel room',
            'Mid-priced restaurants',
            'Uber.',
          ],
        },
        {
          name: 'no constraints',
          id: 'none',
          description: [
            'Most convenient flights',
            'Any luggage.',
            'Best hotel and room',
            'All restaurants',
            'Taxi.',
          ],
        },
      ],
    },
  },
  {
    name: 'season',
    header: 'When are you planning to travel?',
    detail: '',
    next: 'name',
    input: {
      type: 'radio',
      initialValue: '',
      isRequired: true,
      options: [
        {
          name: 'best season',
          id: 'best',
        },
        {
          name: 'within 3 months',
          id: '3',
        },
        {
          name: 'within 6 months',
          id: '6',
        },
        {
          name: 'within 12 months',
          id: '12',
        },
      ],
    },
  },
  {
    name: 'name',
    header: 'Add your name',
    detail: '',
    next: 'email',
    input: {
      type: 'text',
      initialValue: '',
      isRequired: false,
      minLength: 1,
      maxLength: 20,
    },
  },
  {
    name: 'email',
    header: 'Stay in touch',
    detail:
      'Add your email to receive additional content about your destination.',
    next: 'submit',
    input: {
      type: 'text',
      initialValue: '',
      isRequired: false,
      pattern: '',
    },
  },
  {
    name: 'submit',
    header: 'Ready to submit?',
    detail: '',
    next: 'confirmation',
    input: {
      type: 'submit',
      initialValue: 'Go Ahead',
    },
  },
];
