import clsx from "clsx";
import { forwardRef } from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ children, ...props }: Props) {
  const cs = clsx(props.className, "btn");
  return (
    <button className={cs} {...props}>
      {children}
    </button>
  );
}

export const ForwardButton = forwardRef(function ForwardButton(
  { children, ...props }: Props,
  ref: React.Ref<HTMLButtonElement>,
) {
  const cs = clsx(props.className, "btn");
  return (
    <button className={cs} ref={ref} {...props}>
      {children}
    </button>
  );
});

ForwardButton.displayName = "ForwardButton";
