import React from "react";

const MapSection = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7218.131756922202!2d55.307214!3d25.234706!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d351d30120d%3A0xc64b8cfd9a0f82f9!2s301%20Oud%20Metha%20Rd%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1727520566670!5m2!1sen!2sus"
        width="100%"
        height="500"
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-3xl"
      ></iframe>
    </div>
  );
};

export default MapSection;
