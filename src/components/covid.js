import React, { useEffect } from 'react'
import './covid.css' ;

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
    <section>
        <h1>Live</h1>
        <h2>COVID-19 CORONAVIRUS TRACKER</h2>

        <ul>
            <l1 className = "card">
                <div className='card_main'>
                    <div className="card_inner">
                        <p className='card_name'><span>OUR</span>Country</p>
                        <p className='card_total card_small'>INDIA</p>
                    </div>

                </div>

            </l1>
        </ul>
        </section>
    </>
  )
}

export default Covid;