import { useState } from "react";

function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const time = `${hours}:${minutes}`;
  return time;
}

function add1Hour(time) {
  const [hours, minutes] = time.split(":");
  const newHours = (parseInt(hours) + 1) % 24;
  return `${
    newHours.toString().length === 1 ? `0${newHours}` : newHours
  }:${minutes}`;
}

function convertTo12HourFormat(time) {
  const [hours, minutes] = time.split(":");
  const hour12 = parseInt(hours, 10) % 12 || 12;
  const period = parseInt(hours, 10) >= 12 ? "PM" : "AM";
  return `${hour12}:${minutes} ${period}`;
}

function DateDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const today = new Date().toISOString().substr(0, 10);
  const [date, setDate] = useState(today);

  const currentTime = getCurrentTime();
  const [time, setTime] = useState(currentTime);

  const currentToTime = add1Hour(time);
  const [toTime, setToTime] = useState(currentToTime);

  console.log(toTime);

  const displayDate = new Date(date)
    .toString()
    .split(" ")
    .slice(1, 4)
    .toString()
    .replace(",", " ")
    .replace(",", ", ");

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleToTimeChange = (event) => {
    setToTime(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  return (
    <div className="date-dropdown">
      <div
        className={`date-selected-options ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          width="15"
          height="20"
          viewBox="0 0 14 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.77 2.32H8.91V1.17C8.91 0.79625 9.1975 0.48 9.6 0.48C9.97375 0.48 10.29 0.79625 10.29 1.17V2.32H11.44C12.4463 2.32 13.28 3.15375 13.28 4.16V13.36C13.28 14.395 12.4463 15.2 11.44 15.2H2.24C1.205 15.2 0.400002 14.395 0.400002 13.36V4.16C0.400002 3.15375 1.205 2.32 2.24 2.32H3.39V1.17C3.39 0.79625 3.6775 0.48 4.08 0.48C4.45375 0.48 4.77 0.79625 4.77 1.17V2.32ZM1.78 13.36C1.78 13.6188 1.98125 13.82 2.24 13.82H11.44C11.67 13.82 11.9 13.6188 11.9 13.36V6H1.78V13.36Z"
            fill="#CECECE"
          />
        </svg>

        <p>{`${displayDate} at ${convertTo12HourFormat(
          time
        )} - ${convertTo12HourFormat(toTime)}`}</p>
      </div>
      {isOpen && (
        <>
          <div className="date-dropdown-options">
            <div className="date-container">
              <label htmlFor="start">Date:</label>

              <input
                type="date"
                id="start"
                name="trip-start"
                value={date}
                onChange={handleDateChange}
                // min="2024-05-01"
              />
            </div>

            <div className="time-container">
              <div className="timer-inner-container">
                <label htmlFor="time">From:</label>
                <input
                  type="time"
                  id="time"
                  value={time}
                  onChange={handleTimeChange}
                  required
                />
              </div>
              <div className="timer-inner-container">
                <label htmlFor="time">To:</label>
                <input
                  type="time"
                  id="appt"
                  min={toTime}
                  max={"00:00"}
                  required
                  value={toTime}
                  onChange={handleToTimeChange}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default DateDropdown;
