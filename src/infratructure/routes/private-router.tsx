import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: RoutePath }: any) => {
    // const storage = isTokenStoraged();
    // const dataProfile = useRecoilValue(ProfileState);
    // const [isAdmin, setIsAdmin] = useState<boolean>(false)

    // const isAdmin = dataProfile.user.roles?.some((role) => role?.name?.includes("ADMIN"));

    // if (dataProfile.user.roles.length > 0) {
    //     if (storage && isAdmin) {
    //         return RoutePath
    //     }
    //     else {
    //         return <Navigate to={ROUTE_PATH.LOGIN} />
    //     }
    // }
    return RoutePath
}
