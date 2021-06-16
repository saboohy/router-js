`use strict`;
var pathName, App;
pathName = window.location.pathname;
App = {
    routes: [],
    path: (pathName === '/') ? pathName.replace('/', '/default-path') : pathName,
    route: function(routings) {
        Object.keys(routings).forEach(path => {
            var realPath    = path,
                matchPath   = path.replace(/{[a-z]+}/gi, '(.*)');
            this.routes.push([matchPath, routings[realPath]]);
        });
    },
    ready: function() {
        this.routes.filter(routing => {
            var match = this.path.match(routing[0]);
            if(match) {
                match.shift();
                routing[1].apply(null, match);
            }
        });
    }
}
export default App;