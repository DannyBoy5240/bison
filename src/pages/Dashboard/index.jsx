import React from "react";
import {useNavigate} from "react-router-dom";

const Dashboard = () => {
  // Content
  const Content = () => {
    const navigate = useNavigate();
    const handleClickBridge = () => {
      navigate("/bridge");
    };
    return (
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="mt-14">
            <p className="text-3xl sm:text-5xl lg:text-6xl xl:text-8xl text-white font-medium">
              BUILD
            </p>
            <p className="animate-bounce text-3xl sm:text-5xl lg:text-6xl xl:text-8xl text-amber-500 font-medium">
              STABLECOINS
            </p>
            <p className="text-3xl sm:text-5xl lg:text-6xl xl:text-8xl text-white font-medium">
              ON BISON
            </p>
            <p>
              From the original inventor of zk-rollups on ordinals. Aiming to
              revolutionize DeFi, offering unparalleled speed and security in
              trading.
            </p>
            <p className="text-4x1 font-bold">NO BITCOIN SOFTFORK NEEDED!</p>
            <a href="https://dmaster-1.gitbook.io/bisonlabs/" target="_blank">
              <button className=" bg-black text-white border-2 border-solid border-white hover:bg-white hover:text-black rounded transition duration-300 ease-in-out mr-10 mt-14 w-32 py-2">
                Read Docs
              </button>
            </a>
            <button
              className=" bg-black text-white border-2 border-solid border-white hover:bg-white hover:text-black rounded transition duration-300 ease-in-out mr-10 mt-14 w-32 py-2"
              onClick={handleClickBridge}
            >
              Bridge Assets
            </button>
          </div>

          <div className="flex justify-center items-center flex-col mt-8">
            <img
              src="/img/menuImages/art1.png"
              alt="Art1"
              className="fadeIn max-w-xs lg:max-w-md"
            />
            <p className="text-center text-sans text-xl pt-6">
              BRC-20 Trading Is Now 1000x Faster
            </p>
          </div>
        </div>
      </div>
    );
  };

  // Explore Bison
  const ExploreCards = () => {
    const cardImageUrls = [
      "/img/menuImages/card1.png",
      "/img/menuImages/card2.png",
      "/img/menuImages/card3.png",
      "/img/menuImages/card4.png",
    ];
    const cardTitles = [
      "ZK-rollup on Bitcoin",
      "DeFi on Bitcoin",
      "ZK—Stark x Ordinals",
      "Community & Developers",
    ];
    const cardContents = [
      "Utilizing sovereign-style blockchain technology, Bison Labs offers a secure, decentralized platform, overcoming traditional Bitcoin ecosystem limitations. Our focus is on delivering a high-speed, efficient, and secure transaction environment, propelling the future of native Bitcoin transactions.",
      "Bison aims to redefine the decentralized finance (DeFi) ecosystem by tapping into the untapped potentials of Bitcoin— the most decentralized, secure, and reliable blockchain in the world. Bison introduces smart contract functionalities to Bitcoin without necessitating any alterations to the existing blockchain.",
      "Zk-STARKs provide Bison with enhanced privacy and scalability through advanced cryptographic proofs, enabling efficient, secure transaction verification without revealing sensitive data. Ordinals allow Bison to execute complex smart contracts and decentralized applications (dApps) directly on the Bitcoin blockchain.",
      "Bison Labs is committed to empowering developers to build in the Bitcoin space. Our platform is ready for developers to create innovative applications, supported by essential tools and resources. We actively assist developers in bringing their projects to fruition. If you're ready to build on Bitcoin's robust foundation, reach out to us at contact@bisonlabs.io",
    ];

    return (
      <div className="container mx-auto px-4">
        <div className="custom-line text-white"></div>

        <hr className="border-0 h-1 bg-gradient-to-r from-black via-gray-500 to-black m-20" />

        <div className="animate-pulse flex justify-center text-3xl sm:text-4xl lg:text-5xl text-white my-14 font-bold">
          Explore Bison
        </div>

        <div className="grid justify-center xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardImageUrls.map((image, index) => (
            <div key={image} className="flex justify-center">
              <div className=" p-6 bg-black text-white border border-gray-200 rounded-3xl dark:bg-black">
                <div className="flex justify-center items-center">
                  <img src={image} className="max-h-12" />
                </div>
                <div className="flex justify-center items-center my-5 text-md font-semibold tracking-tight text-white dark:text-white">
                  {cardTitles[index]}
                </div>

                <p className="mb-3 font-light text-gray-400 dark:text-gray-400">
                  {cardContents[index]}
                </p>
              </div>
            </div>
          ))}
        </div>

        <hr className="border-0 h-1 bg-gradient-to-r from-black via-gray-500 to-black m-20" />
      </div>
    );
  };

  // Secured Content
  const SecuredContent = () => {
    return (
      <div className="container mx-auto px-4">
        <div className="flex justify-center text-3xl sm:text-4xl lg:text-5xl text-white my-14 font-bold">
          Secured by Bitcoin
        </div>
        <div className="flex justify-center font-medium text-white mx-10 sm:mx-16 md:mx-28 lg:mx-48">
          Bison Labs elevates Bitcoin's utility beyond just a cryptocurrency by
          enabling developers to build diverse applications directly on
          Bitcoin's blockchain. This innovation introduces general
          programmability to Bitcoin, facilitating the creation of DApps, smart
          contracts, and financial tools, leveraging Bitcoin's security and
          trust. Bison Labs transforms Bitcoin into a multifaceted development
          platform, opening new avenues for innovation and trust in blockchain
          technology.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 ">
          <div className="md:col-span-2 mt-14">
            <p className="text-1xl sm:text-2xl lg:text-3xl text-white font-medium my-14">
              On Bitcoin but 1000x Faster!
            </p>

            <p className="font-medium">
              Bison enables smart contract functionality with no code changes
              needed to Bitcoin. On average Bison reduces costs by 76x for
              users.
            </p>
            <p className="text-4x1 font-bold">NO BITCOIN SOFTFORK NEEDED!</p>
          </div>
          <div className="md:col-span-1  flex justify-center items-center my-16">
            <img
              src="/img/menuImages/bitcoin1.gif"
              alt="Art1"
              className="max-w-xs"
            />
          </div>
        </div>
      </div>
    );
  };

  // Join Community
  const JoinCommunity = () => {
    const imageUrl = [
      [
        "/img/menuImages/twitter-black.webp.png",
        "https://twitter.com/bison_labs",
      ],
      [
        "/img/menuImages/discord-black.webp.png",
        "https://discord.gg/NcyRQ6esdR",
      ],
      [
        "/img/menuImages/github-black.webp.png",
        "https://dmaster-1.gitbook.io/bisonlabs/",
      ],
      [
        "/img/menuImages/telegram-black.webp.png",
        "https://t.me/+a5g-srOWtthkNGI5",
      ],
      ["/img/menuImages/forum-black.webp.png", "/"],
      ["/img/menuImages/reddit-black.webp.png", "/"],
    ];
    const title = ["X", "Discord", "Github", "Telegram", "Forum", "Reddit"];
    const content = [
      "Read the latest",
      "Get involved",
      "Build with us",
      "Join discussion",
      "Read Updates",
      "See more",
    ];
    return (
      <div className="bg-gradient-to-r from-amber-300 to-amber-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 py-10 gap-10">
            <div className="md:col-span-3">
              <p className="flex justify-start text-3xl sm:text-4xl lg:text-5xl text-white font-bold my-14">
                Join the Community
              </p>
              <p className="flex justify-start font-medium text-white my-14 ">
                Join the Bison Labs community to stay up-to-date with the latest
                in ZK innovations!
              </p>
            </div>
            <div className="md:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {imageUrl.map((image, index) => (
                  <div key={image[0]} className="flex items-center">
                    <div>
                      <a href={image[1]}>
                        <img src={image[0]} className="w-10 m-3" />
                      </a>
                    </div>
                    <div>
                      <p className="font-bold text-lg">{title[index]}</p>
                      <p className="text-gray-200">{content[index]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Content />
      <ExploreCards />
      <SecuredContent />
      <JoinCommunity />
    </div>
  );
};

export default Dashboard;
