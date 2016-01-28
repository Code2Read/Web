using Microsoft.Owin;
using Owin;
[assembly: OwinStartup(typeof(PanelComentario.Startup))]

namespace PanelComentario
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.MapSignalR();
        }
    }
}