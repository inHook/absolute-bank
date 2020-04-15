export const getTickets = state => state?.tickets || [];
export const getQueryTicket = state => state?.queryTicket?.toLowerCase() || "";
export const getQueryClient = state => state?.queryClient?.toLowerCase() || "";