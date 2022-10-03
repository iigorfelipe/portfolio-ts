import NavigationBar from '../../components/NavigationBar';
import { icons } from '../../helpers/icons';
import * as C from './styles';

const About = () => {
  return (
    <>
      <NavigationBar />

      <C.Container>

        <C.AboutText>
          <C.Paragraph>Olá, meu nome é Igor, sou apaixonado por <C.Span>tecnologia</C.Span> e muitas nerdices, eu amo estudar sobre o <C.Span>desenvolvimento web</C.Span> e fico fascinado o quão rápido essa área evolui, isso me incentiva a estudar mais ainda.</C.Paragraph>
          <C.Paragraph>Me formei na <C.Link href='https://www.betrybe.com/' target='_blank' rel='noreferrer'>Trybe</C.Link> que é uma escola de <C.Span>programação</C.Span> que tem o foco no desenvolvimento web <C.Span>full stack</C.Span>, que é exatamente o que desejo. Eu amo estudar tanto sobre <C.Span>frontend</C.Span> quanto o <C.Span>backend</C.Span>.</C.Paragraph>
          <C.Paragraph>A direita está algumas tecnologias que estudei fora e dentro da Trybe, e você pode conferir meus certificados em meu <C.Link href='https://www.linkedin.com/in/iigor-felipe/details/certifications/' target='_blank' rel='noreferrer'>Linkedin</C.Link>.</C.Paragraph>
        </C.AboutText>

        <C.Skills>
          {
            icons.map((item) => (
              <C.IconContainer key={item.id}>
                <C.Icon>
                  {<item.icon />}
                </C.Icon>

                <div>{item.name}</div>
              </C.IconContainer>
            ))
          }
        </C.Skills>
      </C.Container>
    </>
  );
}

export default About;
