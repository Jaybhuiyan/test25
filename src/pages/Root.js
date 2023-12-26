import { Outlet } from 'react-router-dom';
//import MainNavigation from './component/MainNavigation';
import MainNavigation from '../component/MainNavigation';  // Use '../' to move up one level in the directory structure


function RootLayout() {
    return (
    <>
        <MainNavigation />
        <main>
            <Outlet />
        </main>
    </>
    );
}

export default RootLayout;