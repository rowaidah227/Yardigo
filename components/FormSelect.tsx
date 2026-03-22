'use client';

interface FormSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: Array<{ value: string; label: string }>;
  error?: string;
}

export default function FormSelect({
  label,
  options,
  error,
  ...props
}: FormSelectProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-900 mb-1">
        {label}
        {props.required && <span className="text-red-600">*</span>}
      </label>
      <select
        {...props}
        className={`w-full px-3 py-2 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent ${
          error
            ? 'border-red-300 bg-red-50'
            : 'border-slate-300 bg-white'
        }`}
      >
        <option value="">Select {label.toLowerCase()}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
    </div>
  );
}
