import {PUT_TICKETS, SET_QUERY} from "../actions";

const initialState = {
    tickets: [],
    queryTicket: "",
    queryClient: "",
};

export const ticketsReducer = (state = initialState, action) => {
    switch (action.type) {
        case PUT_TICKETS:
            const tickets = action.payload;

            return {
                ...state,
                tickets,
            };

        case SET_QUERY:
            const {name, query} = action.payload;

            return {
                ...state,
                [name]: query,
            };

        default:
            return state;
    }
};