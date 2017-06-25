const React = require("react");
const marked = require("marked");
require("./css/textEditor.css");

var TextEditor = React.createClass({
	
	render: function() {
		return (
		
		<textarea name="editor" onChange={this.handleChange}></textarea>
		
		);
	},
	
	handleChange: function(e){
	var newS = marked(e.target.value);	
	this.props.onTextChange(newS); 	
		
	}
});

module.exports = TextEditor;