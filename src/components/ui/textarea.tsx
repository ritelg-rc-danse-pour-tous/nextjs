import { FormError } from "@/components/ui";
import clsx from "clsx";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string | string[];
}

export default function Textarea({
  label,
  error,
  className,
  placeholder,
  ...props
}: Props) {
  const cs = clsx(className, error && "is-invalid");
  return (
    <div className="form-group form-group-textarea">
      <label className="is-invalid" htmlFor={props.id}>
        {label}
      </label>
      <textarea
        defaultValue={""}
        placeholder={placeholder}
        className={cs}
        {...props}
      />
      {error && <FormError error={error} />}
    </div>
  );
}
