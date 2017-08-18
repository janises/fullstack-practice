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
			message: ''
		}
		this.getMessage=this.getMessage.bind(this)
	}

	getMessage(){
		axios.get(this.state.URL).then(response=>{
			this.setState({
				message: response.data
			})
		})
		//set state
	}

	render(){
		return (
			<div className='App'>
				<p>this is App.jsx</p>
				<Compy />
				<button onClick={this.getMessage}>Get Message</button>
				{this.state.message &&
					<p>{this.state.message}</p>}
			</div>
		)
	}
}