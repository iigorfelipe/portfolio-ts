import styled from 'styled-components';

export const MainContainer = styled.div``;

export const Section = styled.section`
  position: relative;
  padding: 0px 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  @media (max-width: 911px) {
    padding: 50px;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  @media (max-width: 911px) {
    flex-direction: column;
    margin-bottom: 40px;
    width: 100%;
  }
`;

export const ContactInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  @media (max-width: 911px) {
    margin-bottom: 40px;
    width: 100%;
  }
`;

export const Box = styled.div`
  position: relative;
  padding: 20px 0;
  display: flex;
`;

export const Icon = styled.div`
  min-width: 60px;
  height: 60px;
  border: 1px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 22px;
`;

export const Text = styled.div`
  display: flex;
  margin-left: 20px;
  margin-top: 10px;
  font-size: 16px;
  color: #fff;
  flex-direction: column;
  font-weight: 300;
`;

export const Title = styled.h3`
  font-weight: 300;
  color: #00bcd4;
  display: flex;
  align-items: flex-start;
`;

export const Paragraph = styled.p``;
