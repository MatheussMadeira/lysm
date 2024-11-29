import styled from "styled-components";

export const Container = styled.div`
  background-image: linear-gradient(to bottom, black, #121212);
  min-height: 100vh;
  width: 100%;
`;
export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2vh;
`;
export const TitlePrimary = styled.h1`
  color: #b22222;
  font-size: 36px;
  padding-top: 10px;
`;
export const CSection = styled.section``;
export const Carrousel = styled.div`
  display: flex;
  position: relative;
  width: 75%;
  overflow: hidden;
  margin: 0 auto;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease-in-out;
  transform: ${({ currentIndex }) => `translateX(-${currentIndex * 100}%)`};
`;
export const TSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Fparagraph = styled.p``;
export const Lparagraph = styled.p`
  font-size: 18px;
  color: #b5b4b4;
  padding: 10px 20px;
  text-align: center;
  margin-bottom: 10px;
`;
export const CDSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 20px;
`;
export const TimeCounter = styled.p`
  font-size: 15px;
  color: #d3d3d3;
  padding: 10px 20px;
  border-radius: 10px;
  display: inline-block;
`;
export const Linha = styled.div`
  margin-top: 30px;
  border-radius: 20px;
  border-top: 2px solid #d3d3d3; // Cor suave para a linha
  width: 40%; // Ajuste a largura da linha
  margin-left: auto;
  margin-right: auto;
`;
export const NavigationButton = styled.button`
  background-color: transparent;
  color: #fff;
  border: none;
  font-size: 30px;
  margin: 0 20px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: #0074ba;
  }
`;
export const Buttonpage = styled.button`
  background-color: red;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  &:active {
    transform: scale(0.95);
    opacity: 1;
  }
`;
export const FadeContainer = styled.div`
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: ${(props) =>
    props.isVisible ? "translateY(0)" : "translateY(20px)"};
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  width: 100%;
`;
