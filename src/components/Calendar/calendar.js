import React from "react";
import { render } from "react-dom";
import moment from "moment";
import Dayz from "dayz";
// require('./demo.scss');
import "./demo.css";
import Navbar from "../navbar/Navbar";
import eventData from "./events.json";
let COUNT = 1;

class EventCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.addEvent = this.addEvent.bind(this);
    this.onEventClick = this.onEventClick.bind(this);
    this.editComponent = this.editComponent.bind(this);
    this.changeDisplay = this.changeDisplay.bind(this);
    this.onEventResize = this.onEventResize.bind(this);
    const date = moment("2023-04-05");
    const formatEvent = eventData.map((event) => {
      let s = event.when.split("T")[0];
      let e = event.when.split("T")[0];

      // console.log(s, e);
      return {
        content: event.what,
        range: moment.range(moment(s).hour(9), moment(e).hour(14)),
      };
    });
    console.log(formatEvent);
    this.state = {
      date,
      display: "month",
      events: new Dayz.EventsCollection(formatEvent),
      // events: new Dayz.EventsCollection([
      //   {
      //     content: "Continuing event Past",
      //     range: moment.range(moment("2015-09-08"), moment("2015-09-14")),
      //   },

      //   {
      //     content: "Continuing event Before",
      //     range: moment.range("2015-09-04", "2015-09-09"),
      //   },

      //   {
      //     content: "Weeklong",
      //     range: moment.range("2015-09-06", moment("2015-09-12").endOf("day")),
      //   },

      //   {
      //     content: "A Longer Event",
      //     range: moment.range(moment("2015-09-04"), moment("2015-09-14")),
      //   },

      //   {
      //     content: "Inclusive",
      //     range: moment.range(moment("2015-09-07"), moment("2015-09-12")),
      //   },

      //   {
      //     content: "9am - 2pm (resizable)",
      //     resizable: { step: 15 },
      //     range: moment.range(
      //       moment("2015-09-11").hour(9),
      //       moment("2015-09-11").hour(14)
      //     ),
      //   },

      //   {
      //     content: "8am - 8pm (non-resizable)",
      //     range: moment.range(
      //       moment("2015-09-07").hour(8),
      //       moment("2015-09-07").hour(21).minutes(40)
      //     ),
      //   },
      // ]),
    };
  }

  //add event data to state
  componentDidMount() {
    const formatEvent = eventData.map((event) => {
      return {
        content: event.title,
        range: moment.range(
          moment(event.start).hour(9),
          moment(event.end).hour(14)
        ),
      };
    });
    // this.setState({ events: formatEvent });
    // this.setState({ events: eventData });
  }

  changeDisplay(ev) {
    this.setState({ display: ev.target.value });
  }

  onEventClick(ev, event) {
    event.set({ editing: !event.isEditing() });
  }
  onEventResize(ev, event) {
    const start = event.start.format("hh:mma");
    const end = event.end.format("hh:mma");
    event.set({ content: `${start} - ${end} (resizable)` });
  }

  addEvent(ev) {
    console.log("hi date");
    this.state.events.add({
      content: `Event ${COUNT++}`,
      resizable: true,
      // range: moment.range(
      //   date.clone(),
      //   date.clone().add(1, "hour").add(45, "minutes")
      // ),
    });
  }

  editComponent(props) {
    const onBlur = function () {
      props.event.set({ editing: false });
    };
    const onChange = function (ev) {
      props.event.set({ content: ev.target.value });
    };
    const onDelete = function () {
      props.event.remove();
    };
    return (
      <div className="edit">
        <input
          type="text"
          autoFocus
          value={props.event.content}
          onChange={onChange}
          onBlur={onBlur}
        />
        <button onClick={onDelete}>X</button>
      </div>
    );
  }

  setDate = (ev) => {
    console.log(ev);
    const dte = moment(ev.target.value);
    if (dte.isValid()) {
      this.setState({ ...this.state, date: moment(ev.target.value) });
    }
  };
  //set date on click of date in calendar
  setDateOnCalendarClick = (ev) => {
    console.log(ev);
    const dte = moment(ev.target.value);
    if (dte.isValid()) {
      this.setState({ ...this.state, date: moment(ev.target.value) });
    }
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="dayz-test-wrapper">
          <div className="tools">
            <label>
              Start Date:
              <input
                type="text"
                onBlur={this.setDate}
                defaultValue={this.state.date.format("YYYY-MM-DD")}
              />
            </label>
            <label>
              Month:{" "}
              <input
                type="radio"
                name="style"
                value="month"
                onChange={this.changeDisplay}
                checked={"month" === this.state.display}
              />
            </label>
            <label>
              Week:{" "}
              <input
                type="radio"
                name="style"
                value="week"
                onChange={this.changeDisplay}
                checked={"week" === this.state.display}
              />
            </label>
            <label>
              Day:{" "}
              <input
                type="radio"
                name="style"
                value="day"
                onChange={this.changeDisplay}
                checked={"day" === this.state.display}
              />
            </label>
          </div>

          <Dayz
            {...this.state}
            // displayHours={[6, 22]}
            // {console.log("hi")}
            onClick={(ev) => {
              console.log("hi");
            }}
            highlightDays={[this.state.date]}
            onEventResize={this.onEventResize}
            editComponent={this.editComponent}
            onDayDoubleClick={this.addEvent}
            // onEventClick={this.onEventClick}
          ></Dayz>
        </div>
      </div>
    );
  }
}

export default EventCalendar;
