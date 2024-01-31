import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const articleApi = createApi({
    tagTypes: ['articles'],
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://iim.etherial.fr' }),
    endpoints: (builder) => ({
        getArticles: builder.query({
            query: () => `/articles`,
            providesTags: ['articles']
        }),
        createArticle: builder.mutation({
            query: (data) => ({
                url: `/articles`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['articles']
        })
    }),
})

export const { useGetArticlesQuery, useCreateArticleMutation } = articleApi