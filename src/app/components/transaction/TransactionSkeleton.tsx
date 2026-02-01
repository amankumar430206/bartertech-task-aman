export default function TransactionSkeleton() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse flex-shrink-0" />
          <div className="space-y-2 flex-1">
            <div className="h-5 w-40 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-28 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>

        <div className="space-y-2 text-right">
          <div className="h-6 w-24 bg-gray-200 rounded animate-pulse ml-auto" />
          <div className="h-4 w-20 bg-gray-200 rounded animate-pulse ml-auto" />
        </div>
      </div>

      <div className="mt-4 flex gap-3">
        <div className="h-6 w-16 bg-gray-200 rounded-full animate-pulse" />
        <div className="h-6 w-20 bg-gray-200 rounded-full animate-pulse" />
      </div>
    </div>
  );
}
