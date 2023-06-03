import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop';
import ReactGA from 'react-ga';

function Home() {
  ReactGA.pageview(window.location.pathname + window.location.search);
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