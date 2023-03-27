import EventList from '@/components/events/event-list';
import { getFeaturedEvents } from '@/dummy-data';

function HomePage() {
  const featureEvents = getFeaturedEvents();

  return (
    <main>
      <EventList items={featureEvents} />
    </main>
  );
}

export default HomePage;
