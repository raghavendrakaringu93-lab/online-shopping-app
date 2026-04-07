import React from 'react'
import './WatchesPage.css'
import { watchData} from '../../data/watch'
import Navbar from '../../components/navbar/Navbar'
import { Link } from 'react-router-dom'


const WatchesPage = () => {
  return (
    <>
      <Navbar/>
      <div className='watchSection'>
        {
            watchData.map((item)=>{
                const {id, image, brand, model} = item;
                return (
                  <div className="watch-card" key={id}>
                    <Link to={`/watch/${item.id}`} >
                      <div className="watch-Img">
                       <img src={image} alt="" />
                      </div>
                    
                    </Link>
                    <div className="watch-Model">
                        {brand}, {model}
                    </div>
                  </div>
                )
            })
        }
      </div>
    </>
  )
}

export default WatchesPage