import { Header } from "./header";
import { Footer } from "./footer";
import tw from "twin.macro";


export const Layout = ({children}) => {
    return (
        <div tw="flex flex-col justify-center items-center">
            <Header />
            <div>
                {children}
            </div>
            <Footer/>
        </div>
    );
};
