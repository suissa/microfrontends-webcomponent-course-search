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
