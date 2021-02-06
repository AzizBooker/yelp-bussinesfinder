import React from 'react';


class BusinessesList extends React.Component{
    
    constructor(props){
        super(props)
        
        console.log(this.props.data)
    }

    componentDidMount(){
        const businesses=this.props.data.map((business)=>{
            return <div>{business} </div>
        })
    }

    render(){
        return(
            <div>Hello</div>
        )
    }
        
    
}


export default BusinessesList;