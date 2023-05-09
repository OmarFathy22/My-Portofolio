import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
function Home() {
  return (
    <div className='flex flex-col gap-[100px]'>
      <Header />
       <Outlet/>
      <Footer />
    </div>
  )
}

export default Home;