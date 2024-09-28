import "./MandateSection.css";
const MandateSection = () => {
  return (
    <section className="py-24">
      <div className="w-5/6 md:w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
        <div className="col-span-1">
          <div className="h-fit  ps-10 py-16 bg-sky-400">
            <p className="text-2xl sm:text-3xl text-white mandate-text">
              OUR MANDATE
            </p>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <div className="mb-6">
            <p className="text-start text-sky-500 font-bold mb-3">MISSION</p>
            <p className="leading-loose">
              Niyat Good Wholesalers L.L.C. is built around creating trust with
              our consumers and delivering excellence with exceptional service
              quality held up to the highest standards.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-start text-sky-500 font-bold mb-3">VISION</p>
            <p className="leading-loose">
              Niyat Good Wholesalers L.L.C. is built around creating trust with
              our consumers and delivering excellence with exceptional service
              quality held up to the highest standards.
            </p>
          </div>
          <div className="mb-6">
            <p className="text-start text-sky-500 font-bold mb-3">
              CORE VALUES
            </p>
            <p className="leading-loose">
              Niyat Good Wholesalers L.L.C. is built around creating trust with
              our consumers and delivering excellence with exceptional service
              quality held up to the highest standards.
            </p>
          </div>
          <div className=" ">
            <p className="text-start text-sky-500 font-bold mb-3">GOALS</p>
            <p className="leading-loose">
              Niyat Good Wholesalers L.L.C. is built around creating trust with
              our consumers and delivering excellence with exceptional service
              quality held up to the highest standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MandateSection;
