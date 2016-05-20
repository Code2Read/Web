using Akka.Actor;
using Akka.Routing;

namespace Akka.Core
{
    public class OrderCoordinatorActor : ReceiveActor
    {
        private IActorRef ordenRouter;

        public OrderCoordinatorActor()
        { 

        }

        protected override void PreStart()
        {
            var props = Props.Create<OrderActor>().WithRouter(FromConfig.Instance);
            ordenRouter = Context.ActorOf(props, "order");
            base.PreStart();
        }
    }
}
