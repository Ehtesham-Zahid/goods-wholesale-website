import ServiceImage from "../../assets/service-1.jpg";

const ServicePageCard = (props) => {
  return props.direction === "left" ? (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 ">
      <img src={ServiceImage} className="rounded-full w-64 h-64" />
      <div className="flex flex-col">
        <p className=" text-2xl sm:text-3xl font-semibold mb-3">
          Agricultural Commodities
        </p>
        <p className="text-justify">
          Our company has been playing an integral part in agro commodities and
          has a handful of suppliers and imports of agro goods such as rice,
          soybeans, wheat and a few more items in play. Agro goods imports and
          exports are not easy as they require fumigation, customs, readiness,
          health checks and many other proceedings before they are shipped and
          to their rightful owner. With our firm, you need not worry as we can
          do everything for you, book a call with our team and we’ll sort
          everything out.
        </p>
      </div>
    </div>
  ) : (
    <div className="flex  flex-col md:flex-row justify-center  items-center gap-10 ">
      <div className="flex flex-col">
        <p className="text-2xl sm:text-3xl font-semibold mb-3">
          Agricultural Commodities
        </p>
        <p className="text-justify">
          Our company has been playing an integral part in agro commodities and
          has a handful of suppliers and imports of agro goods such as rice,
          soybeans, wheat and a few more items in play. Agro goods imports and
          exports are not easy as they require fumigation, customs, readiness,
          health checks and many other proceedings before they are shipped and
          to their rightful owner. With our firm, you need not worry as we can
          do everything for you, book a call with our team and we’ll sort
          everything out.
        </p>
      </div>
      <img src={ServiceImage} className="rounded-full w-64 h-64" />
    </div>
  );
};

export default ServicePageCard;
