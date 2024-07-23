import React from 'react'
import Detail from '../../pages/home-page/detail'
import HomePage from '../../pages/home-page'
import ScreenPage from '../../pages/screens'

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
{
  path: "/Screen",
  component: ScreenPage,
  private: false,
},

]
