using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;
using System.Web.Optimization.React;

namespace PanelComentario
{
    public static class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new BabelBundle("~/bundles/app")
                .Include("~/Scripts/App/*.jsx")
                );

#if DEBUG
            BundleTable.EnableOptimizations = true;
#endif
        }
    }
}