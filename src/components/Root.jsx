import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop';
function Home() {
  return (
    <div className='flex flex-col gap-[100px]'>
      <ScrollToTop />
      <Header />
       <Outlet/>
      <Footer />
    </div>
  )
}

export default Home;