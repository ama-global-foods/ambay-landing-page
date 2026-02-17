import { TextareaHTMLAttributes } from 'react'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

export default function Textarea({
  label,
  error,
  className = '',
  ...props
}: TextareaProps) {
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={props.id}
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          {label}
          {props.required && <span className="ml-1 text-deep-teal">*</span>}
        </label>
      )}
      <textarea
        className={`min-h-[120px] w-full resize-y rounded-md border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-colors focus:border-deep-teal focus:outline-none focus:ring-2 focus:ring-deep-teal focus:ring-offset-0 ${
          error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
        } ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-xs text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
