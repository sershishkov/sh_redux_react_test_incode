import React from 'react';

const Client = (props) => {
    // console.log(props);
    const showClient = (client)=>{
        const mclient = client[0];
        return(
            <div className="client">

                <div className="client_avatar ">
                    <div className="avatar_img ">
                        <img src={mclient.general.avatar} alt={mclient.general.firstName}/>
                    </div>
                    <div className="client_base_info">
                        <h1>{mclient.general.firstName} {mclient.general.lastName}</h1>
                        <h5><span>Job:</span> {mclient.job.title}</h5>
                        <h5><span>Company:</span> {mclient.job.company}</h5>
                    </div>                    
                </div>
                <div className=" client_extended_info">
                    <h6><span>Email:</span> {mclient.contact.email}</h6>
                    <h6><span>Phone:</span> {mclient.contact.phone}</h6>
                    <h6><span>Country:</span> {mclient.address.country}</h6>
                    <h6><span>City:</span>{mclient.address.city}</h6>
                    <h6><span>Street:</span> {mclient.address.street}</h6>
                    <h6><span>ZipCode</span> {mclient.address.zipCode}</h6>
                    <span></span>
                </div>
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