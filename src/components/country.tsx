import * as React from 'react';
import styles from "./country.module.scss";

export interface IProps {
    
}

export interface IState {
    countryInfo: ICountryInfo;
    searchText: string;
    notExist: boolean;
}

export interface ICountryInfo {
    iso2Code: string;
        name: string;
        region: IRegion;
        capitalCity: string;
        longitude: string;
        latitude: string;}

export interface IRegion {
value: string;
}
 
class Country extends React.Component<IProps, IState> {
    public state = {countryInfo: { iso2Code: "", name: "", region: { value: ""}, capitalCity: "", longitude: "", latitude: ""}, searchText: "", notExist: false}

async componentDidUpdate(prevProps: IProps, prevState: IState, countryInfo: JSON) {
    if (prevState.searchText !== this.state.searchText) {
        const IOS = this.state.searchText;
        const uri =
        "http://api.worldbank.org/v2/country/" + IOS + "?format=json"
        const response = await fetch(uri);
        const jsonBody = await response.json();
        const firstElement = jsonBody[1];
        try {
        console.log(firstElement)
        const secondElement = firstElement[0];
        console.log(secondElement)
        this.setState({ countryInfo: secondElement, searchText: this.state.searchText });
        console.log(this.state);
            if (this.state.countryInfo.name === "Not classified") {
        alert("Please enter a valid IOS code")
    }}
      catch (Exception) { alert("Please enter a valid IOS code")}}}

      public handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const input = event.target.value;
        if (input.length === 2) {
            this.setState({countryInfo: { iso2Code: "", name: "", region: { value: ""}, capitalCity: "", longitude: "", latitude: ""}, searchText: input, notExist: false})
        }
        }

    render() { 
        return ( <main className={styles.countrycontainer}>
  <input type="text" placeholder="Enter an IOS code here e.g. AU" onChange={this.handleSearch}/>
  <article className={
         this.state.notExist ? styles.countryNotFound : styles.country}>
<h2>Country: {this.state.countryInfo.name}</h2>
<p>Region: {this.state.countryInfo.region.value}</p>
<p>Capital City: {this.state.countryInfo.capitalCity}</p>
<p>Longitude: {this.state.countryInfo.longitude}</p>
<p>Latitude: {this.state.countryInfo.latitude}</p>
  </article>
        </main> );
    }
}
 
export default Country;