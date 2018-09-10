//should contain details page 
import React, {Component} from 'react'


const headers ={
    headers:{
        'Authorization': `Basic ${btoa('evanpersie3@gmail.com:skolastikA97')}`
}
}


class  Details extends Component{
    state = {
        activeDetails: []
    }

    componentDidMount = () => {
        fetch(`http://197.136.81.99:8082/test/api/programDataElements/${this.props.match.params.id}`, headers //youtube guy this.props.location.state.dynamicData
        ).then( (Response)=> Response.json() )
        .then(( findresponse ) => {
            
            this.setState({
                activeDetails:findresponse,
                       

            })
            console.log( this.state.activeDetails)
            
        })

    }

    render(){
        const deets = this.state.activeDetails;
        
        return(
            <div>
                <h1>{this.props.match.params.id}</h1>

                <span>displayName : </span><h5>{deets.displayName}</h5>
                <span>shortName : </span><h5>{deets.shortName}</h5>

                <span>created : </span><h5>{deets.created}</h5>
                <span>lastUpdated : </span><h5>{deets.lastUpdated}</h5>

                <span>dimensionItemType : </span><h5>{deets.dimensionItemType}</h5>
                <span>dimensionItem : </span><h5>{deets.dimensionItem}</h5>
                
                <span>aggregationType : </span><h5>{deets.aggregationType}</h5>
                <span>valueType : </span><h5>{deets.valueType}</h5>
                
            </div>
        );
    }

}

export default Details;