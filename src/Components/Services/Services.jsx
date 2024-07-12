// components/Services.js
import styles from '@/Components/theme7.module.css';

const servicesData = [
  {
    id: 1,
    title: "New Luxury Condo Complex Redefines Modern Living In The Heart Of The City",
    image: "/Assets/service.jpeg", // Replace with the actual image path
  },
  {
    id: 1,
    title: "New Luxury Condo Complex Redefines Modern Living In The Heart Of The City",
    image: "/Assets/service.jpeg", // Replace with the actual image path
  },
  {
    id: 1,
    title: "New Luxury Condo Complex Redefines Modern Living In The Heart Of The City",
    image: "/Assets/service.jpeg", // Replace with the actual image path
  },
  {
    id: 1,
    title: "New Luxury Condo Complex Redefines Modern Living In The Heart Of The City",
    image: "/Assets/service.jpeg", // Replace with the actual image path
  },
 
  // Add more service objects as needed
];

const Services = () => {
  return (
    <div className={styles.servicesContainer}>
      <h2>Checkout Our Services</h2>
      <p>Join us in exploring spaces designed not just for today, but for a sustainable tomorrow.</p>
      <div className={styles.servicesGrid}>
        {servicesData.map((service) => (
          <div key={service.id} className={styles.serviceCard}>
            <img src={service.image} alt={service.title} className={styles.serviceImage} />
            <div className={styles.serviceText}>{service.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
