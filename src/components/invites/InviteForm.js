import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getInviteById, updateInvite} from "./components/invites/inviteForm"
import { useHistory } from "react-router-dom";
// import { addInvite } from "../invites/InviteManager"
//import { getAllLocations } from "./components/locations/LocationManager"

export const InviteForm = () => {
    const [invite, setInvite] = useState ({
        name: "",
        userId: parseInt(localStorage.getItem(`user_id`)),
        matchDayId: parseInt(localStorage.getItem(`matchDay_id`)),
        matchDate: Date.now(),
        matchTime: Date.now(),
        homeStatusId: parseInt(localStorage.getItem(`homeStatus_id`)),
        courtNameId: parseInt(localStorage.getItem(`courtName_id`)),
        courtLocationId: parseInt(localStorage.getItem(`courtLocation_id`)),
        comment: "",
        datetime: Date.now()

    })
    return( 
        <>
        <h1> Tennis Invite </h1>
        </>
    ) 
}


