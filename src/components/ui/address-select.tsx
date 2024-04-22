"use client";

import { FormError } from "@/components/ui";
import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string | string[];
  limit?: number;
  selectAddress: (address: AddressApi) => void;
}

type Address = {
  value: string;
  label: string;
};

export type AddressApi = {
  id: string;
  label: string;
  city: string;
  citycode: string;
  context: string;
  street: string;
  name: string;
  postcode: string;
};

export default function AddressSelect({
  label,
  error,
  limit = 20,
  selectAddress,
  ...props
}: Props) {
  const [address, setAddress] = useState<AddressApi[]>([]);
  const [timeoutSearch, setTimeoutSearch] = useState<NodeJS.Timeout | null>(
    null,
  );
  const [search, setSearch] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState("");

  const ref = useRef(null);
  useEffect(() => {
    if (search.length < 5) return;
    if (timeoutSearch) clearTimeout(timeoutSearch);
    const t = setTimeout(() => {
      searchAddress(search);
      setShowResults(true);
    }, 500);
    setTimeoutSearch(t);
    return () => {
      clearTimeout(t);
    };
  }, [search]);

  function searchAddress(value: string) {
    fetch(`https://api-adresse.data.gouv.fr/search/?q=${value}&limit=${limit}`)
      .then((response) => response.json())
      .then((response) => {
        if (response && response.features) {
          setAddress(response.features.map((a: any) => a.properties));
        }
      });
  }

  return (
    <>
      <div className="form-group input-select-address">
        <label htmlFor={props.id}>{label}</label>
        <input
          type="text"
          placeholder={props.placeholder ?? label}
          className={`form-control ${error ? "is-invalid" : ""}`}
          {...props}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setSelectedAddress("");
          }}
        />
        {selectedAddress.length > 0 && (
          <p className="flash-message flash-success">{selectedAddress}</p>
        )}

        {error && <FormError error={error} />}
        <CSSTransition
          in={showResults && address.length > 0}
          timeout={300}
          nodeRef={ref}
        >
          <ul ref={ref}>
            {address.map((a) => (
              <li
                key={a.id}
                onClick={() => {
                  setShowResults(false);
                  selectAddress(a);
                  setSelectedAddress(a.label);
                  setSearch("");
                }}
              >
                {a.label}
              </li>
            ))}
          </ul>
        </CSSTransition>
      </div>
    </>
  );
}
