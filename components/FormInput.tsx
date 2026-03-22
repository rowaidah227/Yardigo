'use client';

interface FormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  hint?: string;
}

export default function FormInput({
  label,
  error,
  hint,
  ...props
}: FormInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-900 mb-1">
        {label}
        {props.required && <span className="text-red-600">*</span>}
      </label>
      <input
        {...props}
        className={`w-full px-3 py-2 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent ${
          error
            ? 'border-red-300 bg-red-50'
            : 'border-slate-300 bg-white'
        }`}
      />
      {hint && <p className="text-xs text-slate-600 mt-1">{hint}</p>}
      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
    </div>
  );
}
