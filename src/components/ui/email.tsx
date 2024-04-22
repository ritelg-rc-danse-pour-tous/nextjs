"use client";
import { FormError } from "@/components/ui";
import clsx from "clsx";
import { Mail } from "lucide-react";
import { useEffect, useState } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string | string[];
  value?: string;
  onChangeValue?: (value: string) => void;
}

export default function Input({
  label,
  error,
  onChangeValue,
  value,
  ...props
}: Props) {
  const [state, setState] = useState(value ?? "");
  let cs = props.className && props.className.length > 0 ? props.className : "";
  if (error) {
    cs += " is-invalid";
  }
  const csdiv =
    state.length > 0
      ? clsx("form-group", "form-input", "icon-present", "not-empty")
      : "form-group form-input icon-present";
  useEffect(() => {
    setState(value ?? "");
  }, [value]);
  return (
    <div className={csdiv}>
      <div className="form-icon">
        <Mail className="icon" />
        <input
          type="text"
          className={cs}
          value={state}
          onChange={(e) => {
            setState(e.target.value);
            if (onChangeValue) onChangeValue(e.target.value);
          }}
          {...props}
        />
        {props.type !== "hidden" && (
          <label className="is-invalid" htmlFor={props.id}>
            {label}
          </label>
        )}
      </div>
      {error && <FormError error={error} />}
    </div>
  );
}
