import React, { Component } from 'react';
import axios from 'axios';

import Search from './Search';
import ClientList from './ClientList';
import Client from './Client';

class Home extends Component { 

    state = {
        clients:[],
        client:[{ "id":"Gerry_Hackett77@gmail.com",
        "general": {
          "firstName": "Liana",
          "lastName": "Crooks",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/kevinoh/128.jpg"
        },
        "job": {
          "company": "Ledner, Johnson and Predovic",
          "title": "Investor Functionality Coordinator"
        },
        "contact": {
          "email": "Gerry_Hackett77@gmail.com",
          "phone": "(895) 984-0132"
        },
        "address": {
          "street": "1520 Zemlak Cove",
          "city": "New Devon",
          "zipCode": "42586-7898",
          "country": "Guinea-Bissau"
        }
      }]
    }

    componentWillMount() {
        axios.get("http://localhost:3004/clients")
        .then(response =>{
           this.setState({
            clients:response.data
           })
        })
    }


    getKeywords = (event) => {
         let key = event.target.value;
         axios.get(`http://localhost:3004/clients?q=${key}`)
        .then(response =>{
           this.setState({
            clients:response.data
           })
        })

        
    }

    clientOnClick = (event) =>{
        let target = event.target        
        while(target.className !== 'client_item'){            
            target = target.parentNode;
        } 
        let id = target.getAttribute('id') ; 
        
        axios.get(`http://localhost:3004/clients?q=${id}`)
        .then(response =>{
           this.setState({
            client:response.data
           })
        })
         
        
    }

    render(){
        return (
            <div className="container">
            <div className="row">
                <div className="col-12">
                    <Search keywords={this.getKeywords}/>
                </div>                
            </div>
                <div className="row">
                    <div className="col-4">
                        <ClientList clients={this.state.clients} showClient = {this.clientOnClick}/>
                    </div>
                    <div className="col-8">
                        <Client client={this.state.client}/>
                    </div>                
                </div>       
                
            </div>
        )
    }
    
}

export default Home;