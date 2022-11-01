import React from 'react';

import './css/main.scss';

import Header from "./Header";
import Former from "./Former/";
import Link from "./Link";
import Footer from "./Footer";

class App extends React.Component {
    render() {
        return (
            <>
                <Header />

                <Former/>

                <Link />
                <Footer />
            </>
        );
    }
}

export default App;
