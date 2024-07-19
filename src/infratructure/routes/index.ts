import React from 'react'
import Detail from '../../pages/home-page/detail'
import HomePage from '../../pages/home-page'

export const privatesRoutes = [
    
  {
    path: "/Detail",
    component: Detail,
    private: false,
},
{
    path: "",
    component: HomePage,
    private: false,
},
]
