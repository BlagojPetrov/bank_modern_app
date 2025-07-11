import { airbnb, binance, coinbase, dropbox } from "../assets";
import { clients } from "../constants";
import styles, { layout } from "../style";

const Clients = () => (
  <section className={layout.section}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}
        >
          <img
            src={client.logo}
            alt="client"
            className="sm:w-[192px] w-[100px] cursor-pointer object-contain transition duration-300 hover:brightness-200"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
