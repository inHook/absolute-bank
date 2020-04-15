import React from "react";

import {Tickets} from "../../constants/tickets";

import "./style.scss";

export const Ticket = ({ticket}) => {
    const {ticketId, clientName, clientPrice, organizationName, organizationInn, ticketStatus, organizationSupervisor, tags, ticketDate} = ticket;

    return (
        <div key={ticketId} className="ticket">
            <div className="ticket__element ticket__client-name">{clientName}</div>
            <div className="ticket__element ticket__client-price">{`${Number(clientPrice).toLocaleString()} ${Tickets.rub}`}</div>
            <div className="ticket__element ticket__organization-name">{organizationName}</div>
            <div className="ticket__element ticket__organization-inn">ИНН {organizationInn}</div>

            {ticketStatus?.length ? (
                <div className="ticket__element ticket__status">
                    {ticketStatus.map(status => (
                        <div key={status} className="ticket__status-element">{status}</div>
                    ))}
                </div>
            ) : null}

            <div className="ticket__organization-supervisor">{organizationSupervisor}</div>

            {tags?.length ? (
                <div className="ticket__element ticket__status">
                    {tags.map(tag => (
                        <div key={tag} className="ticket__status-element">{tag}</div>
                    ))}
                </div>
            ) : null}

            <div className="ticket__element ticket__footer">
                <div className="ticket__id">{ticketId}</div>
                <div className="ticket__date">{`${Tickets.from} ${ticketDate}`}</div>
            </div>
        </div>
    );
};