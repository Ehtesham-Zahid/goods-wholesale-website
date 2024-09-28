import AboutImage from "../../assets/about.jpg";

const AboutUsSection = () => {
  return (
    <section className="bg-  rounded-3xl py-24">
      <div className="w-5/6 md:w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        <div className="col-span-1 flex justify-center items-center">
          <img src={AboutImage} className="rounded-sm" />
        </div>
        <div className="flex flex-col items-start">
          <p
            style={{
              fontFamily: "Alike Angular, serif",
            }}
            className="text-sky-500 text-xl font-bold"
          >
            About Us
          </p>
          <p className="text-black text-xl md:text-2xl font-semibold mb-8">
            A story where innovation meets integration
          </p>
          <p className="text- font-medium sm:tracking-wider  leading-relaxed  text-justify">
            Niyat Goods Wholesalers L.L.C is an integrated biz concept-solutions
            company founded in 2014 by a group of ex-pat entrepreneurs. In its
            mission to create an exchangeable culture across the world’s online
            business hubs, they use connectivity brokers to integrate its people
            within the overall project across USA, Germany, United Arab
            Emirates, China, Singapore, India and Hong Kong.
            <br />
            Our operations are managed through our offices in five countries
            with head office in the U.A.E. We deliver Value to our
            business-to-business all over the world
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
