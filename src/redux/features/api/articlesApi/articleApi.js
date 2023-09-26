import { apiSlice } from "../apiSlice";

const articleApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getArticles: builder.query({
      query: (data) => ({
        url: `/api/v1/articles`,
      }),
    }),

    getArticleById: builder.query({
      query: (id) => ({
        url: `/api/v1/article/${id}`,
      }),
    }),
  }),
});

export const { useGetArticlesQuery, useGetArticleByIdQuery } = articleApi;
