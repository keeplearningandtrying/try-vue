## Use vue in HTML, instead of using SFC (Single-File Components .vue file) 
* https://vuejs.org/guide/quick-start.html#creating-a-vue-application
* See examples under vue3/beginning
## Vue in general
* https://vuejs.org/examples
* https://stackoverflow.com/questions/65149231/vue-createapp-is-not-working-but-is-working-with-new-vue-method
* https://vuejs.org/examples/#hello-world
* https://github.com/vuejs/vue-cli/blob/v4/packages/%40vue/cli-service/lib/commands/build/demo-lib.html

## Use Vue in html page
* https://overclocked.medium.com/adding-vue-js-to-an-existing-project-ed2d040f870b
* https://overclocked.medium.com/improving-legacy-web-applications-with-vue-and-vuex-2176c973e831?source=your_stories_page---------------------------
* https://overclocked.medium.com/a-recipe-for-nesting-components-withina-list-in-vue-js-and-vuex-10b4feb615cb
* https://developerlife.com/2018/08/15/introduction-to-vue/
  * https://github.com/nazmulidris/vue_intro/tree/master/src
  
  
* https://dev.to/mohsenkamrani/hello-world-in-vuejs-3l1
  
## Learn vue
  * https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started
  
  * https://blog.codecentric.de/spring-boot-vuejs
  * https://github.com/jonashackt/spring-boot-vuejs
  
  * https://itnext.io/vuex-made-simple-getting-started-6bf229d432cf
  
  * https://codesandbox.io/s/7z7r57n7kq?file=/src/components/HelloWorld.vue
  
  * https://blog.logrocket.com/definitive-guide-vue-3-components/
  
  * https://medium.com/js-dojo/a-beginners-guide-to-exports-in-es6-af27b5a621d0
  * https://flaviocopes.com/vue-first-app/
  
  * https://codesandbox.io/s/vue

  * https://learnvue.co/tutorials/intro-to-vue-3

  
  * https://vuejs.org/guide/introduction.html (official guide)
  * https://www.sitepoint.com/vue-3-beginner-guide/ (real good)
    * https://www.w3schools.com/Jsref/jsref_operators.asp (what "..." means)
    * We should use methods to mutate data and use the computed properties for the presentation layer
    * event listener - v-on. @click="addTask" same as v-on:click="addTask"
    * attribute binding - v-bind:src same as :src
    * Both data and props are reactive, but data is more like "my own state" and props is "I expect to get this from my parent."

## Use ES6 JavaScript syntax (require, import etc.) in your Front end project
* https://stackoverflow.com/questions/59317194/how-to-use-npm-package-as-normal-javascript-in-html
* https://hackernoon.com/use-es6-javascript-syntax-require-import-etc-in-your-front-end-project-5eefcef745c2
* https://medium.com/weekly-webtips/import-use-npm-modules-in-the-browser-easily-e70d6c84fc31 (good)
* https://medium.com/jeremy-keeshin/hello-world-for-javascript-with-npm-modules-in-the-browser-6020f82d1072 (good)
  * https://thekeesh.com/hellobrowsernpm/newway.html
  * https://github.com/jkeesh/hello-browser-npm

* https://vuejs.org/guide/quick-start.html#using-vue-from-cdn
* https://www.digitalocean.com/community/tutorials/how-to-dynamically-import-javascript-with-import-maps
* https://stackoverflow.com/questions/73288466/import-using-esm-from-cdn-throwing-errors-picmo

## Serve local json content
* https://www.npmjs.com/package/json-server
  * D:\wei\dev\ui\vue-html\temp>json-server bookmarks.json
  * http://localhost:3000/bookmarks
* D:\wei\dev\ui\vue-html>http-server
  * http://localhost:8081/temp/bookmarks1.json