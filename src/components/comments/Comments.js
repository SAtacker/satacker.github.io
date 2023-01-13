import React, {Component} from 'react'

export default class Comments extends Component{
	constructor(props){
		super(props);
		this.commentBox=React.createRef();
	}

	componentDidMount(){
		let scriptEl = document.createElement("script");
		scriptEl.setAttribute('src',"https://utteranc.es/client.js");
		scriptEl.setAttribute("repo","SAtacker/satacker.github.io");
		scriptEl.setAttribute("issue-term","pathname");
		scriptEl.setAttribute("label","[utterences]");
		scriptEl.setAttribute("theme","github-dark");
		scriptEl.setAttribute("crossorigin","anonymous");
		scriptEl.setAttribute("async",true);
		this.commentBox.current.appendChild(scriptEl);
	}
	render(){
		return (
			<div style={{ width:'100%'}} id="comments">
				<div ref={this.commentBox}></div>
			</div>
		)
	}
}

