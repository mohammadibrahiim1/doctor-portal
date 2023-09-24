import { apiSlice } from "../apiSlice";

const doctorApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDoctors: builder.query({
      query: (data) => ({
        url: `/api/v1/doctors`,
      }),
    }),
  }),
});

export const { useGetDoctorsQuery } = doctorApi;
