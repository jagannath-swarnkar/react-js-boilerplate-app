import Index from "./pages";
import AnalyticsPage from "./pages/analytics";
import NotFoundView from './pages/errors/NotFoundView'
import GlancePage from "./pages/glance";
import LoginPage from "./pages/login";
import ProfilePage from "./pages/profile";

const PublicRoutes = [
    
    {
        path: "/auth",
        name: "login",
        component: LoginPage
    }
]

const PrivateRoutes = [
    {
        path: '/',
        name: 'home',
        component: Index
    },
    {
        path: '/glance',
        name: 'glance',
        component: GlancePage
    },
    {
        path: '/analytics',
        name: 'analytics',
        component: AnalyticsPage
    },
    {
        path: "/profile",
        name: "ProfilePage",
        component: ProfilePage
    },
    {
        path: '*',
        name: 'Page Not Found',
        component: NotFoundView
    }
]

export { 
    PublicRoutes,
    PrivateRoutes
 };