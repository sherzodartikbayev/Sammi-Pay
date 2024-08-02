import { styles } from "../util/style"

const ClientsCard = ({ logo }) => {
  return (
    <div className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
      <img src={logo} alt="client-logo" className="sm:w-[192px] w-[100px] object-contain" />
    </div>
  )
}

export default ClientsCard