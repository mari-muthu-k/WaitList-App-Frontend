import { Suspense,lazy }  from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import Subscribe from './views/subscribe';

const LandingPage = lazy(()=>import("./views/LandingPage"));

function App() {
  return (
                <Suspense fallback={<div className="loading" />}>
                  <Router>
                     <Routes>
                         <Route  path={`/`} element={<LandingPage/>}/>
                         <Route  path={`/subscribe`} element={<Subscribe/>}/>
                         <Route  path={`/my/subscription`} element={<div><h1>View my subscription details page</h1></div>}/>
                         <Route  path={`/admin/login`} element={<div><h1>Admin login page</h1></div>}/>
                         <Route  path={`/admin/dashboard`} element={<div><h1>Admin dashboard page</h1></div>}/>
                         <Route path="*" element={<div><h1>404</h1></div>}/>
                      </Routes>
                  </Router>
                </Suspense>
  );
}

export default App;
