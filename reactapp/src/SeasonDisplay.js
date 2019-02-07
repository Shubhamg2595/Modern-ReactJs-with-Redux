import React from 'react'


//function to determine what the season is..

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    }
    else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {


    const season = getSeason(props.lat, new Date().getMonth())
    const body= (season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the Beach')
    const icon = (season==='winter'?'snowflake':'sun')
    // console.log(season)
    return (
        <div>
        <i className={`${icon} icon`} />
           <h1> {body}</h1>
        <i className={`${icon} icon`} />
           </div>
    )
}


export default SeasonDisplay;
