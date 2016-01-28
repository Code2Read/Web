"use strict"
var PanelComentario = React.createClass({
    cargarComentariosAPI: function () {
        var xhr = new XMLHttpRequest();
        xhr.open('get', this.props.cargarComentariosUrl, true);
        xhr.onload = function () {
            var data = JSON.parse(xhr.responseText);
            this.setState({ comentarios: data });
        }.bind(this);
        xhr.send();
    },
    enviarComentarioAPI: function (comentario) {

        var comentarios = this.state.comentarios;
        comentarios.unshift(comentario);
        this.setState({ comentarios: comentarios });

        var data = new FormData();
        data.append('Autor', comentario.Autor);
        data.append('Texto', comentario.Texto);

        var xhr = new XMLHttpRequest();
        xhr.open('post', this.props.envioComentarioUrl, true);

        xhr.send(data);
    },
    comentarioAgregadoAPI: function (comentarios) {
        this.setState({ comentarios: comentarios });
    },
    getInitialState: function () {
        return { comentarios: [] };
    },
    componentWillMount: function () {
        this.cargarComentariosAPI();
    },
    componentDidMount: function () {
        var comentarioHub = $.connection.comentarioHub;
        $.connection.hub.start();

        comentarioHub.client.agregarComentario = this.comentarioAgregadoAPI
    },
    render: function () {
        return (
		    <div className="panelComentarios">
			    <h1>Panel de comentarios</h1>
			    <RegistroComentario enviarComentario={this.enviarComentarioAPI}/>
			    <ListaComentario comentarios={this.state.comentarios} />
		    </div>
        );
    }
});