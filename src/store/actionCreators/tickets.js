import {PUT_TICKETS, SET_QUERY} from "../actions";

export const putTickets = (tickets) => ({
    type: PUT_TICKETS,
    payload: tickets,
});

export const setQuery = (name, query) => ({
    type: SET_QUERY,
    payload: {
        name,
        query,
    }
});