import React from 'react';
import propTypes from 'prop-types';

class Details   extends React.Component {

   
    render() {
        return <div><center>

            <h2> {this.props.detailTitle}</h2>
            <h2> {this.props.detailValue}</h2>

            </center>

            </div>
    }
};

Details.propTypes={
    detailTitle:propTypes.string ,
    detailValue:propTypes.number

}

export default Details; 