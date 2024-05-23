import React from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from 'react-to-webcomponent';
import CourseSearch from './CourseSearch';
import './styles.css';

const CourseSearchComponent = reactToWebComponent(CourseSearch, React, ReactDOM);

// Verifica se o componente já está definido
if (!customElements.get('course-search')) {
  customElements.define('course-search', CourseSearchComponent);
}
