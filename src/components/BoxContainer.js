import React from 'react';
import Box from './Box';
import { NumberOfGrids, BoxActions } from '../utils/Constants';
import { connect } from 'react-redux';

class BoxContainer extends React.Component {

    onBoxClicked = (value) => {
        const { dispatch } = this.props
        console.log("Clicked Value: ",value)
        dispatch({
            type: BoxActions.SET_SELECTED_BOX,
            payload: {
                value: value
            }
        })
    }

    render() {
        const { boxData, selectedBox } = this.props
        console.log("boxData: ",boxData)
        return (
            <div className="box-grid-container">
                {
                    // NumberOfGrids.map((value,index) => <Box key={index} onBoxClicked={this.onBoxClicked} boxValues={value}/>)
                    boxData.map((value,index) => {
                        console.log("Map value",value)
                        return <Box key={index} onBoxClicked={this.onBoxClicked} boxValues={value} selectedBox={selectedBox} />
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        boxData: state.rootReducer.getDetails.boxData,
        selectedBox: state.rootReducer.getDetails.selectedArr,
    }
}


export default connect(mapStateToProps)(BoxContainer);