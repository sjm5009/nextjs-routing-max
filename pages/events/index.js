import EventList from '@/components/events/event-list';
import EventsSearch from '@/components/events/event-search';
import { getAllEvents } from '@/dummy-data';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

function AllEventPage() {
  const router = useRouter();
  const events = getAllEvents();

  function findEventHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export default AllEventPage;
