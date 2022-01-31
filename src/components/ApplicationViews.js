import React from "react"
import { Route } from "react-router-dom"

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/players">
                <PlayerList />
            </Route>
        </>
    )
}