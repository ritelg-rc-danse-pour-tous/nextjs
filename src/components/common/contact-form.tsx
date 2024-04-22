// @ts-nocheck
"use client";

import { contact } from "@/actions/contact";
import { Alert, Email, Input, SendButton, Textarea } from "@/components/ui";
import { useState } from "react";

interface Props extends React.FormHTMLAttributes<HTMLFormElement> {
  endpoint: string;
}

type Error = {
  [key: string]: string;
};

type Message = {
  type: string;
  message: string;
};

type StateButton = "loading" | "sending" | "to_send" | "default";

export default function ContactFormJs({ children, endpoint, ...props }: Props) {
  const [error, setError] = useState<Error[] | []>([]);
  const [message, setMessage] = useState<Message>();
  const [stateButton, setStateButton] = useState<StateButton>("default");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStateButton("loading");
    const data = new FormData(event.currentTarget);
    const target = event.currentTarget;
    contact(data).then((data) => {
      if (data.type === "z-error") {
        setError(data.errors);
        setStateButton("default");
      }
      if (data.danger) {
        setError(data.danger);
        setStateButton("default");
      }
      if (data.type && data.type === "success") {
        setStateButton("sending");
      }
      setMessage(data);
    });

    // fetch(endpoint, {
    //   method: "POST",
    //   body: data,
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if (data.danger) {
    //       setError(data.danger);
    //     }
    //     if (data.type && data.type === "success") {
    //       setStateButton("sending");
    //     }
    //     setMessage(data);
    //     // TODO: Nettoyer les input et textarea après l’envoi, ça ne fonctionne pas
    //     target.querySelectorAll("input, textarea").forEach((el) => {
    //       el.value = "";
    //       debugger;
    //     });
    //   });
  }
  return (
    <>
      <form {...props} onSubmit={handleSubmit}>
        <Email
          label="Email"
          id="email"
          name="email"
          required
          error={error["email"] ?? null}
        />
        <Input
          type="text"
          label="Sujet de votre message"
          id="email"
          name="sujet"
          error={error["sujet"] ?? null}
          required
        />
        <Textarea
          label="Votre message"
          id="message"
          name="message"
          required
          error={error["message"]}
        />
        {message && message.type && (
          <Alert type={message.type} message={message.message} />
        )}

        <SendButton stateProps={stateButton} />
        {/* <CSSTransition in={isSending} timeout={200} nodeRef={refButton}>
          <ForwardButton type="submit" ref={refButton}>
            {loading && <SpinningLoader />}
            {loading ? <SpinningLoader width={1} /> : <SendIcon />}
            Envoyer
          </ForwardButton>
        </CSSTransition> */}
      </form>
    </>
  );
}
