import "./home.css";
import { Helmet } from "react-helmet-async";
import ScrollUp from "../../components/scrollUp/scrollUp";
import {
  Component1,
  Component2,
  Component3,
  Component4,
  Component5,
  Component6,
  Component7,
  Component8,
} from "./Components/Components";

// const FtargetDate = new Date("2025-09-06T21:37:00");
// const stargetDate = new Date("2025-09-06T21:37:00");
let today = new Date();
let twoDaysLater = new Date(today);
twoDaysLater.setDate(today.getDate() + 2);

const Home = ({ Data, SetData }) => {
  const HomeData = Data.Home;
  return (
    <>
      <Helmet>
        <title>Ocazion | Home</title>
        <meta
          name="description"
          content="Ocazion | ecommerce website create using react"
        />
      </Helmet>
      <Component1 Data={HomeData.Component1} />
      <Component2
        TargetDate={twoDaysLater}
        Data={HomeData.Component2}
        rawData={Data}
        setrawData={SetData}
      />
      <HOne />
      <Component3 Data={HomeData.Component3} />
      <HOne />
      <Component4
        Data={HomeData.Component4}
        rawData={Data}
        setrawData={SetData}
      />
      <Component5 TargetDate={twoDaysLater} Data={HomeData.Component5} />
      <Component6
        Data={HomeData.Component6}
        rawData={Data}
        setrawData={SetData}
      />
      <Component7 Data={HomeData.Component7} />
      <Component8 Data={HomeData.Component8} />
      <ScrollUp />
    </>
  );
};

function HOne() {
  return (
    <div className="d-flex justify-content-center">
      <hr></hr>
    </div>
  );
}

export default Home;
