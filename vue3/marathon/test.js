import { createApp } from 'https://unpkg.com/vue@3.2.45/dist/vue.esm-browser.js?module'
import $ from 'https://cdn.jsdelivr.net/npm/jquery@3.6.0/+esm?module'

//Loading module from “http://localhost:8081/vue3/marathon/marathons1.json?module” was blocked because of a disallowed MIME type (“application/json”)
// import marathons from "./marathons1.json?module";

createApp({
    data() {
      return {
        marathons: [],
        currentMarathon: [],
        newMarathon: { name:"", url:""},
        currentPage: 1
      }
    },
    created: function () {
        this.loadMarathons();
        this.loadMarathon(1);
    },
    methods: {
        loadMarathons() {
            let self = this;
            // doesn't work
            // self.marathons = marathons;

            var url = 'marathons' + self.currentPage.toString() + '.json';

            // either of the following ways works
            $.get(url, function (data) {
            //$.getJSON("http://localhost:3000/marathons", function (data) {
                self.marathons = data
            });
        },

        loadMarathon(id) {
            let self = this;
            var url = 'marathon' + id.toString() + '.json';
            $.get(url, function (data) {
                self.currentMarathon = data
            });
        },

        loadPage(page) {
            this.currentPage = page;
            this.loadMarathons();
        },
        saveMarathon() {
            let self = this;
            if(this.newMarathon.name.trim() === "" || this.newMarathon.url.trim() === "") {
                alert("Please enter name and url");
                return;
            }
            $.ajax({
                type: "POST",
                url: '/api/marathons',
                data: JSON.stringify(this.newMarathon),
                contentType: "application/json",
                success: function () {
                    self.newMarathon = {};
                    self.loadPage(1);
                }
            });
        },

        deleteMarathon(id) {
            let self = this;

            $.ajax({
                type: "DELETE",
                url: '/api/marathons/' + id,
                success: function () {
                    self.loadPage(1);
                }
            });
        }
    }
}).mount('#app');

