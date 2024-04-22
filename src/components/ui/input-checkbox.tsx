import { FormError } from "@/components/ui";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string | string[];
}

export default function Checkbox({ label, error, ...props }: Props) {
  let cs = props.className && props.className.length > 0 ? props.className : "";
  if (error) {
    cs += " is-invalid";
  }
  return (
    <div className="form-row">
      {error && <FormError error={error} />}
      <label htmlFor={props.id} className="input-switch">
        <input
          type="checkbox"
          placeholder={props.placeholder ?? label}
          className={cs}
          {...props}
        />
        <span></span>
        {label}
      </label>
    </div>
  );
}
