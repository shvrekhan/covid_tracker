import React, { useEffect } from 'react'

const Covid = () => {
   
    const getCovidData = async () =>{
        try {
            console.log("ok");
            const resp = await fetch('https://api.covid19india.org/data.json');
            const actualData =  await resp.json();
            console.log(actualData.statewise[0]);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getCovidData();
    },[]);


  return (
    <>
        <h1>Live</h1>
        <h2>COVID-19 CORONAVIRUS TRACKER</h2>
    </>
  )
}

export default Covid;