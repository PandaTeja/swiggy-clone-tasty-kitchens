import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import Footer from '../Footer'
import Header from '../Header'
import Carousel from '../Carousel'
import PopularRestaurants from '../PopularRestaurants'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Header />
      <div className="home-container">
        <Carousel />
        <PopularRestaurants />
      </div>
      <Footer />
    </>
  )
}

export default Home
