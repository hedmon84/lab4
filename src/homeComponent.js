
import React from 'react';
import { Link } from 'react-router-dom';


class Home  extends React.Component {




    render() {

        return (
        <ul>
            <li>
                <Link to = "/student">StudenComponent</Link>
            </li>
            
            
        </ul>
        )

        
        
    }
}


export default Home;