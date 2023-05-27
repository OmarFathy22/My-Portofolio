import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop';
function Home() {
  return (
    <div className='flex flex-col gap-[100px] relative'>
      <ScrollToTop />
      <Header />
       <div>
        <Outlet/>
       </div>
      <Footer />
    </div>
  )
}

export default Home;