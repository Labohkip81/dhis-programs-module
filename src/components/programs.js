//should contain list of programs
import React, {Component} from 'react'

import { Link } from 'react-router-dom'


const headers ={
    headers:{
        'Authorization': `Basic ${btoa('evanpersie3@gmail.com:skolastikA97')}`
        //'Authorization': `Basic ${btoa('admin:district')}`
}
}

class Programs extends Component{
    constructor(){
        super();
        this.state={
            data: [],
            filterText: ''
        }

    }

    

    componentDidMount(){
        //let filters = this.state.filterText
        //http://197.136.81.99:8082/test/api/programDataElements.json?fields=:all&paging=false  ---- default
        fetch('http://197.136.81.99:8082/test/api/programDataElements.json?fields=:all&paging=false ', headers
        ).then( (Response)=> Response.json() )
        .then(( findresponse) => { //filter the findresponse using the filters variable to display only what is in the input
            

            console.log(findresponse.programDataElements[0]) //hapa ndio jackpot


            this.setState({
                data:findresponse.programDataElements,
            })
        })


    }        


    updateSearch(event){
        this.setState({
            filterText:event.target.value.substr(0,20)
        })
        console.log(this.state.filterText)
        
        
    }
    

    render(){
        return(
            <div>

            <input type='text' value={this.state.search} onChange={this.updateSearch.bind(this)} />  

                 {/* nameslist is == to data */}
                <h1>Ongoing programs</h1>
                


               
               {    this.state.data
               .filter( dynamicData =>{

                    //console.log(dynamicData.name)
                    return dynamicData.name[0].toLowerCase().indexOf(this.state.filterText.toLowerCase()) >= 0
               } )
               .map( (dynamicData,key) => 
              
               <div key={dynamicData.id} >

                    <Link to={{ pathname:`/details/${ dynamicData.id }` ,
                        state: { dynamicData:dynamicData.name }
                    }}> {dynamicData.name}  </Link>
                  
                   
                </div>
                
            
            )}{/* end of map */}
            

            </div>

            
        )
    }
}

export default Programs