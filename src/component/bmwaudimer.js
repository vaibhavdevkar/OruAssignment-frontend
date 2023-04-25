import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'

const Bmwaudimer = () => {

        const [data , setData] = useState([])

        const getdataStartm = async () => {
            try{
                const res = await axios.get("/api/bmwaudimer")
                setData(res.data)

            }catch(err){
                console.log(err)
            }
        }

        useEffect(() => {
            getdataStartm()
        }, [])


        return (
            <div style={{ margin: '20px', padding: '20px' }}>
                <h3 style={{textAlign:"left"}}>Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.</h3>
              <table style={{ border: '1px solid black', borderCollapse: 'collapse', textAlign: 'center' }}>
                <thead>
                  <tr style={{ border: '1px solid black' }}>
                    <th style={{ border: '1px solid black', padding: '10px' }}>ID</th>
                    <th style={{ border: '1px solid black', padding: '10px' }}>First Name</th>
                    <th style={{ border: '1px solid black', padding: '10px' }}>Last Name</th>
                    <th style={{ border: '1px solid black', padding: '10px' }}>Email</th>
                    <th style={{ border: '1px solid black', padding: '10px' }}>Gender</th>
                    <th style={{ border: '1px solid black', padding: '10px' }}>Income</th>
                    <th style={{ border: '1px solid black', padding: '10px' }}>City</th>
                    <th style={{ border: '1px solid black', padding: '10px' }}>Car</th>
                    <th style={{ border: '1px solid black', padding: '10px' }}>Phone Price</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.id} style={{ border: '1px solid black' }}>
                      <td style={{ border: '1px solid black', padding: '10px' }}>{item.id}</td>
                      <td style={{ border: '1px solid black', padding: '10px' }}>{item.first_name}</td>
                      <td style={{ border: '1px solid black', padding: '10px' }}>{item.last_name}</td>
                      <td style={{ border: '1px solid black', padding: '10px' }}>{item.email}</td>
                      <td style={{ border: '1px solid black', padding: '10px' }}>{item.gender}</td>
                      <td style={{ border: '1px solid black', padding: '10px' }}>{item.income}</td>
                      <td style={{ border: '1px solid black', padding: '10px' }}>{item.city}</td>
                      <td style={{ border: '1px solid black', padding: '10px' }}>{item.car}</td>
                      <td style={{ border: '1px solid black', padding: '10px' }}>{item.phone_price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
 };

export default Bmwaudimer