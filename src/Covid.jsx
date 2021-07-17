import React, {useState, useEffect } from 'react'
import './App.css'


 const Covid = () => {
    const [data, setdata] = useState([]);
        const [Dailydata, setDailydata] = useState([]);
        
        const Year =new Date().getYear();
        const getStateData = async () =>{
            const response =await fetch('https://api.covid19india.org/data.json');
            const apidata =await response.json();
            
            setdata(apidata["statewise"]);
            setDailydata(apidata["cases_time_series"]);
        }

        
        useEffect(() => {
        getStateData();
        }, [])

        return (
            <>
            <h2
                style={{backgroundColor:'#FDD2BF' ,width:'100%',lineHeight:'68px', marginBottom : '20px', textAlign : 'center'}}>INDIA STATEWISE DATA </h2>
            <div className="table-responsive " >
            <table className="table table-striped ">
                <thead>
                    <tr>
                    <th scope="col">State</th>
                    <th scope="col">Confirmed</th>
                    <th scope="col">Recovered</th>
                    <th scope="col">Active</th>
                    <th scope="col">Deaths</th>
                    <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                {
                    data.map((CurEl)=>{
                        return(
                            <tr key={CurEl.statecode}>
                            <th scope="row">{CurEl.state}</th>
                            <td>{CurEl.confirmed}</td>
                            <td>{CurEl.recovered}</td>
                            <td>{CurEl.active} </td>
                            <td>{CurEl.deaths} </td>
                            <td>{CurEl.lastupdatedtime} </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table> 
            </div>


            <h2
                style={{backgroundColor:'#FDD2BF' ,width:'100%',lineHeight:'68px', marginBottom : '20px', textAlign : 'center'}}>INDIA Daily Data </h2>
            <div className="d-flex  table-responsive " style={{padding : '0px 1.2rem'}} >
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Daily Confirmed</th>
                    <th scope="col">Daily Recovered</th>
                    <th scope="col">Daily Deaths</th>
                    <th scope="col">Total Confirmed</th>
                    <th scope="col">Total Recovered</th>
                    <th scope="col">Total Deaths</th>
                    </tr>
                </thead>
                <tbody>
                {
                    Dailydata.map((CurEl)=>{
                        return(
                            <tr keys={CurEl.datemyd}>
                            <th scope="row">{CurEl.date}</th>
                            <td>{CurEl.dailyconfirmed}</td>
                            <td>{CurEl.dailyrecovered}</td>
                            <td>{CurEl.dailydeceased} </td>
                            <td>{CurEl.totalconfirmed} </td>
                            <td>{CurEl.totalrecovered} </td>
                            <td>{CurEl.totaldeceased} </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table> 
            </div>
            
            <div
            style={{padding : '20px 50px', backgroundColor : '#171010', color : '#fafafa',textAlign : 'center'}}>
                Copyright &copy;           
                  {1900+Year } <span> Developed by : 
                <a href='https://www.instagram.com/developercubicle/' target='blank' style={{textDecoration: 'none' ,color : '#FFBCBC'}}> @DeveloperCubicals</a></span>
            </div>
            </>
        )
}

export default Covid;