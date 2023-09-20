import { apiSlice } from "../apiSlice";

const appointmentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAppointments: builder.query({
      query: (data) => ({
        url: `/api/v1/appointments`,
      }),
    }),
  }),
});

export const { useGetAppointmentsQuery } = appointmentApi;
