import Index from "./pages/index";
import NotFoundView from './pages/errors/NotFoundView'

const PublicRoutes = [
    {
        path: '/',
        name: 'home',
        component: Index
    },
    {
        path: '*',
        name: 'Page Not Found',
        component: NotFoundView
    }
]

const PrivateRoutes = [
    
]

export { 
    PublicRoutes,
    PrivateRoutes
 };