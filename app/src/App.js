import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import CampaignList from "./components/CampaignList";

const URI = "https://www.plugco.in/public/take_home_sample_feed";

const App = () => {
  const [campaignData, setCampaignData] = useState([]);

  useEffect(() => {
    (async function fetchData() {
      const { campaigns } = (await axios.get(URI)).data;
      setCampaignData(campaigns);
    })();
  }, []);

  return (
    <div>
      <Header />
      <CampaignList campaigns={campaignData} />
    </div>
  );
};

export default App;
