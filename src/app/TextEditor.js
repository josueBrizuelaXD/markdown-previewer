const React = require("react");
const marked = require("marked");


var TextEditor = React.createClass({
	
	render: function() {
		return (
		
		<textarea name="editor" rows="50" cols="50" onChange={this.handleChange}></textarea>
		
		);
	},
	
	handleChange: function(e){
	var newS = marked(e.target.value);	
	this.props.onTextChange(newS); 	
		
	}
});

module.exports = TextEditor;