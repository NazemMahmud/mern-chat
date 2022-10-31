import AuthRoutes from "./auth.routes.js";
import UserRoutes from "./user.routes.js";

const Router = app => {
    app.use('/api/auth', AuthRoutes);
    app.use('/api/users', UserRoutes);

}

export default Router;
