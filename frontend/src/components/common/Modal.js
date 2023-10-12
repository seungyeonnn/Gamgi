import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
`;

const Contents = styled.div`
  position: relative;
  top: 0px;
  padding: 0 auto;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  background-color: white;
  text-align: center;
  width: 50%;
  height: 600px;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  background-color: #BFCAF8;
  width: 100%;
  overflow: auto;
  height: 10%;
`;

const Close = styled.div`
  position: absolute;
  margin-right: 15px;
  color: gray;
  right: 0;

  &:hover {
    cursor: pointer;
  }
`;

const Body = styled.div`
  margin: 10px 10px 10px 10px;
`;

export { Container, Contents, Overlay, Title, Close, Body };
