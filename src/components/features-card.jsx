import { features } from "../util/consttants"
import { styles } from "../util/style"

const FeaturesCard = ({icon, title, content, idx}) => {
  return (
    <div className={`flex flex-row p-6 rounded-[20px] cursor-pointer feature-card transition-all duration-500 ${idx !== features.length - 1 ? "mb-6" : "mb-0"}`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-lightBlue`}>
        <img src={icon} alt={title} className={`w-[50%] h-[50%] object-contain`} />
      </div>

      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-montserrat font-semibold text-white text-[18px] leading-[23px] mb-1">{title}</h4>
        <p className="font-montserrat font-medium text-lightWhite text-[16px] leading-[24px]">{content}</p>
      </div>
    </div>
  )
}

export default FeaturesCard