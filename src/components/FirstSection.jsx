import { Fade } from "react-awesome-reveal";
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function FirstSection(props) {
  const ref = props.refProp
  const cacheBuster = Math.floor(Math.random() * 100000);
  return (
    <section
      ref={ref}
      id="first-section"
      className="flex justify-center md:items-center h-screen max-w-screen-xl max-md:max-w-sm w-full mx-auto max-md:mt-5 max-md:mb-36"
    >
      <div className="flex flex-col w-full md:flex-row ">
        <div className="md:w-4/6 flex max-md:justify-center max-md:text-left  md:items-center max-md:order-2">
          <div>
            <Fade delay={200} triggerOnce className="max-md:pl-4">
              <h2 className="block text-2xl font-nunito font-semibold mb-3">
                Bienvenue chez
              </h2>
            </Fade>
            <Fade delay={350} triggerOnce className="max-md:pl-4">
              <h1 className="block text-4xl font-rubik text-[#407BFF] font-bold mb-3">
                Noun Insight
              </h1>
            </Fade>
            <Fade delay={500} triggerOnce className="max-md:pl-4">
              <div className="md:flex md:flex-row mb-7">
                <h2 className="mr-3 text-2xl inline-block font-semibold">
                  Nous Somme
                </h2>
                <h1 className="md:animate-typing animate-typing_phone text-2xl overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5  text-[#407BFF] font-bold block">
                  <span>un cabinet de conseil en IT</span>
                </h1>
              </div>
            </Fade>
            <Fade
              cascade
              damping={0.3}
              delay={650}
              triggerOnce
              className="max-md:pl-4 pb-2"
            >
              <p className="">
                <span className="font-semibold">Nous Insight</span> est un
                cabinet de conseil en informatique spécialisé dans les solutions
              </p>
              <p className="">
                numériques, l'amélioration des expériences digitales et la
                fourniture de services complets.
              </p>
              <p className="">
                Notre différenciation réside dans notre engagement envers
                l'innovation, la confiance et
              </p>
              <p className=""> l'excellence.</p>
            </Fade>
          </div>
        </div>
        <div className="md:w-2/6 flex justify-center items-center max-md:mt-10 max-md:order-1">
          <LazyLoadImage
            src={`typing-animate.svg?${cacheBuster}`}
            alt=""
            className=""
          />
        </div>
      </div>
    </section>
  );
}
