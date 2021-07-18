
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './index.css';
import MainLayout from './modules/MainLayout';
import Spinner from './modules/Spinner';
import { store } from './store';

const Main = React.lazy(() => import('./pages/Main'));
const Starship = React.lazy(() => import('./pages/Starship'));
const Compare = React.lazy(() => import('./pages/Compare'));
const NotFound = React.lazy(() => import('./modules/NotFound'));

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Suspense fallback={<Spinner />}>
                <Router>
                    <MainLayout>
                        <Switch>
                            <Route exact path="/" component={Main}/>
                            <Route exact path="/starship/:id" component={Starship} />
                            <Route exact path="/compare" component={Compare} />
                            <Route component={NotFound} />
                        </Switch>
                    </MainLayout>
                </Router>
            </Suspense>
        </Provider>   
    )
}

ReactDOM.render(<App/>,
    document.getElementById('app'),
)
