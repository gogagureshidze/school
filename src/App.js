import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Paper1 from "./components/papers/paper1/Paper1";

function App() {
  const imageUrls = [
    process.env.PUBLIC_URL + "/images/1-1.jpeg",
    process.env.PUBLIC_URL + "/images/1-2.jpeg",
    process.env.PUBLIC_URL + "/images/1-3.jpeg",
    process.env.PUBLIC_URL + "/images/1-4.jpeg",
    process.env.PUBLIC_URL + "/images/1-5.jpeg",
    process.env.PUBLIC_URL + "/images/1-6.jpeg",
    process.env.PUBLIC_URL + "/images/1-7.jpeg",
    process.env.PUBLIC_URL + "/images/1-8.jpeg",
  ];

  const imageUrls2 = [
    process.env.PUBLIC_URL + "/images/2-1.jpeg",
    process.env.PUBLIC_URL + "/images/2-2.jpeg",
    process.env.PUBLIC_URL + "/images/2-3.jpeg",
    process.env.PUBLIC_URL + "/images/2-4.jpeg",
    process.env.PUBLIC_URL + "/images/2-5.jpeg",
    process.env.PUBLIC_URL + "/images/2-6.jpeg",
  ];

  const imageUrls3 = [
    process.env.PUBLIC_URL + "/images/3-1.jpeg",
    process.env.PUBLIC_URL + "/images/3-2.jpeg",
    process.env.PUBLIC_URL + "/images/3-3.jpeg",
    process.env.PUBLIC_URL + "/images/3-4.jpeg",
    process.env.PUBLIC_URL + "/images/3-5.jpeg",
    process.env.PUBLIC_URL + "/images/3-6.jpeg",
  ];

  const imageUrls4 = [
    process.env.PUBLIC_URL + "/images/4-1.jpeg",
    process.env.PUBLIC_URL + "/images/4-2.jpeg",
    process.env.PUBLIC_URL + "/images/4-3.jpeg",
    process.env.PUBLIC_URL + "/images/4-4.jpeg",
  ];

  const imageUrls5 = [
    process.env.PUBLIC_URL + "/images/5-1.jpeg",
    process.env.PUBLIC_URL + "/images/5-2.jpeg",
    process.env.PUBLIC_URL + "/images/5-3.jpeg",
    process.env.PUBLIC_URL + "/images/5-4.jpeg",
    process.env.PUBLIC_URL + "/images/5-5.jpeg",
    process.env.PUBLIC_URL + "/images/5-6.jpeg",
  ];

  const imageUrls6 = [
    process.env.PUBLIC_URL + "/images/6-1.jpeg",
    process.env.PUBLIC_URL + "/images/6-2.jpeg",
    process.env.PUBLIC_URL + "/images/6-3.jpeg",
    process.env.PUBLIC_URL + "/images/6-4.jpeg",
    process.env.PUBLIC_URL + "/images/6-5.jpeg",
    process.env.PUBLIC_URL + "/images/6-6.jpeg",
  ];

  const imageUrls7 = [
    process.env.PUBLIC_URL + "/images/7_8-1.jpeg",
    process.env.PUBLIC_URL + "/images/7_8-2.jpeg",
    process.env.PUBLIC_URL + "/images/7_8-3.jpeg",
    process.env.PUBLIC_URL + "/images/7_8-4.jpeg",
    process.env.PUBLIC_URL + "/images/7_8_5.jpeg",
    process.env.PUBLIC_URL + "/images/7_8-6.jpeg",
    process.env.PUBLIC_URL + "/images/7_8-7.jpeg",
    process.env.PUBLIC_URL + "/images/7_8-8.jpeg",
  ];
  const imageUrls8 = [
    process.env.PUBLIC_URL + "/images/9-1.jpeg",
    process.env.PUBLIC_URL + "/images/9-2.jpeg",
    process.env.PUBLIC_URL + "/images/9-3.jpeg",
    process.env.PUBLIC_URL + "/images/9-4.jpeg",
    process.env.PUBLIC_URL + "/images/9-5.jpeg",
    process.env.PUBLIC_URL + "/images/9-6.jpeg",
  ];

  const imageUrls9 = [
    process.env.PUBLIC_URL + "/images/10-1.jpeg",
    process.env.PUBLIC_URL + "/images/10-2.jpeg",
    process.env.PUBLIC_URL + "/images/10-3.jpeg",
    process.env.PUBLIC_URL + "/images/10-4.jpeg",
    process.env.PUBLIC_URL + "/images/10-5.jpeg",
    process.env.PUBLIC_URL + "/images/10-6.jpeg",
  ];
  

  const imageUrls10 = [
    process.env.PUBLIC_URL + "/images/11-1.jpeg",
    process.env.PUBLIC_URL + "/images/11-2.jpeg",
    process.env.PUBLIC_URL + "/images/11-3.jpeg",
    process.env.PUBLIC_URL + "/images/11-4.jpeg",
    process.env.PUBLIC_URL + "/images/11-5.jpeg",
    process.env.PUBLIC_URL + "/images/11-6.jpeg",
  ];

  const imageUrls11 = [
    process.env.PUBLIC_URL + "/images/12-1.jpeg",
    process.env.PUBLIC_URL + "/images/12-2.jpeg",
    process.env.PUBLIC_URL + "/images/12-3.jpeg",
    process.env.PUBLIC_URL + "/images/12-4.jpeg",
    process.env.PUBLIC_URL + "/images/12-5.jpeg",
    process.env.PUBLIC_URL + "/images/12-6.jpeg",
  ];

  const imageUrls13 = [
    process.env.PUBLIC_URL + "/images/13-1.jpeg",
    process.env.PUBLIC_URL + "/images/13-2.jpeg",
    process.env.PUBLIC_URL + "/images/13-3.jpeg",
    process.env.PUBLIC_URL + "/images/13-4.jpeg",
    process.env.PUBLIC_URL + "/images/13-5.jpeg",
    process.env.PUBLIC_URL + "/images/13-6.jpeg",
  ];

  const imageUrls14 = [
    process.env.PUBLIC_URL + "/images/14-1.jpeg",
    process.env.PUBLIC_URL + "/images/14-2.jpeg",
    process.env.PUBLIC_URL + "/images/14-3.jpeg",
    process.env.PUBLIC_URL + "/images/14-4.jpeg",
    process.env.PUBLIC_URL + "/images/14-5.jpeg",
    process.env.PUBLIC_URL + "/images/14-6.jpeg",
  ];

  const imageUrls16 = [
    process.env.PUBLIC_URL + "/images/15_16-1.jpeg",
    process.env.PUBLIC_URL + "/images/15_16-2.jpeg",
    process.env.PUBLIC_URL + "/images/15_16-3.jpeg",
    process.env.PUBLIC_URL + "/images/15_16-4.jpeg",
    process.env.PUBLIC_URL + "/images/15_16-5.jpeg",
    process.env.PUBLIC_URL + "/images/15_16-6.jpeg",
    process.env.PUBLIC_URL + "/images/15_16-7.jpeg",
    process.env.PUBLIC_URL + "/images/15_16-8.jpeg",    
  ];

  const imageUrls17 = [
    process.env.PUBLIC_URL + "/images/17-1.jpeg",
    process.env.PUBLIC_URL + "/images/17-2.jpeg",
    process.env.PUBLIC_URL + "/images/17-3.jpeg",
    process.env.PUBLIC_URL + "/images/17-4.jpeg",
    process.env.PUBLIC_URL + "/images/17-5.jpeg",
    process.env.PUBLIC_URL + "/images/17-6.jpeg",
  ];

  const imageUrls18 = [
    process.env.PUBLIC_URL + "/images/18-1.jpeg",
    process.env.PUBLIC_URL + "/images/18-2.jpeg",
    process.env.PUBLIC_URL + "/images/18-3.jpeg",
    process.env.PUBLIC_URL + "/images/18-4.jpeg",
    process.env.PUBLIC_URL + "/images/18-5.jpeg",
    process.env.PUBLIC_URL + "/images/18-6.jpeg",
  ];

  const imageUrls19 = [
    process.env.PUBLIC_URL + "/images/19-1.jpeg",
    process.env.PUBLIC_URL + "/images/19-2.jpeg",
    process.env.PUBLIC_URL + "/images/19-3.jpeg",
    process.env.PUBLIC_URL + "/images/19-4.jpeg",
    process.env.PUBLIC_URL + "/images/19-5.jpeg",
    process.env.PUBLIC_URL + "/images/19-6.jpeg",
    process.env.PUBLIC_URL + "/images/19-7.jpeg",
    process.env.PUBLIC_URL + "/images/19-8.jpeg",
  ];

  const imageUrls20 = [
    process.env.PUBLIC_URL + "/images/20-1.jpeg",
    process.env.PUBLIC_URL + "/images/20-2.jpeg",
    process.env.PUBLIC_URL + "/images/20-3.jpeg",
    process.env.PUBLIC_URL + "/images/20-4.jpeg",
    process.env.PUBLIC_URL + "/images/20-5.jpeg",
    process.env.PUBLIC_URL + "/images/20-6.jpeg",
    process.env.PUBLIC_URL + "/images/20-7.jpeg",
    process.env.PUBLIC_URL + "/images/20-8.jpeg",
  ];

  const imageUrls21 = [
    process.env.PUBLIC_URL + "/images/21-1.jpeg",
    process.env.PUBLIC_URL + "/images/21-2.jpeg",
    process.env.PUBLIC_URL + "/images/21-3.jpeg",
    process.env.PUBLIC_URL + "/images/21-4.jpeg",
    process.env.PUBLIC_URL + "/images/21-5.jpeg",
    process.env.PUBLIC_URL + "/images/21-6.jpeg",
  ];

  const imageUrls22 = [
    process.env.PUBLIC_URL + "/images/22-1.jpeg",
    process.env.PUBLIC_URL + "/images/22-2.jpeg",
    process.env.PUBLIC_URL + "/images/22-3.jpeg",
    process.env.PUBLIC_URL + "/images/22-4.jpeg",
    process.env.PUBLIC_URL + "/images/22-5.jpeg",
    process.env.PUBLIC_URL + "/images/22-6.jpeg",
    process.env.PUBLIC_URL + "/images/22-7.jpeg",
    process.env.PUBLIC_URL + "/images/22-8.jpeg",
    process.env.PUBLIC_URL + "/images/22-9.jpeg",
    process.env.PUBLIC_URL + "/images/22-10.jpeg",
    process.env.PUBLIC_URL + "/images/22-11.jpeg",
    process.env.PUBLIC_URL + "/images/22-12.jpeg",
    process.env.PUBLIC_URL + "/images/22-13.jpeg",
    process.env.PUBLIC_URL + "/images/22-14.jpeg",
    process.env.PUBLIC_URL + "/images/22-15.jpeg",
    process.env.PUBLIC_URL + "/images/22-16.jpeg",
  ];

  const imageUrls23 = [
    process.env.PUBLIC_URL + "/images/23-1.jpeg",
    process.env.PUBLIC_URL + "/images/23-2.jpeg",
    process.env.PUBLIC_URL + "/images/23-3.jpeg",
    process.env.PUBLIC_URL + "/images/23-4.jpeg",
    process.env.PUBLIC_URL + "/images/23-5.jpeg",
    process.env.PUBLIC_URL + "/images/23-6.jpeg",
    process.env.PUBLIC_URL + "/images/23-7.jpeg",
    process.env.PUBLIC_URL + "/images/23-8.jpeg",
  ];

  const imageUrlsNew = [
    process.env.PUBLIC_URL + "/images/0-1.jpeg",
    process.env.PUBLIC_URL + "/images/0-2.jpeg",
    process.env.PUBLIC_URL + "/images/0-3.jpeg",
    process.env.PUBLIC_URL + "/images/0-4.jpeg",
    process.env.PUBLIC_URL + "/images/0-5.jpeg",
    process.env.PUBLIC_URL + "/images/0-6.jpeg",
    process.env.PUBLIC_URL + "/images/0-7.jpeg",
    process.env.PUBLIC_URL + "/images/0-8.jpeg",
    process.env.PUBLIC_URL + "/images/0-9.jpeg",
    process.env.PUBLIC_URL + "/images/0-10.jpeg",
    process.env.PUBLIC_URL + "/images/0-11.jpeg",
    process.env.PUBLIC_URL + "/images/0-12.jpeg",
    process.env.PUBLIC_URL + "/images/0-13.jpeg",
    process.env.PUBLIC_URL + "/images/0-14.jpeg",
    process.env.PUBLIC_URL + "/images/0-15.jpeg",
    process.env.PUBLIC_URL + "/images/0-16.jpeg",
    process.env.PUBLIC_URL + "/images/0-17.jpeg",
    process.env.PUBLIC_URL + "/images/0-18.jpeg",
    process.env.PUBLIC_URL + "/images/0-19.jpeg",
    process.env.PUBLIC_URL + "/images/0-20.jpeg",
    process.env.PUBLIC_URL + "/images/0-21.jpeg",
    process.env.PUBLIC_URL + "/images/0-22.jpeg",
    process.env.PUBLIC_URL + "/images/0-23.jpeg",
    process.env.PUBLIC_URL + "/images/0-24.jpeg",
    process.env.PUBLIC_URL + "/images/0-25.jpeg",
    process.env.PUBLIC_URL + "/images/0-26.jpeg",
    process.env.PUBLIC_URL + "/images/0-27.jpeg",
    process.env.PUBLIC_URL + "/images/0-27.jpeg",
    process.env.PUBLIC_URL + "/images/0-28.jpeg",
    process.env.PUBLIC_URL + "/images/0-29.jpeg",
    process.env.PUBLIC_URL + "/images/0-30.jpeg",
    process.env.PUBLIC_URL + "/images/0-31.jpeg",
  ];

  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/school" element={<Home />} />

        <Route path="/paper/1" element={<Paper1 imageUrls={imageUrls} />} />
        <Route path="/paper/2" element={<Paper1 imageUrls={imageUrls2} />} />
        <Route path="/paper/3" element={<Paper1 imageUrls={imageUrls3} />} />
        <Route path="/paper/4" element={<Paper1 imageUrls={imageUrls4} />} />
        <Route path="/paper/5" element={<Paper1 imageUrls={imageUrls5} />} />
        <Route path="/paper/6" element={<Paper1 imageUrls={imageUrls6} />} />
        <Route path="/paper/7" element={<Paper1 imageUrls={imageUrls7} />} />
        <Route path="/paper/8" element={<Paper1 imageUrls={imageUrls8} />} />
        <Route path="/paper/9" element={<Paper1 imageUrls={imageUrls9} />} />
        <Route path="/paper/10" element={<Paper1 imageUrls={imageUrls10} />} />
        <Route path="/paper/11" element={<Paper1 imageUrls={imageUrls11} />} />
        <Route path="/paper/13" element={<Paper1 imageUrls={imageUrls13} />} />
        <Route path="/paper/14" element={<Paper1 imageUrls={imageUrls14} />} />
        <Route path="/paper/16" element={<Paper1 imageUrls={imageUrls16} />} />
        <Route path="/paper/17" element={<Paper1 imageUrls={imageUrls17} />} />
        <Route path="/paper/18" element={<Paper1 imageUrls={imageUrls18} />} />
        <Route path="/paper/19" element={<Paper1 imageUrls={imageUrls19} />} />
        <Route path="/paper/20" element={<Paper1 imageUrls={imageUrls20} />} />
        <Route path="/paper/21" element={<Paper1 imageUrls={imageUrls21} />} />
        <Route path="/paper/22" element={<Paper1 imageUrls={imageUrls22} />} />
        <Route path="/paper/23" element={<Paper1 imageUrls={imageUrls23} />} />
        <Route
          path="/paper/new"
          element={<Paper1 imageUrls={imageUrlsNew} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
