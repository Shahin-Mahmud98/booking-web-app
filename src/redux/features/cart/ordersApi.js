import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query";
import getBaseUrl from "../../../utils/baseUrl";

const ordersApi = createApi({
    reducerPath:'ordersApi',
    baseQuery: fetchBaseQuery({
        baseUrl:`${getBaseUrl()}/api/orders`,
        credentials:'include'
    }),

    tagTypes:['Orders'],
    endPoints:(builder)=>({
        createOrder:(builder.mutatiion)({
            query:(newOrder)=>({
                url:"/",
                method:"POST",
                body:newOrder,
                credentials:'include',
            })
        }),
        getOrderByEmail:(builder.query)({
            query:(email)=>({
                url:`/email/${email}`
            }),
            providesTags:['orders']
        })
    })

})

export const {useCreateOrderMutation,useGetOrderByEmailQuery}=ordersApi;
export default ordersApi;