import React from "react";

function Spinner() {
  return (
    <div className="spinner bg-white d-flex align-items-center justify-contentcenter">
      <div class="spinner-grow text-warning" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;
