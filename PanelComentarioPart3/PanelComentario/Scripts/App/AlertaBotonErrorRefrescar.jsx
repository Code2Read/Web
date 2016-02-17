'use strict';
var AlertaBotonErrorRefrescar = React.createClass({
    volverCargarComentarios: function (e) {
        e.preventDefault();
        this.props.cargarComentarios();
        return;
    },
    render: function () {
        return (
            <div>
                <button className="btn btn-lg btn-danger" onClick={this.volverCargarComentarios}>
                    <span className="glyphicon glyphicon-repeat"></span> Volver a cargar
                </button>
            </div>
        );
    }
});