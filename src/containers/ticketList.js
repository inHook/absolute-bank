import React, {useEffect} from "react";
import {connect} from "react-redux";

import {Ticket} from "../components/ticket/ticket";
import {Input} from "../components/ui/input";
import {apiBank} from "../backendServices/getTickets";
import {getTickets, getQueryTicket, getQueryClient} from "../store/selectors";
import {putTickets, setQuery} from "../store/actionCreators/tickets";

import "./style.scss";

const TicketsList = ({tickets, putTickets, setQuery, queryTicket, queryClient}) => {
    useEffect(() => {
        const data = apiBank.getTickets();

        if (data?.length) {
            putTickets(data);
        }
    }, [putTickets]);

    const handleChange = (e) => {
        const {name, value} = e.target;

        setQuery(name, value);
    };

    return (
        <div className="ticket-list__container">
            <div className="ticket-list__search">
                <Input
                    type="text"
                    name="queryTicket"
                    placeholderImage="&#128269;"
                    placeholder="Номер заявки"
                    onChange={handleChange}
                />
                <Input
                    type="text"
                    name="queryClient"
                    placeholderImage="&#128269;"
                    placeholder="Наименование клиента"
                    onChange={handleChange}
                />
            </div>
            <div className="ticket-list">
                {tickets?.length && tickets.map(ticket => {
                    const {ticketId, clientName} = ticket;
                    const query = clientName.toLowerCase();

                    if ((ticketId.toString().includes(queryTicket) || !queryTicket) && (
                        query.includes(queryClient) || !queryClient
                    )) {
                        return (
                            <Ticket key={ticket.ticketId} ticket={ticket} />
                        )
                    }

                    return null;
                })}
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    tickets: getTickets(state),
    queryTicket: getQueryTicket(state),
    queryClient: getQueryClient(state),
});

const mapDispatchToProps = {
    putTickets,
    setQuery,
};

export const TicketsListConnected = connect(mapStateToProps, mapDispatchToProps)(TicketsList);