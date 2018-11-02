import React from 'react';


const ClientList = (props) =>{
    return (
        <div className="client_container">
            { props.clients.map( item => (
                 <div  id={item.id} key={item.id} className="client_item" onClick={event=>props.showClient(event)}>
                   
                    <div className="avatar" >
                       <img src={item.general.avatar} alt={item.general.firstName}/>
                    </div>
                    <div className="info">
                        <h5>{item.general.firstName}</h5>
                        <h5>{item.job.title}</h5>
                     </div>
                </div>
                ))
            }
    
        </div>
    )
}

export default ClientList;