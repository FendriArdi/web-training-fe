import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

export const BigCalendar = () => {
    return (
        <div>
            <Calendar
                localizer={localizer}
                showMultiDayTimes={false}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
            />
        </div>
    );
};
