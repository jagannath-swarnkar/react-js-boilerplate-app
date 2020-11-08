const { default: NotFoundView } = require("./pages/errors/NotFoundView");

const BaseRoutes = [
    {
        path: '*',
        name: 'Page Not Found',
        component: NotFoundView
    }
]

export { BaseRoutes };