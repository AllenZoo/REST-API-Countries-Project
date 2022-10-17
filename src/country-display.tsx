import styled from "styled-components";

interface Country {
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: string;
}

interface WidthProp {
  width: string;
}

interface FlagProps {
  width: string;
  height: string;
}

const Flag = styled.img<FlagProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  object-fit: cover;
`;

const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  column-gap: 5px;
  margin-bottom: 5px;
`;

const Label = styled.div`
  font-weight: 600;
  color: hsl(0, 0%, 52%);
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
  background-color: white;
  height: 175px;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);
`;

const CountryName = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const CountryDisplayContainer = styled.div<WidthProp>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: ${(props) => props.width};
  max-width: ${(props) => props.width};
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  margin-top: 10px;
`;

function CountryDisplay(props: Country) {
  const width = "250px";
  const flagHeight = "150px";

  return (
    <CountryDisplayContainer width={width}>
      <Flag src={props.flag} width={width} height={flagHeight}></Flag>

      <InfoContainer>
        <CountryName>{props.name}</CountryName>
        <InfoRow>
          <Label>Population: </Label>
          <div> {props.population.toLocaleString()}</div>
        </InfoRow>
        <InfoRow>
          <Label>Region:</Label>
          <div>{props.region}</div>
        </InfoRow>
        <InfoRow>
          <Label>Capital:</Label>
          <div>{props.capital}</div>
        </InfoRow>
      </InfoContainer>
    </CountryDisplayContainer>
  );
}

export default CountryDisplay;
