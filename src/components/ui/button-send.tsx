"use client";
import { SpinningLoader } from "@/components/ui";
import clsx from "clsx";
import { Check, SendIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type AnimationState = "loading" | "sending" | "send" | "default";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  stateProps: AnimationState;
}

export default function SendButton({ stateProps, ...props }: Props) {
  const ref = useRef<HTMLButtonElement | null>(null);
  const [time, setTime] = useState<NodeJS.Timeout | null>(null);
  const [state, setState] = useState(stateProps);
  let cs = clsx(props.className, "btn");

  useEffect(() => {
    if (
      stateProps === "sending" &&
      state !== "sending" &&
      state !== "send" &&
      ref.current
    ) {
      // On commence l’animation par un pivot de l’Icône SendIcon de 45° ensuite on la fait traverser le bouton de gauche à droite
      console.log("sending");
      setState("sending");
      ref.current.classList.add("sending");
      ref.current?.classList.remove("send");
      const timeout = setTimeout(() => {
        // Animation Finie
        setState("send");
        ref.current?.classList.remove("sending");
        ref.current?.classList.add("send");
      }, 1800);
      setTime(timeout);
    } else if (stateProps === "loading") {
      setState("loading");
      ref.current?.classList.remove("send");
      ref.current?.classList.remove("sending");
    } else if (stateProps === "default") {
      setState("default");
      ref.current?.classList.remove("send");
      ref.current?.classList.remove("sending");
    }
    return () => {
      if (time) {
        clearTimeout(time);
      }
    };
  }, [state, stateProps]);
  /* 
    State == "loading" > <SpinningLoader width={1} />Envoyer
    State == send => Animation 
      - SendIcon rotate 45° et traverse le button de gauche à droite
      - Ensuite le texte change de Envoyer à Envoyé et le bouton deviens vert
   */

  return (
    <button ref={ref} className={cs} {...props}>
      {state === "send" && (
        <>
          <Check />
          Envoyé
        </>
      )}
      {(state === "default" || state === "sending") && (
        <>
          <SendIcon className="sending" />
          <span></span>
          Envoyer
        </>
      )}
      {state === "loading" && (
        <>
          <SpinningLoader width={1} />
          Envoi...
        </>
      )}
    </button>
  );
}
