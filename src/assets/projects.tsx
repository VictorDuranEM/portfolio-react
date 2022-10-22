import productCard from './images/work/product-card.png';
import productCardMobile from './images/work/product-card-mobile.png';
import productCardDesktop from './images/work/product-card-desktop.png';

export type Project = {
  id: string,
  title: string;
  titleStrong: string;
  subtitle: string;
  image: string;
  imageMobile: string;
  imageDesktop: string;
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
    imageMobile: productCardMobile,
    imageDesktop: productCardDesktop,
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
        name: 'View on GitHub',
        url: 'https://github.com/VictorDuranEM/product-preview-card-component'
      },
      {
        name: 'View on Netlify',
        url: 'https://imba-product-preview-card-component.netlify.app/'
      }
    ],
  }
]