import bookmarks1 from "./bookmarks1.json";

new Vue({
    el: '#app',
    data: {
        bookmarks: [],
        newBookmark: { title:"", url:""},
        currentPage: 1
    },
    created: function () {
        this.loadBookmarks();
    },
    methods: {
        loadBookmarks() {
            let self = this;
            // $.get("bookmarks1.json", function (data) {
            //     self.bookmarks = data
            // });
            self.bookmarks = bookmarks1;
        },
        loadPage(page) {
            this.currentPage = page;
            this.loadBookmarks();
        },
        saveBookmark() {
            let self = this;
            if(this.newBookmark.title.trim() === "" || this.newBookmark.url.trim() === "") {
                alert("Please enter title and url");
                return;
            }
            $.ajax({
                type: "POST",
                url: '/api/bookmarks',
                data: JSON.stringify(this.newBookmark),
                contentType: "application/json",
                success: function () {
                    self.newBookmark = {};
                    self.loadPage(1);
                }
            });
        },

        deleteBookmark(id) {
            let self = this;

            $.ajax({
                type: "DELETE",
                url: '/api/bookmarks/' + id,
                success: function () {
                    self.loadPage(1);
                }
            });
        }
    }
});
