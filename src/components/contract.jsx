import { card } from "../assets"
import { layOut, styles } from "../util/style"
import Button from './button'

const Contract = () => {
  return (
    <section id="product" className={layOut.section}>
      <div className={layOut.sectionInfo}>
        <h1 className={`${styles.heading2}`}>Bir necha oson qadamda <br className="sm:block hidden" /> kontrakt tuzish</h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
          ducimus ullam mollitia, consequatur voluptatem doloribus earum
          perspiciatis laboriosam consequuntur distinctio.
        </p>
        <Button styles={"mt-10"} />
      </div>
      <div className={layOut.sectionImage}>
        <img src={ card } alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  )
}

export default Contract