import Index from "./pages/index";
import NotFoundView from './pages/errors/NotFoundView'
import Gallery from "./pages/gallery";

const PublicRoutes = [
    {
        path: '/',
        name: 'home',
        component: Index
    },
    {
        path: "/gallery",
        name: "Gallery",
        component: Gallery
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