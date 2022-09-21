import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import NavigationBar from '../../components/NavigationBar';

import * as C from './styles';

const Main = () => {
  return (
    <>
      <NavigationBar />

      <C.Container>
        <C.Paragraph>Olá, me chamo Igor!</C.Paragraph>
        <C.ParagraphSM>Desenvolvedor web Fullstack</C.ParagraphSM>

        <C.Icons>

          <C.Icon
            href='https://www.linkedin.com/in/iigor-felipe/'
            target='_blank'
            rel='noreferrer'
          >
            <AiFillLinkedin />
          </C.Icon>

          <C.Icon
            href='https://github.com/iigorfelipe'
            target='_blank'
            rel='noreferrer'
          >
            <AiFillGithub />
          </C.Icon>

          <Link to='/contact'>
            <C.Icon>
              <AiOutlineMail />
            </C.Icon>
          </Link>

        </C.Icons>
      </C.Container>
    </>
  )
};

export default Main;
