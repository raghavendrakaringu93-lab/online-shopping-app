import React from 'react'
import './WatchesPage.css'
import { watchData} from '../../data/watch'
import { Link } from 'react-router-dom'


const WatchesPage = () => {
  return (
    <>
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
                       <strong>{brand}</strong>
                       <p>{model}</p> 
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