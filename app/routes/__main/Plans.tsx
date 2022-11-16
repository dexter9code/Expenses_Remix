import type { IconType } from "react-icons";
import { FaTrophy, FaHandshake } from "react-icons/fa";
import PricingPlan from "~/components/PricingPlan";

export interface Pricing {
  id: string;
  title: string;
  price: string;
  perks: string[];
  icon: IconType;
}

const PRICING_PLANS: Pricing[] = [
  {
    id: "p1",
    title: `Basic`,
    price: `Free-Forever`,
    perks: [`1 User`, `Up to 100 expenses/year`, `Basic analytics`],
    icon: FaHandshake,
  },
  {
    id: "p2",
    title: "Pro",
    price: "$9.99/month",
    perks: ["Unlimited Users", "Unlimited expenses/year", "Detailed analytics"],
    icon: FaTrophy,
  },
];

const Plans: React.FC = () => {
  return (
    <main id="pricing">
      <h2>Great Products, Simple Pricing</h2>
      <ol id="pricing-plans">
        {PRICING_PLANS.map((plan) => {
          return (
            <li key={plan.id} className='plan'>
              <PricingPlan
                icon={plan.icon}
                id={plan.id}
                perks={plan.perks}
                price={plan.price}
                title={plan.title}
              />
            </li>
          );
        })}
      </ol>
    </main>
  );
};

export default Plans;
