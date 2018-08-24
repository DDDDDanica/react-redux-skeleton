
## React Redux Skeleton

- [Setup](#setup)
- [Create new Pages/Routes](#create-new-page)
- [Static Assets And Language File](#static-assets)
- [Unit Test](#unit-test)
- [Technologies](#technologies)
- [Helpful contacts](#contacts)
&nbsp;
## <a name="setup">Setup</a>

1. Install [GIT](https://git-scm.com) and GIT command line tools
2. Install node [node.js](http://nodejs.org)
3. `git clone https://<your-enterprise-id>@innersource.accenture.com/scm/kpis/kpis_frontend.git` - Clone using HTTPS protocol
4. `npm install -g webpack` - install webpack
5. `npm install` - install local dependencies
&nbsp;
### Development

1. `npm start` - bundle and transpile files using webpack and run the server webpack-dev-server
2. Open the browser and go to `http://localhost:3100`
3. `CTRL C` to exit watch
&nbsp;
### Production

1. `nmp run build` - transpiles, minifies, and bundle files
2. `nmp run start:prod` - starts the express app
3. Open the browser and go to `http://localhost:3100`
4. `CTRL C` to exit watch

&nbsp;
## <a name="create-new-page">Create A New Page/Route</a>

New Pages\Routes have to be placed in `src/pages` by follwing the below convention:

 `namepage` <br>
    ├── `components` <br>
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──`component1` <br>
    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──`component2` <br>
    └── `Namepage.js`  <br>
    └── `_Namepage.scss`  <br>
    └── `actions.js` <br>
    └── `reducers.js` <br>

> Page's stylesheet are exposed from `src/index.scss`

After that in order to see it in action you have to add your new page\route in the `src/app.js`:

```javascript
import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ROUTES } from "constant";
import { default as Namepage } from "./pages/namepage/Namepage";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/nampage" component={Namepage} />
        <Redirect to={ROUTES.PROJECTS} />
      </Switch>
    );
  }
}
export default App;
```
&nbsp;
#### What if you wanted to restrict the access to only authorized users based on roles?

We develop two [HOC](https://reactjs.org/docs/higher-order-components.html) the `privateRoute` and `accessRoute` which are in charge to do that.

```javascript
import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { privateRoute, accessRoute } from "components";
import { ROUTES } from "constant";
import { default as Namepage } from "./pages/namepage/Namepage";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/nampage"
            component={accessRoute(privateRoute(Namepage))}
        />
        <Redirect to={ROUTES.PROJECTS} />
      </Switch>
    );
  }
}
export default App;
```

&nbsp;
## <a name="static-assets">Static Assets and Languages</a>
Static assets like image new fonts etc.. have to be placed in `src/assets`.

The language file is located at `src/assets/json/language.json`.
> At the moment the project support only the english language.

If you want to add a new language you have to edit the file mentioned above.

&nbsp;
## <a name="unit-test">Unit Test</a>
1. Run unit tests: `npm run unit`

2. For the tests enviroment we used `chai` - `sinon` - `enzyme` wiht an custom plugin `mocha-istanbul-ui` usefull for debugging and swhowing line coverage.

3. Files:
- Unit tests have to be placed in `test/unit` folder.
- Mockup data used in your test has to be placed in `test/fixtures` folder.
- Code coverage file will be generated after run `npm run build` and placed in `target/coverage/index.html`

If you want also to write Integration Test we would suggest to use [Cypress.io](https://www.cypress.io/)

## <a name="technologies">Technologies</a>

**The project uses the following technologies:**

* [React](https://facebook.github.io/react/) - A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES
* [Redux](http://redux.js.org/) - A predictable state container for JavaScript apps.
* [Babel](https://babeljs.io) - JavaScript compiler. Allows to you use the next generation of JavaScript today.
* [Webpack](https://webpack.github.io) - Module bundler
* [SASS](http://sass-lang.com) - CSS preprocessor
