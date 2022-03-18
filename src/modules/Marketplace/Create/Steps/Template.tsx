import React, { useState } from "react";
import Card from "modules/Marketplace/Create/Steps/components/Card";

import {
  TemplateNFT,
  TempalateExclusiveContent,
  TemplateOS,
  TemplateCommunity,
} from "components/Icons";

const MarketPlaceCreate = () => {
  const [selectedTemplateIndex, setSelectedTemplateIndex] = useState<
    number | null
  >(null);

  return (
    <div className="flex flex-col pb-12 ml-10 -mt-4">
      <span className="text-[19px] font-bold">Choose Your Template</span>
      <div className="grid grid-cols-4 gap-4 mt-6">
        <Card
          icon={<TemplateNFT />}
          title="Classic DAO"
          selected={selectedTemplateIndex === 0}
          onClick={() => setSelectedTemplateIndex(0)}
          list={[
            "Multi-sig wallet",
            "Access and manage it anywhere ",
            "DAO payouts made effortless",
            "DAO templates",
          ]}
        />
        <Card
          icon={<TemplateOS />}
          title="DeSci Project"
          selected={selectedTemplateIndex === 1}
          onClick={() => setSelectedTemplateIndex(1)}
          list={[
            "Fund your Open Source project",
            "Interoperability built in",
            "Traditional voted governance",
            "Reputational System",
          ]}
        />
        <Card
          icon={<TempalateExclusiveContent />}
          title="NFT Project"
          selected={selectedTemplateIndex === 2}
          onClick={() => setSelectedTemplateIndex(2)}
          list={[
            "Own your own Verse",
            "Unlock New economies",
            "Mint Your 3D Land",
            "Access to Solarity's Collection",
          ]}
        />
        <Card
          icon={<TemplateCommunity />}
          selected={selectedTemplateIndex === 3}
          onClick={() => setSelectedTemplateIndex(3)}
          title="Unions"
          list={[
            "NFT-DAO governance",
            "Based on reputational system",
            "Get hired instantly",
            "Create DAO Unions",
          ]}
        />
      </div>
    </div>
  );
};

export default MarketPlaceCreate;
