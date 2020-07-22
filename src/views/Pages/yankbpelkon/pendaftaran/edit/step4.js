import React, { Component } from 'react'
import { Button } from 'reactstrap'

class Step4 extends Component{

    render(){
        return(
            <div>
                <p>tes connection 4</p>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <Button className="btn btn-warning" onClick={this.props.buttonBack}>Sebelumnya</Button>
                </div>
            </div>
        )
    }
}

export default Step4