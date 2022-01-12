import React from 'react';

class Box extends React.Component{
    render(){
        const { boxValues, onBoxClicked, selectedBox } = this.props
        const boxValue = boxValues.value
        return(
            <div className={`box ${selectedBox.includes(boxValue) ? 'clicked' : ''}`} onClick={() => onBoxClicked(boxValues.value)}>
                {/* {boxValue} */}
            </div>
        );
    }
}

export default Box;