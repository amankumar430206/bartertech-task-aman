import { formatCurrency } from "@/app/lib/utils";

type Props = {
  totalTransactions: number;
  totalSuccessfulAmount: string;
  successRate: string;
  topCategory: string;
};

export default function InsightsSummary({ totalTransactions, totalSuccessfulAmount, successRate, topCategory }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <Card title="Total Transactions" value={totalTransactions.toString()} />
      <Card title="Successful Amount" value={formatCurrency(Number(totalSuccessfulAmount))} />
      <Card title="Success Rate" value={`${successRate}%`} />
      <Card title="Top Category" value={topCategory} />
    </div>
  );
}

function Card({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border capitalize">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-semibold mt-1">{value}</p>
    </div>
  );
}
