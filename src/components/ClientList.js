import React from 'react';

const ClientList = (props) =>{
    // console.log(props.clients);

    const showClients = (clients) =>{
        return(
            <div className="client_container">
                { clients?
                    clients.map( (item, i) => (
                        <div id={item.id} key={item.id} className="client_item" onClick={event=>props.showClient(event)}>
                        <div className="avatar" >
                            <img src={item.general.avatar} alt={item.general.firstName}/>
                        </div>
                        <div className="info">
                            <h5>{item.general.firstName}</h5>
                            <h5>{item.job.title}</h5>
                        </div>
                       
                        </div>
                    )):null

                }
            </div>
        )
    } 


    return (
        <div >             
            {showClients(props.clients)}
        </div>
    )
}

export default ClientList;


