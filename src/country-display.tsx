interface Country {
  name: string;
  population: number;
  region: string;
  capital: string;
}

function CountryDisplay(props: Country) {
  return <div>{props.name}</div>;
}

export default CountryDisplay;
