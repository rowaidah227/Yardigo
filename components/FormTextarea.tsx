'use client';

interface FormTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  hint?: string;
}

export default function FormTextarea({
  label,
  error,
  hint,
  ...props
}: FormTextareaProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-900 mb-1">
        {label}
        {props.required && <span className="text-red-600">*</span>}
      </label>
      <textarea
        {...props}
        className={`w-full px-3 py-2 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent resize-none ${
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
