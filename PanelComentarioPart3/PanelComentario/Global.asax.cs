using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace PanelComentario
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
        }

        protected void Application_Error()
        {
            var error = Server.GetLastError();
            var mensaje = error.ToString();
        }
    }
}
