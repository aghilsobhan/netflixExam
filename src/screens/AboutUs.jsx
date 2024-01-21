import Head from "../componnents/Head";
import Layout from "../layout/Layout";
function AboutUs() {
  return (
    <Layout>
      <div className="min-height-screen container mx-auto my-6 px-2 ">
        <Head title="About Us" />
        <div className="xl:py-20 py-20 px-4">
          <div className="grid grid-flow-row xl:grid-cols-2 gap-4 xl:gap-16 items-center">
            <div>
              <h3 className="text-xl lg:text-3xl mb-4 font-semibold text-text">
                Wellcome to our Netflixo
              </h3>
              <div className="mt-3 text-sm leading-8 text-text ">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem laborum vel eum harum eos, porro autem
                  cupiditate magni culpa! Ad. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Exercitationem laborum vel eum
                  harum eos, porro autem cupiditate magni culpa!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem laborum vel eum harum eos, porro autem
                  cupiditate magni culpa! Ad. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Exercitationem laborum vel eum
                  harum eos, porro autem cupiditate magni culpa!
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="p-8 bg-dry rounded-lg">
                <span className="text-text text-3xl block font-extrabold ">
                  10K
                </span>
                <h4 className="text-text text-lg font-semibold my-2">
                  Listed Movies
                </h4>
                <p className="mb-0 text-text leading-7 text-sm">
                  Lorem ipsum dolor sit amet consectetur
                </p>
              </div>
              <div className="p-8  bg-dry block rounded-lg">
                <span className="text-text text-3xl block font-extrabold mt-4">
                  8K
                </span>
                <h4 className="text-text text-lg font-semibold my-2">
                  Lovely Movies
                </h4>
                <p className="mb-0 text-text leading-7 text-sm">
                  Lorem ipsum dolor sit amet consectetur
                </p>
              </div>
              </div>
            </div>
            <div className="mt-10 lg-mt-0 ">
              <img src="/images/3.jpg" className="w-full xl:block hidden h-header rounded-lg object-cover" alt="aboutus" />

            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutUs;
