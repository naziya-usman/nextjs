import React from "react";

const HeavyComponent = () => {
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h3>I am a Lazy Loaded Component!</h3>
      <p>I was only downloaded when you needed me.</p>
    </div>
  );
};

export default HeavyComponent;