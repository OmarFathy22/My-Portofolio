import Header from './Header';
import Footer from './Footer';
import { Outlet, json } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop';
import ReactGA, { set } from 'react-ga';
function Home() {


  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <div className='flex flex-col gap-[100px] relative text-[Color]'>
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