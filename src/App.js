import './App.css';
import { Routes, Route } from "react-router-dom";
import { Grommet, grommet } from 'grommet'
import Home from './components/Home';
import About from './components/About';
import NoMatch from './components/NoMatch';
import Layout from './components/Layout';

function App() {
  return (
    <Grommet className="App" theme={grommet}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </Grommet>
  );
}

export default App;
