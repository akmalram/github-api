import React, {Fragment} from 'react';
import UserInfo from '../UserInfo';
import UserSearch from '../UserSearch';
import Navbar from '../Navbar';

import {
    GlobalStyles
} from './AppStyles';

function App() {
    return (
        <Fragment> 
            <Navbar />
            <UserSearch />
            <UserInfo />
            <GlobalStyles />
        </Fragment>
    )
}

export default App;
