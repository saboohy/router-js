# router-js

JavaScript ilə nümunə məqsədli `Router` qaynağı.

`app.js` içərisində istifadə qaydası:

```javascript
import App from './src/router.js';

App.route({
    '/': function() {
        console.log('main page');
    },
    '/post/{id}': function(id) {
        console.log('post id: ' + id);
    }
});

App.ready();
```