const React = require("react");
require("./css/markdown.css");

const MarkDownView = React.createClass({
	
	
	render: function() {
	return(
	<div className="content" dangerouslySetInnerHTML={{__html:this.props.markup}}>
		
	</div>
	)	
	},
});


module.exports = MarkDownView;