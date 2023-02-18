import React from 'react'
import { Route } from 'react-router-dom'

import Dashboard from '../dashboard/dashboard.component'
import './shop-page.styles.css'


const ShopPage = ({ match }) => (
    <div className="shop-page">
       <Route exact path={`${match.path}`} component={Dashboard}/>
    </div>
)

export default ShopPage