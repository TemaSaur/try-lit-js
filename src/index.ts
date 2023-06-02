
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js'
import './components/clicker'
import './components/todo-list'

@customElement('app-lication')
export class App extends LitElement {
	static styles = css`
		:host h1 {
			font-weight: 200;
			font-size: 42px;
		}
	`
	name = 'world'
	constructor() {
		super();
	}
	render() {
		return html`
		<cookie-clicker></cookie-clicker>
		<br />
		<todo-list></todo-list>`;
	}
}
// customElements.define('app-lication', App);
