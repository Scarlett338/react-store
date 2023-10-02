import React from "react";

export default function FAQ(props) {
  return (
    <div className="FAQ">
      <section>
        <h3>{props.q}</h3>
        <p>{props.ans}</p>
      </section>
    </div>
  );
}
