import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

function App() {
  return (
                  <Router>
                     <Routes>
                         <Route  path={`/`} element={<div><h1>Landing page</h1></div>}/>
                         <Route  path={`/subscribe`} element={<div><h1>Subscribe for product page</h1></div>}/>
                         <Route  path={`/my/subscription`} element={<div><h1>View my subscription details page</h1></div>}/>
                         <Route  path={`/admin/login`} element={<div><h1>Admin login page</h1></div>}/>
                         <Route  path={`/admin/dashboard`} element={<div><h1>Admin dashboard page</h1></div>}/>
                         <Route path="*" element={<div><h1>404</h1></div>}/>
                      </Routes>
                  </Router>
  );
}

export default App;
