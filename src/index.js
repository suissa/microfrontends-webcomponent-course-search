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
      <style>
        @import url('https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css');

        .search-container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1rem;
          background-color: #f8fafc;
          border-radius: 0.5rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          margin-bottom: 1rem;
        }

        .search-input {
          display: flex;
          align-items: center;
          width: 100%;
          background-color: #f1f5f9;
          padding: 0.5rem;
          border-radius: 0.5rem;
          border: 1px solid #e5e7eb;
          font-family: Inter, sans-serif;
          font-size: 1rem;
          font-style: normal;
          font-weight: 500;
          line-height: 1.188rem;
          letter-spacing: 0em;
          text-align: left;
        }

        .search-input input {
          border: none;
          outline: none;
          background: none;
          padding-left: 0.5rem;
          width: 100%;
        }

        .search-input svg {
          width: 1rem;
          height: 1rem;
          color: #6b7280;
        }
      </style>
      <div class="search-container">
        <div class="search-input">
          <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35M16.25 10.75a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
          </svg>
          <input type="text" placeholder="Busca..." />
        </div>
      </div>
    `;
  }
}

customElements.define('course-search', CourseSearch);
