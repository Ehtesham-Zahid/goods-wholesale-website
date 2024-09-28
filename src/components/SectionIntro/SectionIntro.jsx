import "./SectionIntro.css";

const SectionIntro = (props) => {
  return (
    <section className="section-intro rounded-3xl  bg-sky-200        bg-no-repeat  bg-center bg-cover h-[280px] md:h-[350px] lg:h-[480px] my-2 flex justify-center lg:justify-start lg:pl-44 items-center">
      <div className=" p-10 md:p-16 lg:p-24   w-fit text-bg ">
        <p className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-white">
          {props.mainText}
        </p>
      </div>
    </section>
  );
};

export default SectionIntro;
