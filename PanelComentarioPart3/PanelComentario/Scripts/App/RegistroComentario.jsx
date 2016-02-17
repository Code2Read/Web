"use strict";

var RegistroComentario = React.createClass({
submitComentario: function (e) {
    e.preventDefault();
    var autor = this.refs.autor.value.trim();
    var texto = this.refs.texto.value.trim();
    if (!texto || !autor) {
        return;
    }
    this.props.enviarComentario({ Autor: autor, Texto: texto });
    this.refs.autor.value = '';
    this.refs.texto.value = '';

    return;
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
