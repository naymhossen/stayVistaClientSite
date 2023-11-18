import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";


const MainLayout = () => {
    return (
        <div className="">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;