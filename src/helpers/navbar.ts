import { AiOutlineHome } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { TiMessages } from 'react-icons/ti';
import { MdOutlinePhotoSizeSelectActual } from 'react-icons/md';

export const navbar = [
  {
    id: '1',
    to: '/',
    name: 'Inicio',
    icon: AiOutlineHome
  },
  {
    id: '2',
    to: '/about',
    name: 'Sobre',
    icon: CgProfile
  },
  {
    id: '3',
    to: '/portfolio',
    name: 'Portfólio',
    icon: MdOutlinePhotoSizeSelectActual
  },
  {
    id: '4',
    to: '/contact',
    name: 'Contato',
    icon: TiMessages
  }
];
