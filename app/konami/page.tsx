import "./../style.css"
import Image from "next/image";

export default function Home() {
  const imageElements: JSX.Element[] = [];

  for (let i = 0; i < 1000; i++) {
    imageElements.push(
      <div key={i} className="w-full md:w-1/2 xl:w-1/3 px-4">
        <a className="bg-white rounded-lg overflow-hidden mb-10" href={`https://img.konami.com/efootball/s/img/promotion/us/agent/${i}/promo_us_agent.png`} target="_blank" rel="noopener noreferrer">
          <Image
            src={`https://img.konami.com/efootball/s/img/promotion/us/agent/${i}/promo_us_agent.png`}
            alt="img"
            className="fuw-full"
            width={800}
            height={500}
          />
        </a>
        <a className="bg-white rounded-lg overflow-hidden mb-10" href={`https://img.konami.com/efootball/s/img/promotion/us/campaign/${i}/promo_campaign.png`} target="_blank" rel="noopener noreferrer">
          <Image
            src={`https://img.konami.com/efootball/s/img/promotion/us/campaign/${i}/promo_campaign.png`}
            alt="img"
            className="fuw-full"
            width={800}
            height={500}
          />
        </a>
        <a className="bg-white rounded-lg overflow-hidden mb-10" href={`https://img.konami.com/efootball/s/img/promotion/agent/${i}/promo_agent.png`} target="_blank" rel="noopener noreferrer">
          <Image
            src={`https://img.konami.com/efootball/s/img/promotion/agent/${i}/promo_agent.png`}
            alt="img"
            className="fuw-full"
            width={800}
            height={500}
          />
        </a>
      </div>
    );
  }
  return (
    <>
      <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6]">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            {imageElements}
          </div>
        </div>
      </section>
      <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6]"></section>
      <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6]"></section>
    </>
  )
}