import React from 'react';
import Button from '@material-ui/core/Button'
class notFoundComponent  extends React.Component {

    onsubmit=()=>{
        this.props.history.push('/')
    }



    render() {
        return <div> 

            <Button variant = "contained" color = "secundary" onClick={this.onsubmit}>
            Regresar

        </Button>
             </div>
        
    }
}


export default notFoundComponent;