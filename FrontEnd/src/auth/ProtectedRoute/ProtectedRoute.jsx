import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCurrentToken } from '../../store/auth/authSlice';

export const ProtectedRoute = ({ redirectTo, children }) => {
	const token = useSelector(selectCurrentToken);
	const navigate = useNavigate();

	if (!token) {
		navigate(redirectTo);
	} else {
		return children;
	}
};
