import ServiceCard from "../ServiceCard/ServiceCard";

const ServicesSection = () => {
  return (
    <section className="my-5 rounded-3xl   py-10">
      <div className="w-5/6 md:w-3/4 mx-auto">
        <p className="mb-10 text-center text-sky-500 text-4xl font-bold">
          OUR SERVICES
        </p>
        <div className="flex justify-around flex-wrap gap-10">
          <ServiceCard />
          <ServiceCard /> <ServiceCard /> <ServiceCard /> <ServiceCard />{" "}
          <ServiceCard />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
