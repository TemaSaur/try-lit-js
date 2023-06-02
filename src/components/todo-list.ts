import { html, LitElement, css } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import { map } from 'lit/directives/map.js'
import './sub-heading'

@customElement('todo-list')
class TodoList extends LitElement {
	static styles = css`
		:host {

		}
	`;

	@state()
	todos = ['Check out lit', 'Write a hello world in lit', '🔥:fire:']

	@state()
	todoValue: string;

	tryAddTodo() {
		if (this.todoValue) {
			this.todos = [...this.todos, this.todoValue];
		}
	}

	render() {
		return html`
			<sub-heading>Todo List:</sub-heading>
			<input type="text" placeholder="clean dog" @change=${e => {this.todoValue = e.target.value}} />
			<button type="button" @click=${this.tryAddTodo}>add todo</button>
			<form>
				${map(this.todos, (todo, i) =>
					html`
						<p>
							<input type="checkbox" id="todo-${i}" value="${todo}">
							<label for="todo-${i}">${todo}</label>
						</p>
					`)}
			</form>
		`
	}
}
