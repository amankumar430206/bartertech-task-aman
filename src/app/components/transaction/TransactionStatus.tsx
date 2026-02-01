type Props = {
  status: boolean;
};

export default function TransactionStatus({ status }: Props) {
  if (status === true) {
    return (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
        Success
      </span>
    );
  }

  // For simplicity — real app would have pending/failed states
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
      Failed
    </span>
  );
}
