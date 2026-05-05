import { faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import type { ContactItem } from '../types';

const data: ContactItem[] = [
  {
    link: 'https://github.com/maxfortoday',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.instagram.com/maxfortoday/',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'https://www.linkedin.com/in/max-kozlov-769822114',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'mailto:admtrigger@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
