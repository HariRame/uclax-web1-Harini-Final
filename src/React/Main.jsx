import React from 'react';
import {Switch,Route} from 'react-router-dom'

import Welcome from './Pages/Welcome.jsx'
import Contact from './Pages/Contact.jsx'
import Services from './Pages/Services.jsx'
import Login from './Pages/Login.jsx'

const Main = () => {
    return(
       <main>
           <Switch>
               <Route path ='/services' component = {Services} />
               <Route path ='/contact' component = {Contact} />
               <Route path = '/login' component = {Login} />
               <Route path = 'welcome' component = {Welcome} />
           </Switch>
       </main>
    );
}
export default Main;