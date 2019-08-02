import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './auth.css';
import Cookies from 'js-cookie';
var classNames = require('classnames');

export default class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			userName: '',
			password: '',
			attempted: false
		};
	}

	validateForm() {
		return this.state.userName.length > 0 && this.state.password.length > 0;
	}

	handleChange = (event) => {
		this.setState({
			[event.target.id]: event.target.value
		});
	};

	handleSubmit = (event) => {
		if (this.state.userName === 'oris_intel' && this.state.password === '330spring') {
			let expirTime = new Date(new Date().getTime() + 6 * 60 * 60 * 1000);
			Cookies.set('loggedIn', true, { expires: expirTime });

			this.props.refresh();
		} else {
			this.setState({
				attempted: true
			});
		}

		event.preventDefault();
	};

	loginClasses = classNames({
		Login: true
	});

	render() {
		return (
			<main className="login">
				<h2 className="topCenter">Auto Definition Login</h2>
				<div className={this.loginClasses}>
					<Form onSubmit={this.handleSubmit}>
						<Form.Group controlId="userName">
							<Form.Label>Username</Form.Label>
							<Form.Control
								autoFocus
								type="userName"
								placeholder="Enter username"
								value={this.state.userName}
								onChange={this.handleChange}
							/>
						</Form.Group>
						<Form.Group controlId="password">
							<Form.Label>Password</Form.Label>
							<Form.Control
								value={this.state.password}
								placeholder="Password"
								onChange={this.handleChange}
								type="password"
							/>
							{this.state.attempted ? (
								<Form.Text className="text-danger">
									Password or Username incorrect, please try again
								</Form.Text>
							) : null}
						</Form.Group>
						<Button block variant="primary" disabled={!this.validateForm()} type="submit">
							Login
						</Button>
					</Form>
				</div>
			</main>
		);
	}
}
