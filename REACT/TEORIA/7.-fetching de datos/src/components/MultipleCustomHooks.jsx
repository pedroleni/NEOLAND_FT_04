import React from "react";
import { useCounter, useFetch } from "../hooks";
import { Quote, LoadingQuote } from "./";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );
  // !!data --> que haya data
  const { author, quote } = !!data && data[0];

  if (hasError) {
    return (
      <>
        <div className="alert alert-danger text-center">
          {hasError.toString()}
        </div>
      </>
    );
  }
  return (
    <>
      {isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}

      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={() => increment()}
      >
        NEXT QUOTE
      </button>
    </>
  );
};
