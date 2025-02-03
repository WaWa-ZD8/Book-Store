import { 
    createBrowserRouter,
     RouterProvider,
     useParams, 
    
} from 'react-router-dom';
import App from '../App';
import Home from '../home/Home';
import Shop from '../shop/Shop';
import About from '../components/About';
import Blog from '../components/Blog';
import SingleBook from '../shop/SingleBook';
import DashboardLayout from '../dashboard/DashboardLayout';
import Dashboard from '../dashboard/Dashboard';
import Upload from '../dashboard/Upload';
import ManageBook from '../dashboard/ManageBook';
import EditBooks from '../dashboard/EditBooks';
import Signup from '../components/Signup';
import Login from '../components/Login';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Logout from '../components/Logout';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            
            {
                path: "/shop",
                element: <Shop/>
            },

            {
                path: "/about",
                element: <About/>
            },

            {
                path: "/blog",
                element: <Blog/>
            },
            
            {
                path: "/getOne/:id",
                element: <SingleBook/>,
                loader: ({params}) => fetch(`http://localhost:3000/getOne/${params.id}`)
            }
            

        ]
    },
    {
        path:'/admin/dashboard',
        element: <DashboardLayout/>,
        children: [
            {
                path: '/admin/dashboard',
                element: <PrivateRoute><Dashboard/></PrivateRoute>
            },
            
            {
                path: '/admin/dashboard/upload',
                element: <Upload/>
            },

            {
                path: '/admin/dashboard/manage',
                element: <ManageBook/>
            },

            {
                path: '/admin/dashboard/edit/:id',
                element: <EditBooks/>,
                loader: ({params}) => fetch(`http://localhost:3000/getOne/${params.id}`)
            }
        ]
    },
    {
        path: 'signup',
        element: <Signup/>
    },
    {
        path:'login',
        element: <Login/>
    },
    {
        path: 'logout',
        element:<Logout/>
    }

]);

export default router;