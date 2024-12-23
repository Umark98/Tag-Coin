interface FormFieldProps {
  label: string;
  type: "text" | "email" | "textarea";
  placeholder: string;
}

export const FormField = ({ label, type, placeholder }: FormFieldProps) => (
  <div>
    <label className="block text-sm font-medium text-gray-600 mb-2">
      {label}
    </label>
    {type === "textarea" ? (
      <textarea
        rows={4}
        className="w-full px-4 py-3 bg-purple-900/20 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500 text-gray-600"
        placeholder={placeholder}
      />
    ) : (
      <input
        type={type}
        className="w-full px-4 py-3 bg-purple-900/20 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500 text-gray-600"
        placeholder={placeholder}
      />
    )}
  </div>
);