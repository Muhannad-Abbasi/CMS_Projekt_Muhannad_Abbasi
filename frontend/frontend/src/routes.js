import React from 'react';
import { Navigate } from 'react-router-dom';
import BooksView from './views/books';
import MoviesView from './views/movies';
import DashboardView from './views/dashboard';
import DashboardLayout from './layouts/dashboardLayout/NavBar';
import AllView from './views/all-view/index'

export const routes = [
    {
        path: '/',
        element: <DashboardLayout />,
        children: [
            { path: 'dashboard', element: <DashboardView /> },
            { path: 'books', element: <BooksView /> },
            { path: 'movies', element: <MoviesView /> },
            { path: 'books-and-movies', element: <AllView /> },
            { path: '/', element: <Navigate to="/dashboard" /> },
            { path: '*', element: <Navigate to="/404" /> }
        ]
    }
]