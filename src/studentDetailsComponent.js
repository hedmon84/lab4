import React from 'react';
import TextField from '@material-ui/core/TextField'
class studenDetailComponent  extends React.Component {



    render() {
        return <div> 

            <TextField variant="outlined" value={this.props.match.params.id}/>
        
             </div>
        
    }
}


export default studenDetailComponent;