import { Fade } from "react-awesome-reveal";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useState, useRef, useEffect } from "react";

export default function ThirdSection(props) {
  const ref = props.refProp;
  // const [isIntersecting, setIsIntersecting] = useState(false);
  // const ref = useRef(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       console.log(entry);
  //       setIsIntersecting(entry.isIntersecting);
  //     },
  //     { rootMargin: "-300px" }
  //   );
  //   console.log(isIntersecting);
  //   observer.observe(ref.current);

  //   return () => observer.disconnect();
  // }, [isIntersecting]);
  return (
    <section
      ref={ref}
      id="third-section"
      className="flex justify-center min-h-screen max-w-screen-xl max-md:max-w-sm w-full mx-auto max-md:mt-5 max-md:mb-36"
    >
      <div className="flex flex-col w-full  md:pt-32 font-nunito ">
        <h1 className="text-5xl text-[#407BFF] font-bold mx-auto">
          Nos Services
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="flex flex-col md:flex-row items-center justify-between md:w-10/12">
            <Fade direction="up" triggerOnce delay={200}>
              <Card className="max-w-[18rem] md:mt-32 mt-10 ">
                <CardMedia
                  image="bank.jpg"
                  title="green iguana"
                  className="h-40 w-full"
                />
                <CardContent className="bg-blue-900 text-gray-100">
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className=" text-gray-100"
                  >
                    Banques et Assurances
                  </Typography>
                  <Typography variant="body2">
                    Vivamus nisi massa, ullamcorper eu tristique nec, facilisis
                    at elit. Aenean venenatis tempus odio, eu consequat odio.
                    Suspendisse rhoncus enim eget justo laoreet rhoncus at eu
                    leo. Maecenas eget tincidunt erat.
                  </Typography>
                </CardContent>
              </Card>
            </Fade>
            <Fade direction="up" triggerOnce delay={350}>
              <Card className="max-w-[18rem] md:mt-32 mt-10">
                <CardMedia
                  image="digitale.jpg"
                  title="green iguana"
                  className="h-40 w-full"
                />
                <CardContent className="bg-blue-900 text-gray-100">
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className=" text-gray-100"
                  >
                    Expérience Digitale
                  </Typography>
                  <Typography variant="body2">
                    Vivamus nisi massa, ullamcorper eu tristique nec, facilisis
                    at elit. Aenean venenatis tempus odio, eu consequat odio.
                    Suspendisse rhoncus enim eget justo laoreet rhoncus at eu
                    leo. Maecenas eget tincidunt erat.
                  </Typography>
                </CardContent>
              </Card>
            </Fade>
            <Fade direction="up" triggerOnce delay={500}>
              <Card className="max-w-[18rem] md:mt-32 mt-10">
                <CardMedia
                  image="services.jpg"
                  title="green iguana"
                  className="h-40 w-full"
                />
                <CardContent className="bg-blue-900 text-gray-100">
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className=" text-gray-100"
                  >
                    Services
                  </Typography>
                  <Typography variant="body2">
                    Vivamus nisi massa, ullamcorper eu tristique nec, facilisis
                    at elit. Aenean venenatis tempus odio, eu consequat odio.
                    Suspendisse rhoncus enim eget justo laoreet rhoncus at eu
                    leo. Maecenas eget tincidunt erat.
                  </Typography>
                </CardContent>
              </Card>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}
