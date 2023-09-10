import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { auth, db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

const localizer = momentLocalizer(moment);

class BCalendar extends Component {
  state = {
    events: [
      {
        start: moment().toDate(),
        end: moment().add(1, "days").toDate(),
        title: "Some title",
      },
    ],
  };

  // Define a class method to fetch events from Firestore
  async fetchEventsFromFirestore() {
    try {
      const uid = auth.currentUser.uid;
      const eventsRef = collection(db, `calendars/${uid}/events`);
      const querySnapshot = await getDocs(eventsRef);

      const newEvents = querySnapshot.docs.map((doc) => doc.data());

      // Update the component's state with the fetched events
      this.setState({
        events: newEvents,
      });
    } catch (err) {
      console.error("Error fetching events:", err);
    }
  }

  componentDidMount() {
    this.fetchEventsFromFirestore();
  }

  render() {
    return (
      <div>
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          style={{ height: "100vh" }}
        />
      </div>
    );
  }
}

export default BCalendar;
