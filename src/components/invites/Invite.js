import React, {useState, useEffect} from "react";
import "./Orders.css"

export const Order = ({order, deleteOrder}) => {
    const [invites, setInvites] = useState ([])
    const currentUser = parseInt(localStorage).getItem("tennis_player"))

    useEffect( () => {
        
    })