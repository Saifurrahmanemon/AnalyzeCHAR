import { mount } from '@cypress/react';
import App from './App';

it('renders learn react link', () => {
  // eslint-disable-next-line react/react-in-jsx-scope
  mount(<App />);
  cy.get('a').contains('Learn React');
});