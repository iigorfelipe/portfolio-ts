import styled from 'styled-components';

export const NavigationWrapper = styled.div`
  position: relative;
`;

export const Container = styled.div``;

export const Carousel = styled.div`
  height: 100vh;
`;

export const Paragraph = styled.p``;

export const Title = styled.a`
  color: #00bcd4;
  text-decoration: none;
  font-size: 1.2em;
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

export const Arrow = styled.svg`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  fill: #fff;
  cursor: pointer;
  fill: ${(props) => props.fill};
`;

export const Path = styled.path``;