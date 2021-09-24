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
import Login from './screens/login/Login.jsx';
import Register from './screens/register/Register.jsx';
import WorkExperience from './screens/work-experience/WorkExperience';
import ContactMe from './screens/contact-me/ContactMe';

const App = () => {
    return (
        <AuthProvider>
            <ThemeProvider theme={theme}>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route exact path="/login" component={Login}></Route>
                        <Route exact path="/register" component={Register}></Route>
                        <Route exact path="/work-experience" component={WorkExperience}></Route>
                        <Route exact path="/contact" component={ContactMe}></Route>


                        {/* <Route exact path="/discover" component={Discover}></Route>
                        <Route path="/discover/:id" component={RecipeDetail}></Route> */}
                    </Switch>
                </Router>
            </ThemeProvider>
        </AuthProvider >
    );
}

export default App;