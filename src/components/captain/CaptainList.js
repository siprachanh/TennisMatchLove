import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { getAllCaptains } from "../ApiManager.js";

export const CaptainList = () => {
    const [players, changeCaptain] = useState([]);
    const [specialties, setSpecialty] = useState("");
    const history = useHistory();

    useEffect(() => {
        getAllCaptains().then((data) => {
            changeCaptain(data);
        });
    }, []);

    useEffect(() => {
        const captain = players.map((player) => player.captain);
        setSpecialty(captain.join(", "));
    }, [players]);

    return (
        <>
            <h2>Captain List</h2>
            <button onClick={() => history.push("/player/create")}>Captain</button>
            <div>Captain: {specialties}</div>
            {players.map((player) => {
                return (
                    <p key={`player--${player.id}`}>
                        <Link to={`/players/${player.id}`}>{player.name}</Link>
                    </p>
                );
            })}
        </>
    );
}; 