import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 5vh;
`;

export const AboutText = styled.div`
  padding: 10px;
  width: 600px;
  text-align: start;
  font-style: italic;
  background:rgba(0,0,0,0.3785889355742297) 100%;
`;

export const Paragraph = styled.p`
  font-size: 1.2em;
  color: white;
  margin-bottom: 15px;
`;

export const Span = styled.span`
  color: #00bcd4;
`;

export const Link = styled.a`
  color: #00bcd4;
`;

export const Skills = styled.span`
  width: 500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const IconContainer = styled.div`
  padding: 10px;
`;

export const Icon = styled.div`
  font-size: 40px;
  color: white;
`;
