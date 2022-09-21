import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 18vh;
`;

export const NavBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height: 70px;
  width: 400px;
`;

export const Ul = styled.ul`
  display: flex;
`;

export const Li = styled.div`
  list-style: none;
  width: 70px;
  height: 70px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Icon = styled.div`
  line-height: 75px;
  font-size: 1.5em;
  text-align: center;
  transition: 0.5s;
  color: white;
  &:hover {
    transform: translateY(-32px);
  }
`;

export const Title = styled.div`
  position: absolute;
  color: white;
  font-weight: 400;
  font-size: 0.75em;
  letter-spacing: 0.07em;
  transform: translateY(20px);
`;
