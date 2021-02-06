import React from 'react';


class BusinessesList extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {data:props.data};
        console.log(this.state.data)
    }

    render(){
        return(
            <div>Hello</div>
        )
    }
        
    
}


export default BusinessesList;