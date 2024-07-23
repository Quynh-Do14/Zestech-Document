import { Layout } from "antd";
import HeaderComponent from "./header";

const MainLayout = (props: any) => {
    return (
        <div className="main-layout-client">
            <HeaderComponent />
            <div className="content-layout-client">
                <div className="overlay"></div>
                <div className=" flex flex-col scroll-auto z-10">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default MainLayout