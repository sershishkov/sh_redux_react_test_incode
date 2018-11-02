import React from 'react';

const Client = (props) => {   
    
    const showClient = (client)=>{
        
        return(
            <div className="client">
                {
                    client ? 
                    <div>                         
                        <div className="client_avatar ">
                            <div className="avatar_img ">
                                <img src={client.general.avatar} alt={client.general.firstName}/>
                            </div>
                            <div className="client_base_info">
                                <h1>{client.general.firstName} {client.general.lastName}</h1>
                                <h5><span>Job:</span> {client.job.title}</h5>
                                <h5><span>Company:</span> {client.job.company}</h5>
                            </div>                    
                        </div>
                        <div className=" client_extended_info">
                            <h6><span>Email:</span> {client.contact.email}</h6>
                            <h6><span>Phone:</span> {client.contact.phone}</h6>
                            <h6><span>Country:</span> {client.address.country}</h6>
                            <h6><span>City:</span>{client.address.city}</h6>
                            <h6><span>Street:</span> {client.address.street}</h6>
                            <h6><span>ZipCode</span> {client.address.zipCode}</h6>
                            <span></span>
                        </div>
                    </div>
                :null
                }
            </div>              
           
        )        
    }
    
    return (
        <div>       
            {showClient(props.client)}           
        </div>
    );
};

export default Client;