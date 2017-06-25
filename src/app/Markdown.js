const React = require("react");


const MarkDownView = React.createClass({
	
	
	render: function() {
	return(
	<div className="content" dangerouslySetInnerHTML={{__html:this.props.markup}}>
		
	</div>
	)	
	},
});


module.exports = MarkDownView;