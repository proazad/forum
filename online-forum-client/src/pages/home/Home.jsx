import Announcement from "../../components/Announcement/Announcement";
import AvailableTag from "../../components/AvailableTag/AvailableTag";
import Header from "../../components/Header/Header";
import PostComponent from "../../components/PostComponent/PostComponent";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <AvailableTag></AvailableTag>
      <Announcement></Announcement>
      <PostComponent></PostComponent>
    </div>
  );
};

export default Home;
