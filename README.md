# Microfrontend - Webcomponent - CourseList

## Webcomponent CourseList

```js
class CourseSearch extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.shadowRoot.querySelector('input').addEventListener('input', (e) => {
      const query = e.target.value;
      window.dispatchEvent(new CustomEvent('filter-courses', { detail: { query } }));
    });
  }

  render() {
    this.shadowRoot.innerHTML = `
      <input type="text" placeholder="Search courses..." />
    `;
  }
}

customElements.define('course-search', CourseSearch);
```

## webpack.config.js

```js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'course-list.js',
    library: 'courseList',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 4001,
  },
};
```

# Execução

```
yarn
npx tailwindcss init
yarn start
```