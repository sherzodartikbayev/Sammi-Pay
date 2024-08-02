import { quotes } from "../assets"

const FeedbackCard = ({ content, name,  title, idx  }) => {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 cursor-pointer feedback-card"> 
      <img src={quotes} alt="quotes" className="w-[42px] h-[27px] object-contain" />
      <p className="font-montserrat font-normal text-[18px] leading-[32px] text-white my-10">{content}</p>

      <div className="flex flex-row">
        <div className="w-[50px] h-[50px] flex justify-center items-center rounded-full bg-dark-gradient">
          <p className="text-gradient text-[22px] font-semibold font-montserrat">
            {name.split(" ").map(c => c[0]).join(".").toUpperCase()}
          </p>
        </div>
        <div className="flex flex-col ml-4">
          <h1 className="font-montserrat font-semibold text-[20px] leading-[32px] text-white">{name}</h1>
          <p className="font-montserrat font-normal text-[16px] leading-[24px] text-lightWhite">{title}</p>
        </div>
      </div>
    </div>
  )
}

export default FeedbackCard