import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Footer from './Pages/Shared/Footer';

import Navbar from './Pages/Shared/Navbar';
import Shop from './Pages/Shop/Shop';
// const Home = React.lazy(() => import('./Pages/Home/Home'));
const Error = React.lazy(() => import('./Pages/Shared/Error'));

const App = () => {
  // const [loaded] = useFonts({
  //   "Antonio-Medium": require("../src/Theme/typography/antonio-medium"),
  //   "Spartan-Bold": require(""),
  //   "Spartan-Regular": require(""),
  // });
  // if (!loaded) {
  //   return <p>Font is loading...</p>
  // }
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Shop />} />
          {/* <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} />
          </Route>
        </Route> */}
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer/>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;