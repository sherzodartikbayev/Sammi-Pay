import { features } from "../util/consttants"
import { layOut, styles } from "../util/style"
import Button from "./button"
import FeaturesCard from "./features-card"

const Business = () => {
  return (
    <section id="futures" className={layOut.section}>
      <div className={layOut.sectionInfo}>
        <h2 className={`${styles.heading2}`}>
          O'z biznesingizni rivojlantiring <br className="sm:block hidden" />
          pulni hal qilamiz
        </h2>
        <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fugiat quos laborum hic debitis tempora, blanditiis repudiandae nihil error assumenda!
        </p>
        <Button styles={"mt-10"}/>
      </div>
      <div className={`${layOut.sectionImage} flex-col `}>
        {features.map((features, idx) => (
          <FeaturesCard key={features.id} {...features} idx={idx}/>
        ))}
      </div>
    </section>
  )
}

export default Business