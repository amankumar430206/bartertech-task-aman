// components/insights/SummaryCards.tsx
import { formatCurrency } from "@/app/lib/utils";

type Props = {
  totalLoaded: number;
  totalSuccessfulAmount: string;
  successRate: string;
  topCategory: { name: string; amount: string };
};

export default function SummaryCards({ totalLoaded, totalSuccessfulAmount, successRate, topCategory }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <Card title="Total Transactions" value={totalLoaded.toString()} />
      <Card title="Successful Amount" value={formatCurrency(Number(totalSuccessfulAmount))} />
      <Card title="Success Rate" value={successRate} />
      <Card title="Top Category" value={`${topCategory.name} (${formatCurrency(Number(topCategory.amount))})`} />
    </div>
  );
}

// small helper
function Card({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white border rounded-lg p-4 shadow-sm">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-semibold mt-1">{value}</p>
    </div>
  );
}
