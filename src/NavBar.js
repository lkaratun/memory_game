import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			expanded: false
		};
		this.expandDropdown = this.expandDropdown.bind(this);
		this.collapseDropdown = this.collapseDropdown.bind(this);
	}

	expandDropdown() {
		this.setState({ expanded: true });
		document.addEventListener("click", this.collapseDropdown);
	}
	collapseDropdown() {
		this.setState({ expanded: false });
		document.removeEventListener("click", this.collapseDropdown);
	}

	render() {
		return (
			<nav>
				<div className="title">
					The memory game
				</div>

				<div id="buttons">
					<div className="dropdown">
						<a onClick={this.expandDropdown} className="dropbtn">Difficulty <i className="fa fa-angle-down"></i></a>
						<div id="myDropdown" className={"dropdown-content" + (this.state.expanded ? " expanded" : "")}>
							<a onClick={() => this.props.handleDifficultyClick("easy")}>Easy</a>
							<a onClick={() => this.props.handleDifficultyClick("medium")}>Medium</a>
							<a onClick={() => this.props.handleDifficultyClick("hard")}>Hard</a>
						</div>

					</div>

					<a id="NewGame" onClick={this.props.handleNewGameClick} style={{ textAlign: "center" }}>New game</a>
				</div>
			</nav>


		)
	}//render
}

export default NavBar;