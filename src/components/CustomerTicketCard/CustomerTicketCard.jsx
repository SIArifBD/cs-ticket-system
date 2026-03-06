import React, { useState } from 'react';
import calendar from "../../assets/calendar-line.png";

const CustomerTicketCard = ({ data, setTicketStatistics, ticketStatistics }) => {
    const [clickIds, setClickIds] = useState([]);
    const [status, setStatus] = useState(data.status);

    const handleTicketStatistics = () => {
        if (clickIds.includes(data.id)) return;
        setTicketStatistics((i) => i + 1);
        setStatus("In-Progress");
        setClickIds([...clickIds, data.id]);
    };

    console.log(ticketStatistics)

    return (
        <div
            onClick={handleTicketStatistics}
            className="border py-2 px-4 mt-2 bg-white rounded-xl cursor-pointer"
        >
            <div className="flex justify-between">
                <h2 className="font-semibold">{data.title}</h2>
                <span className={`btn btn-sm rounded-3xl ${status === "In-Progress" ? "btn-warning" : "btn-outline"}`}>{status}</span>
            </div>

            <p className='my-4'>{data.description}</p>

            <div className="flex justify-between">
                <div className="flex gap-4">
                    <p>#{data.id}</p>
                    <h2
                        className={
                            data.priority === "HIGH PRIORITY"
                                ? "text-red-500"
                                : data.priority === "MEDIUM PRIORITY"
                                    ? "text-yellow-500"
                                    : "text-green-500"
                        }
                    >
                        {data.priority}
                    </h2>
                </div>

                <div className="flex gap-4">
                    <p>{data.customer}</p>
                    <div className="flex gap-1">
                        <img src={calendar} alt="calendar" />
                        <p>{data.createdAt}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerTicketCard;