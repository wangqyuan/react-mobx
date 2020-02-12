import React from 'react'
import { inject, observer } from 'mobx-react'

@inject ('store') @observer
export default class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	handleTodos(type) {
		let { store } = this.props
		switch (type) {
			case 'push':
				store.addTodo('一条新任务')
				break;
			case 'pop':
				store.deleteTodo()
				break;
			case 'reset':
				store.resetTodo()
				break;
			default:
		}
	}

	render() {
		let { store } = this.props
    console.log('this.props',this.props);
    console.log(store.todos);
    return (
			<div>
				<button onClick={this.handleTodos.bind(this,'push')}>push</button>
				<button onClick={this.handleTodos.bind(this, 'pop')}>pop</button>
				<button onClick={this.handleTodos.bind(this,'reset')}>reset</button>
				{
					store.todos.map((data,index)=>
						<div key={index}>{data.value}</div>
					)
				}
				<div>时间{store.time}</div>
			</div>
		)
	}
}
