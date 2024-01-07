import Layout from "../layout/Layout";
import Banner from "../componnents/home/Banner"
import PopularMovies from "../componnents/home/PopularMovies"
import Promose from "../componnents/home/Promose"
import TopRate from "../componnents/home/TopRate"



function HomeScreen() {
  return (
    <Layout>
      <div className="container mx-auto min-h-screen px-2 mb-6">
        <Banner/>
        <PopularMovies/>
        <Promose/>
        <TopRate/>
      </div>
    </Layout>
  );
}

export default HomeScreen;
