import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import PropTypes from "prop-types";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

export const BigCalendar = ({ data, onSelect }) => {
    return (
        <div>
            <Calendar
                localizer={localizer}
                showMultiDayTimes={false}
                startAccessor="start"
                endAccessor="end"
                events={data}
                style={{ height: 500 }}
                onSelectEvent={(event) => onSelect(event.id)}
            />
        </div>
    );
};

BigCalendar.propTypes = {
    data: PropTypes.array,
    onSelect: PropTypes.func,
};
