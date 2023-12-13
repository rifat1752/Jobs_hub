import Banner from "./Banner/Banner";
import CatagoriesList from "../CatagoriesList/CatagoriesList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CatagoriesList></CatagoriesList>
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default Home;
