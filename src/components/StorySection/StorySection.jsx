import "./StorySection.css";

const StorySection = () => {
  return (
    <section className="bg-[#fff9ec] rounded-3xl py-24 story-section">
      <div className="w-5/6 md:w-3/4 mx-auto ">
        <p className="text-center text-[#c8ae77] font-bold mb-5">OUR STORY</p>
        <p className="text-center mb-14 text-4xl leading-relaxed">
          A story where innovation
          <br /> meets integration
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <p className="sm:tracking-wider  leading-relaxed  text-justify">
            Niyat Goods Wholesalers L.L.C is an integrated biz concept-solutions
            company founded in 2009 by a group of ex-pat entrepreneurs. In its
            mission to create an exchangeable culture across the w/online
            business hubs, they use connectivity brokers to integrate its people
            within the overall project across Qatar, United Arab Emirates and
            Hong Kong.
          </p>
          <p className="sm:tracking-wider  leading-relaxed  text-justify">
            G.C.C. is a strong regional player and includes facilities stocked
            in Al-Ahsa, Palestine and Abu Dhabi. The facilitation of trade
            employing warehousing & distribution, export consignment forwarding,
            and general information obligations.
            <br />
            Our operations are managed through our offices in five countries
            with head office in the U.A.E. We deliver Value to our
            business-to-business clients in the Middle East and North Africa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
