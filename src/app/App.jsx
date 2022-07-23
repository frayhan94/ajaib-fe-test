import { useEffect, Suspense } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import { SpinnerLoading } from '../components';

import routes from '../routes';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const location = useLocation();

  return (
    <div className="relative w-full bg-white max-w-screen-md mx-auto">
      <ScrollToTop />
      <Suspense fallback={<SpinnerLoading />}>
        <Switch location={location} key={location.key}>
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              <Component />
            </Route>
          ))}
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
