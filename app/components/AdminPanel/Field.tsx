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
    <div>
      <label className="text-xs">{label}</label>
      <div className="w-full border border-gray-700 rounded-lg px-2 py-0.5 text-gray-500">
        {children}
      </div>
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}