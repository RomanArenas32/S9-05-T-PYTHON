import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import { Login } from '../auth';
import { Error404 } from '../layout/Error404';
import MainLayout from '../layout/MainLayout';
import { Home } from '../pages';
import PetProfile from '../pages/PetProfile/PetProfile';
import Register from '../pages/Register/Register';
import UserProfile from '../pages/UserProfile/UserProfile';
import Matchs from '../pages/matchs/Matchs';
import { ProtectedRoute } from '../auth/ProtectedRoute/ProtectedRoute';

export const AppRouter = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<MainLayout />} errorElement={<Error404 />}>
			<>
				<Route path='/auth/login' element={<Login />} />
				<Route path='/auth/register' element={<Register />} />
			</>
			<>
				<Route index element={<Home />} />
				<Route path='/matchs' element={<Matchs />} />
				<Route path='/pet-profile/:id' element={<PetProfile />} />
				<Route
					path='/user-profile'
					element={
						<ProtectedRoute redirectTo='/auth/login'>
							<UserProfile />
						</ProtectedRoute>
					}
				/>
			</>
			<Route path='*' element={<Error404 />} />
		</Route>
	)
);
