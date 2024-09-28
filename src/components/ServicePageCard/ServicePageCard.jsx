import ServiceImage from "../../assets/service-1.jpg";

const ServicePageCard = (props) => {
  return props.direction === "left" ? (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 ">
      <img src={props.image} className="rounded-full w-64 h-64" />
      <div className="flex flex-col">
        <p className=" text-2xl sm:text-3xl font-semibold mb-3">
          {props.title}
        </p>
        <p className="text-justify">{props.desc}</p>
      </div>
    </div>
  ) : (
    <div className="flex  flex-col md:flex-row justify-center  items-center gap-10 ">
      <div className="flex flex-col">
        <p className="text-2xl sm:text-3xl font-semibold mb-3">{props.title}</p>
        <p className="text-justify">{props.desc}</p>
      </div>
      <img src={props.image} className="rounded-full w-64 h-64" />
    </div>
  );
};

export default ServicePageCard;
