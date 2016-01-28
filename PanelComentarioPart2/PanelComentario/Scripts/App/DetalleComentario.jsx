"use strict";
var DetalleComentario = React.createClass({
    render: function () {
        return (
		    <a href="#" className="list-group-item">
			    <h4 className="list-group-item-heading">{this.props.autor}</h4>
			    <span className="list-group-item-text" 
                      dangerouslySetInnerHTML={{__html:this.props.children.toString()}} />
		    </a>
        );
    }
});