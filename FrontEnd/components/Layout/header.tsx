import { MainMenu } from './mainMenu';
import tw from "twin.macro";

export const Header = () => {
    return (
        <>
            <div tw="sticky top-0">
                <MainMenu/>
            </div>
        </>
    );
};
