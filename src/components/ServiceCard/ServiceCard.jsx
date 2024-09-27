import ServiceImage from "../../assets/service-1.jpg";

const ServiceCard = () => {
  return (
    <div className="flex flex-col border-4 border-sky-500 items-start w-80  bg-white p-3 rounded-xl">
      <img src={ServiceImage} className="  rounded-xl" />
      <p className="text-sky-500 tracking-tighter font-bold text-2xl mt-2 mb-4">
        Carbon Credits
      </p>
      <p className="">
        Lorem ipsum dolor sit amet. Lorem, ipsum dolor. Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet. Lorem, ipsum dolor.
      </p>
    </div>
  );
};

export default ServiceCard;
