const remoteURL ="http://localhost:8088"
export const getAllInvites = () => {
    return fetch(`${remoteURL}/invites`)
    .then(res => res.json())
}
export const deleteInvite = (id) => {
    return fetch(`${remoteURL}/invites/${id}`, {
        method: "DELETE"
    }).then(result => result.json())
}

export const getInviteById = (inviteId) => {
    return fetch(`${remoteURL}/invites/${inviteId}`)
    .then(res => res.json())
}