import React from "react"
import { Route } from "react-router-dom"
import { TennisMatchLove } from "./TennisMatchLove"
import { Register } from "./auth/Register"
import { InviteForm } from "./invites/InviteForm"
import { InviteCard } from "./invites/InviteCard"
//import { MessageList } from "./components/messsages/MessageList"
//import { InviteList } from ".components/invites/InviteList"
//import { LocationList } from ".components/locations/LocationList"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <TennisMatchLove/>
            </Route>
            {/* <Route exact path="/players">
                <PlayerList />
            </Route> */}
            {/* <Route exact path="/invites/create">
                <InviteForm />
        </Route> */ }
            <Route exact path="/invites">
                <InviteCard />
            </Route>
            {/* <Route path="/messages">
                <MessageList />
            </Route> */ } 
            {/* <Route path="/locations">
                <LocationList />
            </Route> */}
        </>
    )
}