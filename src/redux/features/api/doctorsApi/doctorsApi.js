import { apiSlice } from "../apiSlice";

const doctorApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDoctors: builder.query({
      query: (data) => ({
        url: `/api/v1/doctors`,
      }),
    }),
    getDoctorById: builder.query({
      query: (id) => ({
        url: `/api/v1/doctor/${id}`,
      }),
    }),
    getDoctorByCategory: builder.query({
      query: (category) => ({
        url: `/api/v1/doctors?category=${category}`,
      }),
    }),
  }),
});

export const {
  useGetDoctorsQuery,
  useGetDoctorByIdQuery,
  useGetDoctorByCategoryQuery,
} = doctorApi;
