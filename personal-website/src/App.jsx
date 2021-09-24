import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { AuthProvider } from "./Auth";
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './themes';
import Home from './screens/home/Home';

const App = () => {
    return (
        <AuthProvider>
            <ThemeProvider theme={theme}>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        {/* <Route exact path="/discover" component={Discover}></Route>
                        <Route path="/discover/:id" component={RecipeDetail}></Route> */}
                    </Switch>
                </Router>
            </ThemeProvider>
        </AuthProvider >
    );
}

export default App;