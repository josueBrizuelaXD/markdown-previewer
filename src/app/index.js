const React = require("react");
const ReactDom = require("react-dom");
const MarkDownView = require("./Markdown");
const TextEditor = require("./TextEditor");

require("./css/index.css");

var App = React.createClass({
getInitialState: function() {
	return {
	markup:""
	};
},

	render: function() {
		return (
		<div>	
		<div>
			<h1 className="title">MarkDown Previewer</h1>
		</div>	
		<div className="container">
			
		<div className="item">
			<TextEditor onTextChange={this.handleTextChange}/>
		</div>	
		<div className="item" id="left-item">
			<MarkDownView markup={this.state.markup}/>
		</div>	
		</div>
		</div>	
		);
	},
	
	handleTextChange: function(s) {
		this.setState({markup:s});
	}

});


ReactDom.render(<App/>, document.getElementById("app-wrapper"));