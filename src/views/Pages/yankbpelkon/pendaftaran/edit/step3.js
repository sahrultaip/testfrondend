import React, { Component } from 'react'
import { Button } from 'reactstrap'

class Step3 extends Component{

    render(){
        return(
            <div>
                <p>tes connection 3</p>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <Button className="btn btn-warning" onClick={this.props.buttonBack}>Sebelumnya</Button>
                    <Button className="btn btn-info" onClick={this.props.nextStep}>Selanjutnya</Button>
                </div>
            </div>
        )
    }
}

export default Step3