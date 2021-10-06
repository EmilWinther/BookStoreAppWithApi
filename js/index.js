// use https (http secure).
// http (non secure) will make the app complain about mixed content when running the app from Azure
const baseUrl = "https://anbo-restbookquerystring.azurewebsites.net/api/books"

Vue.createApp({
    data() {
        return {
            books: [],
            bookId: null,
            singleBook: null,
            addData: { title: "", price: 0 },
            addMessage: "",
            idToDelete: null,
            deleteMessage: "",
            idToUpdate: null,
            updateData: { title: "", author: "", publisher: "", price: 0 },
            updateMessage: ""
        }
    },
    async created() { // life cycle method. Called when browser reloads page
        try {
            const response = await axios.get(baseUrl)
            this.books = await response.data
            console.log(this.books)
        } catch (ex) {
            alert(ex.message) // https://www.w3schools.com/js/js_popup.asp
        }
    },
    methods: {
        async getBookById(id) {
            const url = baseUrl + "/" + id
            try {
                const response = await axios.get(url)
                this.singleBook = await response.data
            } catch (ex) {
                alert(ex.message)
            }
        }
    }
}).mount("#app")