import React, { Component } from 'react'
import axios from 'axios'

const Compy =_=>(
	<div className="Compy">
		We are not losers.
	</div>
)


export default class App extends Component {
	constructor(){
		super()

		this.state={
			URL: 'http://localhost:3001/api/message',
			message: '',
			update: ''
		}
		this.getMessage=this.getMessage.bind(this)
		this.update=this.update.bind(this)
		this.updateMessage=this.updateMessage.bind(this)
	}

	getMessage(){
		axios.get(this.state.URL).then(response=>{
			this.setState({
				message: response.data
			})
		})
	}

	updateMessage(val){
		axios.put(this.state.URL, {update: this.state.update}).then(response=>{
			let { message }=response.data
			this.setState({
				message
			})
		})
	}

	update(event){
		this.setState({update: event.target.value})
	}

	render(){
		return (
			<div className='App'>
				<p>this is App.jsx</p>
				<Compy />
				<button onClick={this.getMessage}>Get Message</button>
				<input type="text" className="update" value={this.state.update} onChange={this.update}/>
				<button onClick={this.updateMessage}>Update Message</button>
				{this.state.message &&
					<p>{this.state.message}</p>}
			</div>
		)
	}
}