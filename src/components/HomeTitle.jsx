import { Helmet } from 'react-helmet-async';
const HomeTitle = () => {
  return (
    <div>
          <Helmet>
        <meta name="Description" content="I'm Omar Fathy, a web developer who is passionate about creating elegant and functional websites that provide seamless user experiences." />
        <title >Home</title>
        <link rel="canonical" href="https://omarfathy.pages.dev" />
    </Helmet>
    </div>
  );
}

export default HomeTitle;
