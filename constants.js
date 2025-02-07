module.exports = {
    api: {
        endpoints: {
            CREATE_BOOK: "api/create-book", 
            GET_ALL_BOOKS: "api//get-all-books/", 
            DELETE_BOOK: "api/delete-book/", 
            GET_BOOK: "api/get-book/", 
            UPDATE_BOOK: "api/update-book", 
            GET_IMAGE: "api/image/:id",
        }
    }, 
    url: {
        baseURL: "http://localhost:3000/"
    }
}