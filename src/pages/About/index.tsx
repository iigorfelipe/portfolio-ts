import NavigationBar from '../../components/NavigationBar';
import { icons } from '../../helpers/icons';
import * as C from './styles';

const About = () => {
  return (
    <>
      <NavigationBar />

      <C.Container>

        <C.AboutText>

          <C.Paragraph>Olá! Sou Igor, nascido e criado em Piracaia, SP, atualmente residindo no nordeste, em São Luís, MA. Entusiasta do <C.Span>desenvolvimento web</C.Span>, formado na <C.Span>Trybe</C.Span> e com mais de 1 ano de experiência no mercado</C.Paragraph>
          <C.Paragraph> - </C.Paragraph>
          <C.Paragraph>Minha experiência de trabalho envolve em resolver desafios da equipe de suporte, abordando problemas dos clientes e implementando novas funcionalidades para proporcionar uma excepcional experiência de usuário.</C.Paragraph>
          <C.Paragraph> - </C.Paragraph>
          <C.Paragraph>Compromisso com a qualidade evidenciado pela cuidadosa <C.Span>documentação</C.Span> de todas as minhas atividades recebidas. Confira meu perfil e certificados no meu <C.Link href='https://www.linkedin.com/in/iigor-felipe/details/certifications/' target='_blank' rel='noreferrer'>LinkedIn</C.Link>. Estou pronto para contribuir com paixão e habilidades para projetos desafiadores. Vamos construir algo extraordinário!</C.Paragraph>

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
