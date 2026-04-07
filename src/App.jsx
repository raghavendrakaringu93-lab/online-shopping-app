import React, {lazy, Suspense } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './stores/pages/HomePage/Home'
import MobilesPage from './stores/pages/MobilesPage/MobilesPage'
import ComputersPage from './stores/pages/ComputersPage/ComputersPage'

import WatchesPage from './stores/pages/WatchesPage/WatchesPage'
import MensFashion from './stores/pages/MensFashion/MensFashion'
import Women from './stores/pages/Women/Women'
import Furniture from './stores/pages/Furniture/Furniture'
import AcPage from './stores/pages/AcPage/AcPage'
import KitchenPage from './stores/pages/KitchenPage/KitchenPage'
import TvsPage from './stores/pages/TvsPage/TvsPage'
import SpeakersPage from './stores/pages/SpeakersPage/SpeakersPage'
import FridgesPage from './stores/pages/FridgesPage/FridgesPage'
import BooksPage from './stores/pages/BookPages/BooksPage'
const MobileSinglePage = lazy(() => import("./singles/MobileSinglePage/MobileSinglePage"));
const ComputerSinglePage = React.lazy(() => import("./singles/ComputerSinglePage/ComputerSinglePage"));
const WatchSinglePage = React.lazy(() => import("./singles/WatchSinglePage/WatchSinglePage"));
const MensSinglePage = React.lazy(() => import("./singles/MensSinglePage/MensSinglePage"));
const WomenSinglePage = React.lazy(() => import("./singles/WomenSinglePage/WomenSinglePage"));
const FurnitureSinglePage = React.lazy(() => import("./singles/FurnitureSinglePage/FurnitureSinglePage"));
const AcSinglePage = React.lazy(() => import("./singles/AcSinglePage/AcSinglePage"));
const KitchenSinglePage = React.lazy(() => import("./singles/KitchenSinglePage/KitchenSinglePage"));
const TvSinglePage = React.lazy(() => import("./singles/TvSinglePage/TvSinglePage"));
const SpeakerSinglePage = React.lazy(() => import("./singles/SpeakerSinglePage/SpeakerSinglePage"));
const FridgeSinglePage = React.lazy(() => import("./singles/FridgeSinglePage/FridgeSinglePage"));
const BookSinglePage = React.lazy(() => import("./singles/BookSinglePage/BookSinglePage"));
import Footer from './stores/pages/Footer/Footer'
import UserCart from './singles/UserCartItems/UserCart'





const App = () => {
  return (
    <div className="app-container">
      
      <div className="app">
        <Suspense fallback={<h3>Loading....</h3>}>
            <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Mobiles' element={<MobilesPage />} />
          <Route path='/Computers' element={<ComputersPage />} />
          <Route path='/Watches' element={<WatchesPage />} />
          <Route path='/Mens' element={<MensFashion />} />
          <Route path='/Women' element={<Women />} />
          <Route path='/Furniture' element={<Furniture />} />
          <Route path='/Ac' element={<AcPage />} />
          <Route path='/Kitchen' element={<KitchenPage />} />
          <Route path='/Tv' element={<TvsPage />} />
          <Route path='/Speakers' element={<SpeakersPage />} />
          <Route path='/Fridges' element={<FridgesPage />} />
          <Route path='/Books' element={<BooksPage />} />
          
          <Route path='/mobile/:id' element={<MobileSinglePage />} />
          <Route path='/computer/:id' element={<ComputerSinglePage />} />
          <Route path='/watch/:id' element={<WatchSinglePage />} />
          <Route path='/men/:id' element={<MensSinglePage />} />
          <Route path='/women/:id' element={<WomenSinglePage />} />
          <Route path='/furniture/:id' element={<FurnitureSinglePage />} />
          <Route path='/ac/:id' element={<AcSinglePage />} />
          <Route path='/kitchen/:id' element={<KitchenSinglePage />} />
          <Route path='/tv/:id' element={<TvSinglePage />} />
          <Route path='/speaker/:id' element={<SpeakerSinglePage />} />
          <Route path='/fridge/:id' element={<FridgeSinglePage />} />
          <Route path='/book/:id' element={<BookSinglePage />} />

          <Route path='/cart' element={<UserCart/>} />
        </Routes>

        </Suspense>

      </div>
      <Footer/>

    </div>

  )
}

export default App
