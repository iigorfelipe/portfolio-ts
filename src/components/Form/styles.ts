import styled from 'styled-components';

export const Container = styled.div`
  width: 40%;
  padding: 40px;
  background: #fff;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const Form = styled.form``;

export const Title = styled.h2`
  font-size: 30px;
  color: #333;
  font-weight: 500;
`;

export const Span = styled.span`
  position: absolute;
  left: 0;
  padding: 5px 0;
  font-size: 16px;
  margin: 10px 0;
  pointer-events: none;
  transition: 0.5s;
  color: #666;
`;

export const InputBox = styled.div`
  position: relative;
  width: 100%;
  margin-top: 10px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 5px 0;
  font-size: 16px;
  margin: 10px 0;
  border: none;
  border-bottom: 2px solid #333;
  outline: none;
  resize: none;
  &:focus ~ ${Span},
  &:valid ~ ${Span} {
    color: #e91e68;
    font-size: 12px;
    transform: translateY(-20px);
  };
`;

export const InputSubmit = styled(Input)`
  width: 100px;
  background: #00bcd4;
  color: #fff;
  border: none;
  cursor: pointer;
  padding: 10px;
  font-size: 18px;
`;
