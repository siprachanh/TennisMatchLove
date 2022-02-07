import React, {useState, useEffect} from "react";
import "./Invites.css";
import { useHistory } from "react-router-dom";

export const Invite = ({invite, deleteInvite}) => {
    const [invites, setInvites] = useState ([])
    const currentUserId = () => parseInt(localStorage).getItem("tennis_user")
    const history = useHistory()
    const [invite, setInvite] = useSate({
        playerId: parseInt(localStorage.getItem("tennis_user")),
        matchDayId: parseInt(localStorage.getItem("tennis_user")),
        matchDate:  "",
        matchTime: "",
        homeStatusId: parseInt(localStorage.getItem("tennis_user")),
        courtName: parseInt(localStorage.getItem("tennis_user")),
        courtLocationId: parseInt(localStorage.getItem("tennis_user")),
        comment: "",
        datePosted: ""

    })
    const date = newDate()
    const submitPost = (evt) => {
        evt.preventDefault()

        const newInvite = {
        playerId: currentUserId(),
        matchDayId: parseInt(invite.matchDayId),
        matchDate:  parseInt(invite.matchDate),
        matchTime: parseInt(invite.matchTime),
        homeStatusId: parseInt(invite.homeStatusId),
        courtName: parseInt(invite.courtNameId),
        courtLocationId: parseInt(invite.courtLocationId),
        comment: invite.comment,
        datePosted: date.toLocacaleDateString()

        }
    
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
        }
 
        return fetch("http://localhost:8088/invites", fetchOption)
        .then(() => {
            history.push("/")
        })
 
    }
 

    useEffect( () => {
        return fetch(`http://localhost:8088/invites?_expand=inviteId=$(invite.id)`)
        .then((res)=>res.json())
        .then( (data) => {setInvites (data)})
    },
    [])


        
    return (
        <>
        <li className="invites_id" key={invite.id}>
            <p>
                Invite #{invite.id} is from {invite.playerId.name}--captain. Match is on {invite.matchDayId.name}, {invite.matchDate.timestamp}, at {invite.matchTime.timestamp}. We play {invite.homeStatusId.name} at 
                {invite.courtName.name} at {invite.courtLocationId.address}. See comment: {invite.comment}.

            </p>
            {invite.playerId===currentUser ? <button className="btn--inviteDelete" onClick={() => deleteInvite(invite.id) }>delete</button> : ""}
        </li>

        <button
            onClick={ submitPost}
            className="btn btn-primary"> Post Invite </button>
        </>
    )
}