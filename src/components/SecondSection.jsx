import { Fade } from "react-awesome-reveal";
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function SecondSection(props) {
  const ref = props.refProp;
  const cacheBuster = Math.floor(Math.random() * 100000);
  return (
    <section
      ref={ref}
      id="second-section"
      className="flex justify-center md:items-center min-h-screen bg-blue-900 max-md:mt-5 max-md:mb-36 max-md:p-5  "
    >
      <div className="max-w-screen-xl max-md:max-w-sm w-full mx-auto">
        <div className="flex flex-col w-full md:flex-row">
          <div className="md:w-2/6 flex justify-center items-center max-md:my-12">
            <LazyLoadImage
              src={`animate.svg?${cacheBuster}`}
              alt=""
              className=""
            />
          </div>
          <div className="md:w-4/6 flex max-md:justify-center max-md:text-left  md:items-center md:pl-32">
            <div className="max-md:mb-12">
              <Fade
                triggerOnce
                delay={200}
                className="text-blue-400 font-black text-4xl font-nunito"
              >
                <h2>Qui Sommes Nous?</h2>
              </Fade>
              <Fade
                triggerOnce
                delay={350}
                className="text-white font-normal text-xl font-nunito"
              >
                <h5>un cabinet de conseil en IT</h5>
              </Fade>
              <Fade
                triggerOnce
                delay={500}
                className="text-gray-500 font-normal text-sm font-rubik mt-3"
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  sollicitudin sapien sit amet tortor pretium interdum.
                  Phasellus rutrum bibendum massa, eget posuere arcu ullamcorper
                  vel. Nunc iaculis, est at lacinia dignissim, orci erat
                  sagittis urna, a varius ipsum ex in enim. Sed aliquet ante
                  congue sapien mattis facilisis id nec orci. Pellentesque
                  tempus fringilla ex, ut aliquam risus bibendum non.
                  Suspendisse finibus enim in enim semper ultrices. Vivamus
                  felis massa, egestas nec magna sit amet, auctor eleifend nibh.
                  Nunc vulputate felis in sapien vehicula, at fringilla est
                  porta. Aliquam eleifend lorem metus, vel placerat tortor
                  mattis id. Quisque felis ipsum, sodales at placerat vitae,
                  euismod eget justo. Suspendisse vehicula felis sed mauris
                  accumsan rhoncus.
                </p>
              </Fade>
              <Fade
                triggerOnce
                delay={650}
                className="text-gray-500 font-normal text-sm font-rubik mt-3"
              >
                <p>
                  Phasellus rhoncus in sem eu ullamcorper. In hac habitasse
                  platea dictumst. Sed a erat a ex feugiat rhoncus. Maecenas eu
                  tortor dui. Quisque et lectus id turpis auctor convallis. Nam
                  et lacus vehicula, vehicula lacus at, egestas ipsum. Etiam
                  lacus mauris, placerat at ullamcorper vel, condimentum quis
                  augue. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Cras a est nisi. Donec nec massa commodo, pretium lectus
                  id, mollis augue. Duis at neque ullamcorper, consequat lacus
                  vitae, efficitur nisl. In sed venenatis nibh, et lacinia erat.
                </p>
              </Fade>
              <Fade
                triggerOnce
                delay={800}
                className="text-gray-500 font-normal text-sm font-rubik mt-3"
              >
                <p>
                  Curabitur egestas ex vel dui feugiat, quis eleifend elit
                  sollicitudin. Fusce a efficitur magna. Phasellus sit amet
                  convallis sapien. Donec at velit at metus fringilla tincidunt
                  vitae a diam. In tempor varius nisi quis pretium. Vestibulum
                  ante ipsum primis in faucibus orci luctus et ultrices posuere
                  cubilia curae; Nulla sed viverra nisl, quis varius nulla. Sed
                  venenatis nunc nec ex commodo dapibus. Suspendisse dignissim
                  suscipit metus et blandit. Ut tristique commodo libero, sit
                  amet venenatis dui placerat eu. Donec ac viverra neque.
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
