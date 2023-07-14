import { createBrowserRouter, Navigate } from 'react-router-dom';

import { Layout } from '@/components';
import { History, Home, Statistics } from '@/pages';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: '/history',
                Component: History,
            },
            {
                path: 'statistics',
                Component: Statistics,
            },
            {
                path: '*',
                element: <Navigate to="/" />,
            },
        ],
    },
    {},
]);
