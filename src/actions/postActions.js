export const deletePost = (id) => {
    return {
        type: 'DELETE_POST',
        id
    }
}

export const addPost = (id, title, body) => {
    return {
        type: 'ADD_POST',
        id,
        title,
        body
    }
}