import { html, LitElement, css } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import './sub-heading'

@customElement('cookie-clicker')
export class Clicker extends LitElement {
	static styles = css`
		:host span {
			font-size: 32px;
			width: 54px;
			height: 54px;
			background: #00000080;
			display: inline-grid;
			place-items: center;
			border-radius: 5px;
		}

		:host button {
			background: #00000080;
			color: inherit;
			outline: none;
			border: none;
			
			display: inline-grid;
			place-items: center;
			padding: .5rem 2rem;
		}

		:host div {
			display: flex;
			align-items: center;
			gap: 1rem;
		}
	`

	@state()
	counter = 0;

	render() {
		return html`
		<sub-heading>Click Counter:</sub-heading>
		<div>
			<span>${this.counter}</span>
			<button type="button" @click=${() => {this.counter = this.counter + 1;}}>+1</button>
		</div>`
	}
}
