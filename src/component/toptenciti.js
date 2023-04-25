import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'

export const Toptencities = () => {

    const [data , setData] = useState([])


    const getDataTopTenCity = async () => {
        try{
            const res = await axios.get("/api/top-ten-cities")
            setData(res.data)

        }catch(err){
            console.log(err)
        }
    }


    useEffect(() => {
        getDataTopTenCity()

    }, [])

    return (
        <div style={{ margin: '20px', padding: '20px' }}>
            <h3 style={{textAlign:"left"}}>Male Users which have phone price greater than 10,000.</h3>
          <table style={{ border: '1px solid black', borderCollapse: 'collapse', textAlign: 'center' }}>
            <thead>
              <tr style={{ border: '1px solid black' }}>
               
                <th style={{ border: '1px solid black', padding: '10px' }}>Top Ten Cities</th>
                <th style={{ border: '1px solid black', padding: '10px' }}>Max users</th>
                <th style={{ border: '1px solid black', padding: '10px' }}>Total AverageIncome</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id} style={{ border: '1px solid black' }}>
                  {/* <td style={{ border: '1px solid black', padding: '10px' }}>{item.id}</td> */}
                  <td style={{ border: '1px solid black', padding: '10px' }}>{item.city}</td>
                  <td style={{ border: '1px solid black', padding: '10px' }}>{item.count}</td>
                  <td style={{ border: '1px solid black', padding: '10px' }}>{item.averageIncome}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    };

    export default Toptencities