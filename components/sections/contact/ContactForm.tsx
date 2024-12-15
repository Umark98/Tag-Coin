import React from "react";

interface FormFieldProps {
  label: string;
  type: string;
  placeholder?: string;
}

export const FormField: React.FC<FormFieldProps> = ({ label, type, placeholder }) => (
  <div className="form-field">
    <label className="block text-sm font-medium mb-1">{label}</label>
    {type === "textarea" ? (
      <textarea
        className="form-input w-full border rounded-md p-2"
        placeholder={placeholder}
      />
    ) : (
      <input
        type={type}
        className="form-input w-full border rounded-md p-2"
        placeholder={placeholder}
      />
    )}
  </div>
);
