import { FormError } from "@/components/ui";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string | string[];
  children?: React.ReactNode;
}

export default function Radio({ label, error, children, ...props }: Props) {
  let cs = props.className && props.className.length > 0 ? props.className : "";
  if (error) {
    cs += " is-invalid";
  }
  return (
    <div className="form-row">
      {error && <FormError error={error} />}
      <label htmlFor={props.id} className="input-radio">
        <input type="radio" className={cs} {...props} />
        {children || label}
      </label>
    </div>
  );
}
