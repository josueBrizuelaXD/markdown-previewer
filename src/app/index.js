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
			<TextEditor onTextChange={this.handleTextChange}/>
		</div>	
		<div>
			<MarkDownView markup={this.state.markup}/>	
		</div>	
		</div>
		);
	},
	
	handleTextChange: function(s) {
		this.setState({markup:s});
	}

});


ReactDom.render(<App/>, document.getElementById("app-wrapper"));