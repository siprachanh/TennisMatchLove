import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Invites.css"
//import { editInvite, deleteInvite } from "./ApiManager.js";
//import { postInvite } from "../../APIManager";


export const InviteCard = () => {
    const [invite, setInvite] = useState({})
    const history = useHistory();
    const getReadableDate = (date) => {
        return new Date(date).toLocaleDateString();
    }
    
export const deleteInvite = (id) =>{
        return fetch(`${remoteURL}/invites/${id}`, {
            method: "DELETE"
        }).then(result => result.json())
    };
 export const editInvite = (id) => {
        return fetch(`${remoteURL}/invites/${editInvite.id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editInvite)
        })
    };
    return (

        <fieldset className="inviteCard">
            <h2 className="inviteCard_title">New Match Invite to Team Players</h2>
            { captain === true ? <h3>Name: { invite.playerId.name }</h3> : <h3> No team captain</h3>}
            <section className="invite--day">
                <p> MatchDay: {invite.matchDayId}</p>
            </section>
            <section className="invite--date">
                <p> MatchDate: {invite.matchDate}</p>
            </section>
            <section className="invite--time">
                <p> MatchTime: {invite.matchTime}</p>
            </section>
            <section className="invite--homeStatus">
                <p> We play as: {invite.homeStatusId.name}</p>
            </section>
           
            <section className="invite--courtName">
                <p> Court Name: {invite.courtNameId.name}</p>
                <p> Court Location: {invite.courtLocationId.address}</p>
            </section>
            
            <section className="invite--comment">
                <p> {invite.comment}</p>
            </section>

            <section className="timestamp">
                <p>{getReadableDate(invite.timestamp)}</p>
            
            </section>
        
            <section className="invite--cardmodifiers">
                <button id="edit_button" type="button" onClick={() => history.push(`/invites/${invite.id/editInvite}`)}> Edit</button>
                <button id="delete_button" type="button" onClick={() => history.push(`/invites/${invite.id/deleteInvite}`)}> Delete My Invite </button>
             </section>
        </fieldset>
        
    );
}