import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className="font-poppins font-semibold text-[48px] text-white">
        Let’s try our service now!
      </h2>
      <p className={`${styles.paragraph}`}>
        Everything you need to accept card payments{" "}
        <br className="sm:block hidden" /> and grow your business anywhere on
        the planet.
      </p>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;
