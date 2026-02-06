export default function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full">
      <label className="mb-1 block text-xs font-medium text-gray-500">
        {label}
      </label>
      <div
        className={`w-full rounded-xl border bg-gray-50 px-3 py-2 text-gray-800 transition focus-within:border-gray-900 focus-within:ring-2 focus-within:ring-gray-900/10 ${
          error ? "border-red-400 focus-within:border-red-500 focus-within:ring-red-100" : "border-gray-200"
        }`}
      >
        {children}
      </div>
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}
