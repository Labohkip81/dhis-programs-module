//should contain routes only
import React, {Component} from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Details from './details'
import Programs from './programs'
import Error from './error'


class Landing extends Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                    <Switch>
                   
                    <Route path='/details/:id' component={Details} />
                    <Route path='/' component={Programs} exact/>
                    <Route component={Error}/>

                    </Switch>
                </BrowserRouter>
           

            </div>

            
        )
    }
}

export default Landing