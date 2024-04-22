"use client";
import { FormError } from "@/components/ui";
import { Eye, EyeOff, Lock } from "lucide-react";
import { useState } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string | string[];
}

export default function Password({ label, error, ...props }: Props) {
  let cs = props.className && props.className.length > 0 ? props.className : "";
  if (error) {
    cs += " is-invalid";
  }
  const [type, setType] = useState("password");

  function toggleType() {
    setType(type === "password" ? "text" : "password");
  }
  return (
    <div className="form-group password">
      <label className="is-invalid" htmlFor={props.id}>
        {label}
      </label>
      <div>
        <div className="form-icon">
          <Lock className="icon" />
          <input
            placeholder={props.placeholder ?? label}
            className={cs}
            type={type}
            {...props}
          />
          {type === "password" ? (
            <Eye size={32} className="eye" onClick={toggleType} />
          ) : (
            <EyeOff size={32} className="eye" onClick={toggleType} />
          )}
        </div>
      </div>
      {error && <FormError error={error} />}
    </div>
  );
}
