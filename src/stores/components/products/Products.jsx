import React from 'react'
import Mobiles from '../mobiles/Mobiles'
import Computers from '../computers/Computers'
import Banner from '../banner/Banner'
import Speakers from '../speakers/Speakers'
import Tv from '../tv/Tv'
import Banner2 from '../banner2/Banner2'
import Ac from '../ac/Ac'
import Fridges from '../fridges/Fridges'
import Kitchen from '../kitchen/Kitchen'



const Products = () => {
  return (
    <div>
        <Mobiles/>
        <Computers/>
        <Banner/>
        <Speakers/>
        
        <Tv/>
        <Ac/>
        <Fridges/>
        <Kitchen/>
        
    </div>
  )
}

export default Products