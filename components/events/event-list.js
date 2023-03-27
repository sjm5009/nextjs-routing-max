import EventItem from './event-item';
import styles from './event-list.module.css';

const EventList = (props) => {
  const { items } = props;

  return (
    <ul className={styles.list}>
      {items.map((cur) => (
        <EventItem id={cur.id} title={cur.titile} location={cur.location} date={cur.date} image={cur.image} />
      ))}
    </ul>
  );
};

export default EventList;
