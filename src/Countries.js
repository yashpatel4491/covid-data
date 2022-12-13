import React from "react";

class Countries extends React.Component{
    
    render(){
        const {countries} = this.props;
        return(
            <tr>
                <td id="start2">{countries.Country}</td>
                <td>{countries.NewConfirmed}</td>
                <td>{countries.TotalRecovered}</td>
                <td id="end2">{countries.TotalDeaths}</td>
                
            </tr>

        )
    }
}

export default Countries;