import React from 'react';

interface InputBoxProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  rows?: number; // for multiline textarea
}

export const InputBox: React.FC<InputBoxProps> = ({
  label,
  value,
  onChange,
  placeholder = '',
  type = 'text',
  required = false,
  rows = 4,
}) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      {label && <label style={{ display: 'block', marginBottom: '0.3rem' }}>{label}</label>}
      {type === 'textarea' ? (
        <textarea
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          rows={rows}
          style={{
            width: '100%',
            padding: '0.5rem',
            borderRadius: '4px',
            border: '1px solid #ccc',
            boxSizing: 'border-box',
          }}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          style={{
            width: '100%',
            padding: '0.5rem',
            borderRadius: '4px',
            border: '1px solid #ccc',
            boxSizing: 'border-box',
          }}
        />
      )}
    </div>
  );
};

export {};