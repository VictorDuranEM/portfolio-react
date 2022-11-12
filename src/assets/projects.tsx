import productCard from './images/work/product-card.png';
import eLearningCard from './images/work/e-learning-card.png';
import equalizerCard from './images/work/equalizer-card.png';
import meetCard from './images/work/meet-card.png';
import podRequestAccessCard from './images/work/pod-request-access-card.png';
import singlePageDesignCard from './images/work/single-page-design-card.png';
import suiteLandingPageCard from './images/work/suite-landing-page-card.png';

export type Project = {
  id: string,
  title: string;
  titleStrong: string;
  subtitle: string;
  image: string;
  description: string;
  technologies: {
    name: string;
    url: string;
  }[];
  links: {
    name: string;
    url: string;
  }[];
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'e-Learning',
    titleStrong: 'Landing Page',
    subtitle: 'Challenge',
    image: eLearningCard,
    description: 'This landing page is my implementation of a challenge from Frontend Mentor.',
    technologies: [
      {
        name: 'React',
        url: 'https://reactjs.org/'
      },
      {
        name: 'Tailwind CSS',
        url: 'https://tailwindcss.com/'
      },
    ],
    links: [
      {
        name: 'View on Vercel',
        url: 'https://skilled-e-learning-landing-page-theta.vercel.app/'
      },
      {
        name: 'View on GitHub',
        url: 'https://github.com/VictorDuranEM/skilled-e-learning-landing-page'
      },
    ],
  },
  {
    id: '2',
    title: 'Equalizer',
    titleStrong: 'Landing Page',
    subtitle: 'Challenge',
    image: equalizerCard,
    description: 'This landing page is my implementation of a challenge from Frontend Mentor.',
    technologies: [
      {
        name: 'React',
        url: 'https://reactjs.org/'
      },
      {
        name: 'Tailwind CSS',
        url: 'https://tailwindcss.com/'
      },
    ],
    links: [
      {
        name: 'View on Vercel',
        url: 'https://equalizer-landing-page-beta.vercel.app/'
      },
      {
        name: 'View on GitHub',
        url: 'https://github.com/VictorDuranEM/equalizer-landing-page'
      },
    ],
  },
  {
    id: '3',
    title: 'Meet',
    titleStrong: 'Landing Page',
    subtitle: 'Challenge',
    image: meetCard,
    description: 'This landing page is my implementation of a challenge from Frontend Mentor.',
    technologies: [
      {
        name: 'Next.js',
        url: 'https://nextjs.org/'
      },
      {
        name: 'React',
        url: 'https://reactjs.org/'
      },
      {
        name: 'Tailwind CSS',
        url: 'https://tailwindcss.com/'
      },
    ],
    links: [
      {
        name: 'View on Vercel',
        url: 'https://meet-landing-page-jade-ten.vercel.app/'
      },
      {
        name: 'View on GitHub',
        url: 'https://github.com/VictorDuranEM/meet-landing-page'
      },
    ],
  },
  {
    id: '4',
    title: 'Pod Request Access',
    titleStrong: 'Landing Page',
    subtitle: 'Challenge',
    image: podRequestAccessCard,
    description: 'This landing page is my implementation of a challenge from Frontend Mentor.',
    technologies: [
      {
        name: 'Next.js',
        url: 'https://nextjs.org/'
      },
      {
        name: 'React',
        url: 'https://reactjs.org/'
      },
      {
        name: 'Tailwind CSS',
        url: 'https://tailwindcss.com/'
      },
    ],
    links: [
      {
        name: 'View on Vercel',
        url: 'https://pod-request-access-landing-page-five.vercel.app/'
      },
      {
        name: 'View on GitHub',
        url: 'https://github.com/VictorDuranEM/pod-request-access-landing-page'
      },
    ],
  },
  {
    id: '5',
    title: 'Single Page Design',
    titleStrong: 'Landing Page',
    subtitle: 'Challenge',
    image: singlePageDesignCard,
    description: 'This landing page is my implementation of a challenge from Frontend Mentor.',
    technologies: [
      {
        name: 'Next.js',
        url: 'https://nextjs.org/'
      },
      {
        name: 'React',
        url: 'https://reactjs.org/'
      },
      {
        name: 'Tailwind CSS',
        url: 'https://tailwindcss.com/'
      },
      {
        name: 'CVA',
        url: 'https://github.com/joe-bell/cva'
      }
    ],
    links: [
      {
        name: 'View on Vercel',
        url: 'https://single-page-design-portfolio-peach.vercel.app/'
      },
      {
        name: 'View on GitHub',
        url: 'https://github.com/VictorDuranEM/single-page-design-portfolio'
      },
    ],
  },
  {
    id: '6',
    title: 'Suite Page Design',
    titleStrong: 'Landing Page',
    subtitle: 'Challenge',
    image: suiteLandingPageCard,
    description: 'This landing page is my implementation of a challenge from Frontend Mentor.',
    technologies: [
      {
        name: 'Next.js',
        url: 'https://nextjs.org/'
      },
      {
        name: 'React',
        url: 'https://reactjs.org/'
      },
      {
        name: 'Tailwind CSS',
        url: 'https://tailwindcss.com/'
      },
      {
        name: 'CVA',
        url: 'https://github.com/joe-bell/cva'
      }
    ],
    links: [
      {
        name: 'View on Vercel',
        url: 'https://suite-landing-page-nmrqcs7js-victorduranem.vercel.app'
      },
      {
        name: 'View on GitHub',
        url: 'https://github.com/VictorDuranEM/suite-landing-page'
      },
    ],
  }
]