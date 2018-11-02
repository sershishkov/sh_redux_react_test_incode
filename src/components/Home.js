import React, { Component } from 'react';
// import axios from 'axios';


import { connect } from 'react-redux';
import { clientsListAll, findClientsBy,findClientsDetails } from '../actions';
import { bindActionCreators } from 'redux';

import Search from './Search';
import ClientList from './ClientList';
import Client from './Client';

class Home extends Component { 

    

    componentWillMount() {
        
        this.props.clientsListAll();
        this.props.findClientsDetails("Gerry_Hackett77@gmail.com");
    }


    getKeywords = (event) => {
         let key = event.target.value;        
        this.props.findClientsBy(key);        
    }

    clientOnClick = (event) =>{
        let target = event.target        
        while(target.className !== 'client_item'){            
            target = target.parentNode;
        } 
        let id = target.getAttribute('id') ;     

        this.props.findClientsDetails(id);
        
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
                        <ClientList clients={this.props.clients.clientstList} showClient = {this.clientOnClick}/>
                    </div>
                    <div className="col-8">
                        <Client client={this.props.client.clientDetail}/>
                    </div>                
                </div>       
                
            </div>
        )
    }
    
}

const mapStateToProps = (state, ownProps) => {
    
    return {
        clients: state.clients,
        client: state.client
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        clientsListAll, 
        findClientsBy,
        findClientsDetails
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps) (Home);