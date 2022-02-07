const remoteURL ="http://localhost:8088"

export const getInviteById = (inviteId) => {
    return fetch (`${remoteURL}/invites/${inviteId}?_expand=captain&expand=player`)
    .then(res => res.json())
}
export const getAllInvites = () => {
    return fetch(`${remoteURL}/invites?`)
    .then(res => res.json())
}
export const deleteInvite = (id) => {
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
export const postInvite = (obj) => {
    return fetch("http://localhost:8088/invites", postOptions(obj));
};


export const addInvite = (newInvite) => {
    return fetch(`${remoteURL}/invites`, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newInvite)
    }).then(res => res.json())
};

export const comment= (commentedInvite) => {
    return fetch(`${remoteURL}/invites?${commentedInvite.id}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(commentedInvite)
    }).then(data => data.json());
}
   