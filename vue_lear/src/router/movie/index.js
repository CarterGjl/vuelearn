export default {
  path: '/movie',
  component: () => import('@/view/movie'),
  children: [
    {
      path: 'city',
      component: () => import('@/components/city')
    },
    {
      path: 'nowPlaying',
      component: () => import('@/components/nowplaying')
    },
    {
      path: 'comingSoon',
      component: () => import('@/components/commingsoon')
    },
    {
      path: 'search',
      component: () => import('@/components/search')
    },
    {
      path: '/movie',
      redirect: '/movie/nowplaying'
    }
  ]
}
