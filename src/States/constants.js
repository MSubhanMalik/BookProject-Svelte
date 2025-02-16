const api = {
    endpoints: {
        CREATE_BOOK: "api/create-book/",
        GET_ALL_BOOKS: "api/get-all-books/",
        GET_BOOK: "api/get-book",
        DELETE_BOOK: "api/delete-book",
        UPDATE_BOOK: "api/update-book", 
        GET_IMAGE: "api/image/:id", 
        AUTH_GOOGLE: "api/auth/google",
        GET_USER: "api/auth/user",
        LOGOUT_USER: "api/auth/logout"
    }, 
    url: {
        baseUrl: "http://localhost:3000/"
    }
}


export default api;