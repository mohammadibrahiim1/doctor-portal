import { apiSlice } from "../api/apiSlice";
import { getUser } from "./authSlice";


const authApi = apiSlice.injectEndpoints(
    {
        endpoints: builder => ({
            register: builder.mutation({
                query: data => ({
                    url: '/api/v1/user',
                    method: 'POST',
                    body: data,
                }),
                async onQueryStarted(data, { dispatch, queryFulfilled }) {
                    try {
                        await queryFulfilled;
                        await dispatch(getUser(data.email));
                    } catch (error) {
                        console.log(error);
                    }
                }
            })
        })
    }
)
export const { useRegisterMutation } = authApi