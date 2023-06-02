import { html, LitElement, css } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('sub-heading')
class Heading extends LitElement {
	static styles = css`
		:host h2 {
			margin: 0;
			padding: .5em 0 .5em;
			font-size: 2rem;
			font-weight: 200;
		}
	`

	render() {
		return html`<h2>${this.textContent}</h2>`
	}
}
