type Props = {
  value: ("success" | "failed" | "pending")[];
  onChange: (value: ("success" | "failed" | "pending")[]) => void;
};

const options = [
  { value: "success", label: "Success" },
  { value: "failed", label: "Failed" },
  { value: "pending", label: "Pending" },
] as const;

export default function StatusMultiSelect({ value, onChange }: Props) {
  return (
    <div className="flex gap-2 flex-wrap">
      {options.map((opt) => {
        const active = value.includes(opt.value);
        return (
          <button
            key={opt.value}
            onClick={() => {
              if (active) {
                onChange(value.filter((v) => v !== opt.value));
              } else {
                onChange([...value, opt.value]);
              }
            }}
            className={`px-3 py-1.5 text-sm rounded-full border transition-colors ${
              active
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
