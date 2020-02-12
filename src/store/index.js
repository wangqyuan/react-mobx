import {
    observable,
    action,
	computed
} from 'mobx'
import moment from 'moment'

class AppStore {
    @observable time = '2019'
    @observable todos = [
      {
        key:1,
        value:1
      },
      {
        key:2,
        value:2
      },
    ]

    @action addTodo(todo) {
        this.todos.push(todo)
    }
    @action deleteTodo() {
	    this.todos.pop()
    }
    @action resetTodo() {
        this.todos = []
    }
		@action getNow() {
			this.time = moment().format('YYYY-MM-DD HH:mm:ss')
		}

}


const store = new AppStore()
setInterval(()=>{
	store.getNow()
}, 1000)
export default store
