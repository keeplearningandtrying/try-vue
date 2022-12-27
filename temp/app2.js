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

            // this does't works
            // D:\wei\dev\ui\vue-html\temp>http-server -p 7070
            // $.getJSON("http://localhost:7070/bookmarks1.json", {crossDomain: true, dataType: "jsonp"}, function (data) {

            // this does't works
            // D:\wei\dev\ui\vue-html\temp>http-server -p 7070
            // $.getJSON("http://localhost:7070/bookmarks1.json", {crossDomain: true}, function (data) {

            // this works
            // https://www.npmjs.com/package/json-server
            // D:\wei\dev\ui\vue-html\temp>json-server   bookmarks.json
            // $.getJSON("http://localhost:3000/bookmarks", {crossDomain: true}, function (data) {

            // this works
            // https://www.npmjs.com/package/json-server
            // D:\wei\dev\ui\vue-html\temp>json-server   bookmarks.json
            // $.getJSON("http://localhost:3000/bookmarks", {crossDomain: true, dataType: "jsonp"}, function (data) {

            // this works
            // https://www.npmjs.com/package/json-server
            // D:\wei\dev\ui\vue-html\temp>json-server   bookmarks.json
            $.getJSON("http://localhost:3000/bookmarks", function (data) {

            // this works
            // https://www.npmjs.com/package/json-server
            // D:\wei\dev\ui\vue-html\temp>json-server   bookmarks.json
            // $.getJSON("http://localhost:3000/bookmarks", {dataType: "jsonp"}, function (data) {


            // this works - served from same host and port
            // D:\wei\dev\ui\vue-html>http-server
            // $.getJSON("http://localhost:8081/temp/bookmarks1.json", function (data) {

            // this works
            // $.getJSON("./bookmarks1.json", function (data) { 
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
});
