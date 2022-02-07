import React from "react";
import { Route } from "react-router-dom";
import { PlayerList } from "./players/PlayerList.js";
import { CaptainList } from "./captain/CaptainList.js"
import { TennisMatchLove } from "./TennisMatchLove";
//import { InviteForm } from "./invites/InviteForm";
import { InviteList } from "./invites/InviteList"
import { InviteCard } from "./invites/InviteCard";


export const ApplicationViews = () => {
  return (
    <>
      <Route exact path="/players">
        < PlayerList />
      </Route>
      <Route exact path="/captain">
        < CaptainList/>
      </Route>
      {/* <Route path="/invites">
        <InviteList />
      </Route>
      <Route path="/invites/create">
        <InviteCard />
      </Route>
       */}
    </>
  );
};
