import {
  Container,
  Header,
  TitlePrimary,
  CSection,
  Carrousel,
  TSection,
  Fparagraph,
  Lparagraph,
  CDSection,
  Image,
  TimeCounter,
  Linha,
  NavigationButton,
  Buttonpage,
  FadeContainer,
} from "./Styles";

import diaN from "./assets/diaN.jpg";
import raro1 from "./assets/raro (1).jpg";
import raro3 from "./assets/raro (3).jpg";
import hj1 from "./assets/H&J1.jpg";
import React, { useState, useEffect } from "react";

const startDate = new Date("2024-07-05T23:00:00");

const images = [diaN, raro1, raro3, hj1];

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const handleButtonClick = () => {
    setIsVisible(true);
  };
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = now - startDate;

      // Calcule os anos e meses
      const years = now.getFullYear() - startDate.getFullYear();
      const months = now.getMonth() - startDate.getMonth();
      const days = now.getDate() - startDate.getDate();
      const hours = now.getHours() - startDate.getHours();
      const minutes = now.getMinutes() - startDate.getMinutes();
      const seconds = now.getSeconds() - startDate.getSeconds();

      // Ajustando para garantir valores positivos em meses, dias, horas, minutos e segundos
      let adjustedMonths = months;
      let adjustedDays = days;
      let adjustedHours = hours;
      let adjustedMinutes = minutes;
      let adjustedSeconds = seconds;

      if (adjustedMonths < 0) {
        adjustedMonths += 12;
      }
      if (adjustedDays < 0) {
        adjustedDays += new Date(
          now.getFullYear(),
          now.getMonth(),
          0
        ).getDate();
      }
      if (adjustedHours < 0) {
        adjustedHours += 24;
      }
      if (adjustedMinutes < 0) {
        adjustedMinutes += 60;
      }
      if (adjustedSeconds < 0) {
        adjustedSeconds += 60;
      }

      setTimeElapsed({
        years,
        months: adjustedMonths,
        days: adjustedDays,
        hours: adjustedHours,
        minutes: adjustedMinutes,
        seconds: adjustedSeconds,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {!isVisible ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "200px",
          }}
        >
          <Buttonpage onClick={handleButtonClick}>Clique aqui!</Buttonpage>
        </div>
      ) : (
        <FadeContainer isVisible={isVisible}>
          <Container>
            <Header>
              <TitlePrimary></TitlePrimary>
            </Header>
            <CSection>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <span style={{ fontSize: "25px" }}>💙</span>
              </div>
              <Carrousel>
                <div
                  style={{
                    display: "flex",
                    transition: "transform 0.5s ease-in-out",
                    width: `${images.length * 100}%`,
                    transform: `translateX(-${currentIndex * 100}%)`,
                  }}
                >
                  {images.map((image, index) => (
                    <Image key={index} src={image} alt={`Slide ${index + 1}`} />
                  ))}
                </div>
              </Carrousel>
              {/* Botões de navegação */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "10px",
                }}
              >
                <NavigationButton onClick={prevSlide}>←</NavigationButton>
                <NavigationButton onClick={nextSlide}>→</NavigationButton>
              </div>
            </CSection>
            <TSection>
              <Fparagraph></Fparagraph>
              <Lparagraph></Lparagraph>
            </TSection>
            <CDSection>
              <h1
                style={{
                  fontSize: "25px",
                  marginBottom: "10px",
                  marginLeft: "10px",
                  marginTop: "0px",
                }}
              >
                Juntos há:
              </h1>
              <TimeCounter>
                <div
                  style={{
                    textAlign: "center",
                    color: "#b5b4b4",
                    fontSize: "24px",
                  }}
                >
                  <div style={{ fontSize: "20px" }}>
                    <span style={{ fontWeight: "bold", color: "#FFFF" }}>
                      {timeElapsed.years}
                    </span>{" "}
                    anos,{" "}
                    <span style={{ fontWeight: "bold", color: "#FFFF" }}>
                      {timeElapsed.months}
                    </span>{" "}
                    meses,{" "}
                    <span style={{ fontWeight: "bold", color: "#FFFF" }}>
                      {timeElapsed.days}
                    </span>{" "}
                    dias{" "}
                  </div>
                  <div style={{ fontSize: "20px", marginTop: "10px" }}>
                    <span style={{ fontWeight: "bold", color: "#FFFF" }}>
                      {timeElapsed.hours}
                    </span>{" "}
                    horas{" "}
                    <span style={{ fontWeight: "bold", color: "#FFFF" }}>
                      {timeElapsed.minutes}
                    </span>{" "}
                    minutos e{" "}
                    <span style={{ fontWeight: "bold", color: "#FFFF" }}>
                      {timeElapsed.seconds}
                    </span>{" "}
                    segundos
                  </div>
                </div>
              </TimeCounter>
            </CDSection>
            <Linha />
            <TSection>
              <h1 style={{ fontSize: "25px", marginTop: "20px" }}>
                Oi princesa ❤️
              </h1>
              <Lparagraph>
                Só passando pra te dizer que eu te amo muito, e agradeço todos
                os dias pelo nosso encontro
              </Lparagraph>
              <Linha />
              <Lparagraph>
                Espero passar todos os dias da minha vida ao seu lado
              </Lparagraph>
            </TSection>
          </Container>
        </FadeContainer>
      )}
    </>
  );
}

export default App;
