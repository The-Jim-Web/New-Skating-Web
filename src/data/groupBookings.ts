import { GroupBooking } from '../types';

export const groupBookings: GroupBooking[] = [
  {
    id: 'school-program',
    type: 'school',
    name: 'School Skating Program',
    description: 'Comprehensive skating programs designed for schools, including equipment and certified instructors.',
    minParticipants: 15,
    imageUrl: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80',
    features: [
      'Certified instructors',
      'Safety equipment provided',
      'Customizable schedules',
      'Progress tracking',
      'End-term showcase events'
    ]
  },
  {
    id: 'estate-community',
    type: 'estate',
    name: 'Estate Community Classes',
    description: 'Bring the joy of skating to your residential community with our estate-wide programs.',
    minParticipants: 10,
    imageUrl: 'https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?auto=format&fit=crop&q=80',
    features: [
      'Weekend group sessions',
      'Family packages available',
      'Community events',
      'Flexible timing',
      'On-site training'
    ]
  }
];