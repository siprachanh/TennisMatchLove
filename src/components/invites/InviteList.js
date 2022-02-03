import React, { useState, useEffect } from "react";
import { InviteCard } from "./InviteCard";
import { deleteInvite, getAllInvites } from "./InviteManager";
import "./Invites.css"

export const InviteList = () => {
    const [invites, updateInvites] = useState([]);

    const getInvites = () => {
        if(captain === "true") {
        return getAllInvites().then(invite => {
            updateInvites(invite)
        });
};

const handleDeleteInvite = id => {
    if(window.confirm("Delete? "))
    deleteInvite(id)
    .then(() => getAllInvites().then(updateInvites));
};

useEffect(() => {
    getInvites();
}, []
)
return (
    <><h2 className="invite_header"> Welcome to Tennis Match Love Invites page. Below are our matches. </h2>
    <div className="container-cards">
        {invites.map(invite => <InviteCard key={invite.id} invite={invite} handleDeleteInvite={handleDeleteInvite} />
)}
</div></>
);
 