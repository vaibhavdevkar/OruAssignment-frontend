import React from 'react'
import {NavLink} from 'react-router-dom'
import './listalldata.css'

const Listalldata = () => {
  return (
    <div className='listalldata' >
        <NavLink to="/bmfive" >1. Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.</NavLink> <br /><br /><br />
        <NavLink to="/max">2. Male Users which have phone price greater than 10,000.</NavLink><br /><br /><br />
        <NavLink to="/startm"> 3. Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.</NavLink><br /><br /><br />
        <NavLink to="/bmwaudimer">4. Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.</NavLink> <br /><br /><br />
        <NavLink to="/toptencities">5. Show the data of top 10 cities which have the highest number of users and their average income.</NavLink><br /><br /><br />
    </div>
  )
}

export default Listalldata