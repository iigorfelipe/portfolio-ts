import * as C from './styles';

const Form = () => {
  return (
    <C.Container>
      <C.Form action="https://formsubmit.co/f6f1c67437a5cb2429053f5475da398b" method="POST">
        <C.Title>Envie uma Mensagem</C.Title>

        <C.InputBox>
          <C.Input type="text"  name="Nome" required/>
          <C.Span>Nome Completo</C.Span>
        </C.InputBox>

        <C.InputBox>
          <C.Input type="email"  name="Email" required/>
          <C.Span>Email</C.Span>
        </C.InputBox>

        <C.InputBox>
          <C.Input required name="Mensagem"/>
          <C.Span>Escreva sua mensagem...</C.Span>
        </C.InputBox>
      
        <C.InputBox>
          <C.InputSubmit type="submit" value="Enviar" />
        </C.InputBox>
      </C.Form>
    </C.Container>
  )
}

export default Form;
