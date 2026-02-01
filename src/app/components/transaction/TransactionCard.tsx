import { Transaction } from "@/app/lib/api/types";
import TransactionStatus from "./TransactionStatus";
import { formatDate, formatCurrency } from "@/app/lib/utils";

type Props = {
  transaction: Transaction;
};

export default function TransactionCard({ transaction }: Props) {
  const amount = Number(transaction.amount);

  return (
    <div className="bg-white border rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            src={transaction.avatar}
            alt={transaction.name}
            className="w-10 h-10 rounded-full object-cover"
            onError={(e) => (e.currentTarget.src = "https://i.pravatar.cc/40")}
          />
          <div>
            <p className="font-medium">{transaction.name}</p>
            <p className="text-sm text-gray-500">ID: {transaction.id}</p>
          </div>
        </div>

        <div className="text-right">
          <p className="font-semibold">
            {formatCurrency(amount)} {transaction.currency}
          </p>
          <p className="text-xs text-gray-500 mt-1">{formatDate(transaction.createdAt)}</p>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-3">
        <span className="inline-block px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full capitalize">
          {transaction.category}
        </span>
        <TransactionStatus status={transaction.status} />
      </div>
    </div>
  );
}
