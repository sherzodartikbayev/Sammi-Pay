import { clients } from '../util/consttants'
import { styles } from '../util/style'
import ClientsCard from './clients-card'
 
const Clients = () => {
  return (
    <div id='clients' className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client => (
          <ClientsCard key={client.id} logo={client.logo} />
        )))}
      </div>
    </div>
  )
}

export default Clients