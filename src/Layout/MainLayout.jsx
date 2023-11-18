import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";


const MainLayout = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Header />
            <div className="pt-20 min-h-[calc(100vh-68px)]:">
            <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;