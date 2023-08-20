import { Link } from 'react-router-dom';
import logo from '../../assets/LogoPetConnect.svg';
import { IoIosMenu, IoMdClose } from 'react-icons/io';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectCurrentToken } from '../../store/auth/authSlice';

const Navbar = () => {
	const [isOpenMenu, setIsOpenMenu] = useState(false);
	const token = useSelector(selectCurrentToken);
	const dispatch = useDispatch();

	return (
		<nav className='flex items-center w-full h-20 justify-around py-2 fixed z-50 bg-primary-light shadow-md p-3'>
			<div className='flex flex-grow h-full'>
				<Link to='/' className=' m-2'>
					<img src={logo} alt='logo' className='object-cover h-full' />
				</Link>
			</div>
			<div className='flex lg:hidden relative'>
				{!isOpenMenu ? (
					<div className='h-8 border-2 rounded text-body-light cursor-pointer'>
						<IoIosMenu
							onClick={() => setIsOpenMenu(true)}
							className='h-8 w-8 text-body-light'
						/>
					</div>
				) : (
					<>
						<IoMdClose
							onClick={() => setIsOpenMenu(false)}
							className=' h-8 w-8 text-body-light'
						/>
						<div className='absolute -left-[88.5vw] sm:-left-[95vw] md:-left-[94.5vw] lg:hidden flex flex-col justify-around bg-primary-light w-[100vw] h-[30dvh] mt-12'>
							<div
								onClick={() => setIsOpenMenu(false)}
								className='p-3 mt-3  bg-primary-light  h-[100vh] w-full pl-5 md:pl-9'>
								<div className=' flex flex-col gap-3 font-title lg:text-xl w-full py-3 px-3'>
									<Link className='hover:bg-primary hover:text-white' to='/'>
										Home
									</Link>
									<Link className='hover:bg-primary hover:text-white' to='/matchs'>
										Mascotas
									</Link>
								</div>
								{!token ? (
									<div className=' gap-4 font-title flex place-items-center px-2 mb-0'>
										<button className='bg-primary text-white rounded-md hover:bg-primary-dark transition-all shadow-md py-3 px-3'>
											<Link to='/auth/login'>Ingresar</Link>
										</button>
										<button className=' text-primary bg-white rounded-md  hover:bg-hite-grey transition-all shadow-md py-3 px-3'>
											<Link to='/auth/register'>Registrarse</Link>
										</button>
									</div>
								) : (
									<div className='flex gap-3'>
										<Link
											className='bg-primary text-white rounded-md hover:bg-primary-dark transition-all shadow-md py-3 px-3'
											to='/user-profile'>
											Mi Perfil
										</Link>
										<button
											className=' text-primary bg-white rounded-md  hover:bg-hite-grey transition-all shadow-md py-3 px-3'
											onClick={() => dispatch(logOut())}>
											Cerrar Sesión
										</button>
									</div>
								)}
							</div>
						</div>
					</>
				)}
			</div>
			<div className='hidden lg:flex flex-grow justify-between items-center'>
				<div className='flex lg:gap-5 font-title lg:text-xl'>
					<Link to='/'>Home</Link>
					<Link to='/matchs'>Mascotas</Link>
				</div>
				{!token ? (
					<div className=' gap-4 font-title flex place-items-center px-2 mb-0'>
						<button className='bg-primary text-white rounded-md hover:bg-primary-dark transition-all shadow-md py-3 px-3'>
							<Link to='/auth/login'>Ingresar</Link>
						</button>
						<button className=' text-primary bg-white rounded-md  hover:bg-hite-grey transition-all shadow-md py-3 px-3'>
							<Link to='/auth/register'>Registrarse</Link>
						</button>
					</div>
				) : (
					<div className='flex gap-3'>
						<Link
							className='bg-primary text-white rounded-md hover:bg-primary-dark transition-all shadow-md py-3 px-3'
							to='/user-profile'>
							Mi Perfil
						</Link>
						<button
							className=' text-primary bg-white rounded-md  hover:bg-hite-grey transition-all shadow-md py-3 px-3'
							onClick={() => dispatch(logOut())}>
							Cerrar Sesión
						</button>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
