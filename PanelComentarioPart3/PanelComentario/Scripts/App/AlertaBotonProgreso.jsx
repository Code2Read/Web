'use strict';

var AlertaBotonProgreso = React.createClass({
    render: function () {
        return (
            <div>
                <button className="btn btn-lg btn-warning">
                    <span className="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> Cargando...
                </button>
            </div>
        );
    }
});