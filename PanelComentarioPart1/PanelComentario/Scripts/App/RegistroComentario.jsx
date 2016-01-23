"use strict";

var RegistroComentario = React.createClass({
    submitComentario: function (e) {
        console.log("It woks!!!!!!!");
        e.preventDefault();
    },
    render: function () {
        return (
            <form className="form-inline" onSubmit={this.submitComentario}>
	            <div className="form-group">
		            <input type="text" className="form-control" placeholder="Alias" ref="autor" />
	            </div>
	            <div className="form-group">
		            <input type="text" className="form-control" placeholder="Comenta algo..." ref="texto" />
	            </div>
	            <input type="submit" value="Enviar" className="btn btn-primary" />
            </form>
        );
    }
});
