using Akka.Actor;
using Akka.Routing;
using Model;

namespace Akka.Core
{
    public class OrderCoordinatorActor : ReceiveActor
    {
        private IActorRef ordenRouter;

        public OrderCoordinatorActor()
        {
            Receive<Order>(x => ordenRouter.Forward(x));
        }

        protected override void PreStart()
        {
            //var props = Props.Create<OrderActor>().WithRouter(FromConfig.Instance);
            //ordenRouter = Context.ActorOf(props, "Order");
            
            ordenRouter = Context.ActorOf(new RoundRobinPool(5).Props(Props.Create<OrderActor>()), "Order");

            base.PreStart();
        }
    }
}
