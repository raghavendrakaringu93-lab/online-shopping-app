import React from 'react'
import './ComputerPage.css'
import { computerData } from '../../data/computers'
import Navbar from '../../components/navbar/Navbar'
import {Link} from 'react-router-dom'


const ComputersPage = () => {
  return (
    <>
      <Navbar/>
      <div className='CompSection'>
          {
            computerData.map((item)=>{
                const {id, image, company, model} = item;
                return (
                   <div className='comp-Card' key={id}>
                    <Link to={`/computer/${item.id}`}>
                      <div className="comp-Img">
                        <img src={image} alt=""/>
                      </div> 
                    </Link>
                    <div className="comp-Model">
                        {company}, {model}
                    </div>
                   </div>
                )
            })
          }
      </div>
    </>
  )
}

export default ComputersPage;