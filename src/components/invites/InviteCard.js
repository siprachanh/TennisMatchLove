import React from "react";
//import { ConvertDate, daydiff, parseDate } 


export const InviteCard = ({captain, courtName, cancel, handleEdit, invite }) => {
    const foundCourtName = courtName.find((courtName) => courtName.name.id === invite.courtName.courtLocationId)
    return (
        <>
        < fieldset className="invite--card">
            { captain === true ? <h5>Name: { invite.user.name }</h5> : <h5> No team captain</h5>}
            <section className="invite--dates">
                <p> MatchDay: {invite.matchDate}</p>
            </section>
            <section className="invite--homeStatus">
                <p> We play as: {invite.homeStatus.name}</p>
            </section>
           
            <section className="invite--courtName">
                <p> Court Name: {invite.courtNmae.name}</p>
                <p> Court Location: {invite.courtLocationId.id}</p>
            </section>
            <section className="invite--courtAddress">
                <p> Court Address: ""</p>
            </section>
      
        </fieldset>
        </>
    );
}