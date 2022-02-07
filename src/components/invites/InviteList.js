import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
//import { TennisMatchLove } from "../TennisMatchLove";
//import { InviteCard } from "./InviteCard";
import { deleteInvite, getAllInvites } from "./ApiManager.js";
//import { players } from ".players/Player"
import "./Invites.css"

export const InviteList = () => {
   // const currentUserId = () => parseInt(localStorage.getItem("TennisMatchLove_user"))
    const [invites, setInvites] = useState([]);
    const history = useHistory();

    // useEffect(() => {
    //     fetch("http://localhost:8088/invites")
    //     .then( data => data.json())
    //     .then( invites => setInvites(invites))
        
    // }, []
    // );
     
//         if(player.captain === "true") {
//         return getAllInvites().then(invitesFromAPI=> {
//             setInvites(invitesFromAPI)
//         });
//     } else {
//         return getAllInvites.then(invite => {getInvites(invite);})
//     }
// };

const fetchInvites = () => {
    return getAllInvites().then((data) => setInvites(data));
};

useEffect(() => {
    return fetchInvites();
}, []);

const removeInvite = (id) => {
    return deleteInvite(id).then(fetchInvites());
};

// const handleDeleteInvite = (id) => {
//     if(window.confirm("Delete? "))
//     deleteInvite(id)
//     .then(() => getAllInvites().then(setInvites));
// };



return (
    <>
    <h2 className="invite_header"> Welcome to Tennis Match Love Invites page. Below are our match invites. </h2>
    <div className="container-cards">
        {invites.map(invite => 
        <InviteCard key={invite.id} invite={invite} />
        )}
     </div>
     <div
        button type="botton"
        className="new-invite-button"
        onClick={() => {history.push("/invites/create")}}>
            Create a new Match Invite Card <Link to={`/invites/${invite.id}`}></Link>{""} 
            submitted by {invite.player.captain.name}
            <button 
            onClick={()=> {
                removeInvite(invite.id);
            }}
            > Delete
            </button>
     </div>

    </>
);
};
