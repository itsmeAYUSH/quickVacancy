// import "./App.css";
// import Header from "./components/layout/header/Header";
// import { AboutUs } from "./components/pages/aboutUs/AboutUs";
// import { CareerCounselling } from "./components/pages/careerCounselling/CareerCounselling";
// import { Consulting } from "./components/pages/consulting/Consulting";
// import { Footer } from "./components/pages/footer/Footer";
// import { Homepage } from "./components/pages/homepage/Homepage";
// import { WhyQuickVacancy} from "./components/pages/whyQuickVacancy/WhyQuickVacancy";

// function App() {
//   return (
//     <div>
//       <Homepage></Homepage>
//       <Consulting></Consulting>
//       <CareerCounselling></CareerCounselling>
//       <WhyQuickVacancy></WhyQuickVacancy>
//       <Footer></Footer>
//       {/* <AboutUs></AboutUs> */}
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';
// import Header from './components/layout/header/Header';
// import { AboutUs } from './components/pages/aboutUs/AboutUs';
// import { CareerCounselling } from './components/pages/careerCounselling/CareerCounselling';
// import { Consulting } from './components/pages/consulting/Consulting';
// import { Footer } from './components/pages/footer/Footer';
// import { Homepage } from './components/pages/homepage/Homepage';
// import { WhyQuickVacancy } from './components/pages/whyQuickVacancy/WhyQuickVacancy';

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/consulting" element={<Consulting />} />
//         <Route path="/career-counselling" element={<CareerCounselling />} />
//         <Route path="/why-quick-vacancy" element={<WhyQuickVacancy />} />
//         <Route path="/about-us" element={<AboutUs />} />
//       {/* <Footer /> */}
//         {/* Add more routes as needed */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/layout/header/Header';
// import Navbar from './components/layout/navbar/Navbar'
import { AboutUs } from './components/pages/aboutUs/AboutUs';
import { CareerCounselling } from './components/pages/careerCounselling/CareerCounselling';
import { Consulting } from './components/pages/consulting/Consulting';
import { Footer } from './components/pages/footer/Footer';
import { Homepage } from './components/pages/homepage/Homepage';
import { WhyQuickVacancy } from './components/pages/whyQuickVacancy/WhyQuickVacancy';

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Homepage />
      <Consulting />
      <CareerCounselling/>
      <WhyQuickVacancy/>
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/career-counselling" element={<CareerCounselling />} />
        <Route path="/why-quick-vacancy" element={<WhyQuickVacancy />} />
        <Route path="/about-us" element={<AboutUs />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
