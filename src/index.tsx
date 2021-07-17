
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './index.css';
import MainLayout from './modules/MainLayout';

const Main = React.lazy(() => import('./pages/Main'));

const notfound = () => <div>Not found</div>


const Loading = () => <div>Loading chunk..</div>

const App: React.FC = () => {
    return (
            <Suspense fallback={<Loading />}>
                <Router>
                    <MainLayout>
                        <Switch>
                            <Route exact path="/" component={Main}/>
                            <Route component={notfound} />
                        </Switch>
                    </MainLayout>
                </Router>
            </Suspense>
            
    )
}

ReactDOM.render(<App/>,
    document.getElementById('app'),
)
