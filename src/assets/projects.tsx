import productCard from './images/work/product-card.png';
import eLearningCard from './images/work/e-learning-card.png';
import equalizerCard from './images/work/equalizer-card.png';


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
    title: 'Product Card',
    titleStrong: 'Component',
    subtitle: 'Challenge',
    image: productCard,
    description: 'This product card component is my implementation of a challenge from Frontend Mentor.',
    technologies: [
      {
        name: 'Imba',
        url: 'https://imba.io/',
      },
      {
        name: 'Vite',
        url: 'https://vitejs.dev/',
      },
    ],
    links: [
      {
        name: 'View on Netlify',
        url: 'https://imba-product-preview-card-component.netlify.app/'
      },
      {
        name: 'View on GitHub',
        url: 'https://github.com/VictorDuranEM/product-preview-card-component'
      },
    ],
  },
  {
    id: '2',
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
    id: '3',
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
]