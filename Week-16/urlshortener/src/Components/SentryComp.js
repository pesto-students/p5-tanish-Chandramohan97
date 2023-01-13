import React from "react";

export default function SentryComp() {
  return (
    <button
      onClick={() => {
        throw new Error("Sentry Alert is created");
      }}
    >
      Break the world
    </button>
  );
}
