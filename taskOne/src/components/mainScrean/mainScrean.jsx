import styles from "./mainScrean.module.scss";

const MainScrean = ({ cardData }) => {
  return (
    <div className={styles.mainScrean}>
      <div className={styles.mainScreanCard}>
        {cardData.map((cardData, index) => (
          <div key={index} style={{ borderColor: cardData.borderColor }} className={styles.card}>
            <div className={styles.cardImg}>
              <img src={cardData.img} alt="Card" />
            </div>
            <div className={styles.cardList}>
              <ul>
                {cardData.listItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={styles.cardLink}>
              <a href={cardData.link} target="_blank">
                View more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainScrean;
