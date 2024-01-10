import Navigation from '../../components/NavigationBar';
import { BiMap } from 'react-icons/bi';
import { BsPhone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import Form from '../../components/Form';
import * as C from './styles';

const Contact = () => {
  return (
    <>
      <Navigation />

      <C.MainContainer>
        <C.Section>
          <C.Container>
            <C.ContactInfo>

              <C.Box>
                <C.Icon>
                  <BiMap />
                </C.Icon>

                <C.Text>
                  <C.Title>Endereço</C.Title>
                  <C.Paragraph>São Luís, Maranhão</C.Paragraph>
                </C.Text>
              </C.Box>
  
              <C.Box>
                <C.Icon>
                  <BsPhone />
                </C.Icon>

                <C.Text>
                  <C.Title>Celular</C.Title>
                  <C.Paragraph>(98) 9 9159-5038</C.Paragraph>
                </C.Text>
              </C.Box>

              <C.Box>
                <C.Icon>
                  <AiOutlineMail />
                </C.Icon>

                <C.Text>
                  <C.Title>Email</C.Title>
                  <C.Paragraph>iigorfelipe@gmail.com</C.Paragraph>
                </C.Text>
              </C.Box>
            </C.ContactInfo>

            <Form />

          </C.Container>
        </C.Section>
      </C.MainContainer>
    </>
  );
}

export default Contact;
