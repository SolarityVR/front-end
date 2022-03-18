import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <div className="flex flex-col gap-4 p-8 bg-brandblack rounded-3xl">
      <span className="text-[19px] font-bold">Roles:</span>
      <div className="flex flex-col gap-4 ">
        <div className="flex items-center gap-4">
          <Image
            src="/images/placeholder/your-dao/webxr.png"
            alt="Role"
            height={45}
            width={45}
          />
          <span className="text-base font-bold">
            Dev for <span className="text-secondary"> WebXR Union</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="/images/placeholder/your-dao/moneyboys.png"
            alt="Role"
            height={45}
            width={45}
          />
          <span className="text-base font-bold">
            C Suite for <span className="text-secondary"> Money Boys</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="/images/icons/Solarityround.png"
            alt="Role"
            height={45}
            width={45}
          />
          <span className="text-base font-bold">
            Mod for <span className="text-secondary"> SOL NFT Union</span>
          </span>
        </div>
      </div>
      <div className="flex justify-between">
        <span className="text-[19px] font-bold">General Karma:</span>{" "}
        <span>+113</span>
      </div>

      <div className="flex flex-col justify-between gap-2">
        <span className="text-[19px] font-bold">Common DAOs</span>
        <div className="flex justify-between gap-3">
          <Image
            src="/images/icons/tokens/degodsss.png"
            alt="Role"
            height={45}
            width={45}
          />{" "}
          <Image
            src="/images/placeholder/your-dao/moneyboys.png"
            alt="Role"
            height={45}
            width={45}
          />{" "}
          <Image
            src="/images/placeholder/your-dao/solgods.png"
            alt="Role"
            height={45}
            width={45}
          />{" "}
          <Image
            src="/images/icons/Solarityround.png"
            alt="Role"
            height={45}
            width={45}
          />{" "}
          <Image
            src="/images/placeholder/avatars/monkeround.png"
            alt="Role"
            height={45}
            width={45}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
