import { apiSlice } from "../apiSlice";

const servicesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getServices: builder.query({
      query: (data) => ({
        url: `/api/v1/services`,
      }),
    }),

    getServiceById: builder.query({
      query: (id) => ({
        url: `/api/v1/service/${id}`,
      }),
    }),
  }),
});

export const { useGetServicesQuery, useGetServiceByIdQuery } = servicesApi;
