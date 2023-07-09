export const formFields = [
  {
    name: 'from',
    header: 'What is your starting location?',
    detail: '',
    next: 'to',
    input: {
      type: 'text',
      minLength: 3,
      maxLength: 20,
      validationParams: {
        required: 'Starting location is required',
        minLength: {
          value: 3,
          message: 'Location name must be at least 3 characters long',
        },
        maxLength: {
          value: 20,
          message: 'Location name must be no more than 20 characters long',
        },
      },
    },
  },
  {
    name: 'to',
    header: 'What about destination?',
    detail: '',
    next: 'adults',
    input: {
      type: 'text',
      minLength: 3,
      maxLength: 20,
      validationParams: {
        required: 'Destination location is required',
        minLength: {
          value: 3,
          message: 'Location name must be at least 3 characters long',
        },
        maxLength: {
          value: 20,
          message: 'Location name must be no more than 20 characters long',
        },
      },
    },
  },
  {
    name: 'adults',
    header: 'How many adults are traveling?',
    detail: 'At least 1 and up to 9.',
    next: 'children',
    input: {
      type: 'number',
      min: 1,
      max: 9,
      validationParams: {
        required: 'Pick value between 1 and 9',
        min: {
          value: 1,
          message: 'There has to be at least 1 adult in the group',
        },
        max: {
          value: 9,
          message: 'No more than 9 adults at this time',
        },
      },
    },
  },
  {
    name: 'children',
    header: 'Any children?',
    detail: 'Pick up to 9.',
    next: 'duration',
    input: {
      type: 'number',
      min: 0,
      max: 9,
      validationParams: {
        required: 'Pick value between 0 and 9',
        min: {
          value: 0,
          message: 'Pick value between 0 and 9',
        },
        max: {
          value: 9,
          message: 'No more than 9 children at this time',
        },
      },
    },
  },
  {
    name: 'duration',
    header: 'How many days do you plan to travel?',
    detail: 'Choose between 3 and 30.',
    next: 'budget',
    input: {
      type: 'number',
      min: 3,
      max: 30,
      validationParams: {
        required: 'Pick value between 3 and 30',
        min: {
          value: 3,
          message: 'Please allow at least 3 day for your travel',
        },
        max: {
          value: 9,
          message: 'No more than 30 day estimates at this time',
        },
      },
    },
  },
  {
    name: 'budget',
    header: 'What is your budget?',
    detail: '',
    next: 'season',
    input: {
      type: 'radio',
      validationParams: {
        required: 'Please select best matching option',
      },
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
    next: 'submit',
    input: {
      type: 'radio',
      validationParams: {
        required: 'Please select best matching option',
      },
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
    name: 'submit',
    header: 'Ready to submit?',
    detail: '',
    next: 'confirmation',
    input: {
      type: 'submit',
    },
  },
];
