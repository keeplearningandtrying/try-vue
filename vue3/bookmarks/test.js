import { createApp } from 'https://unpkg.com/vue@3.2.45/dist/vue.esm-browser.js?module'
import $ from 'https://cdn.jsdelivr.net/npm/jquery@3.6.0/+esm?module'
// import bookmarks1 from "./bookmarks1.json?module";

createApp({
    data() {
      return {
        bookmarks: [],
        newBookmark: { title:"", url:""},
        currentPage: 1
      }
    },
    created: function () {
        this.loadBookmarks();
    },
    methods: {
        loadBookmarks() {
            let self = this;
            // doesn't work
            // self.bookmarks = bookmarks1;

            var url = 'bookmarks' + self.currentPage.toString() + '.json';

            // either of the following ways works
            $.get(url, function (data) {
            //$.getJSON("http://localhost:3000/bookmarks", function (data) {
                self.bookmarks = data
            });
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
}).mount('#app');

