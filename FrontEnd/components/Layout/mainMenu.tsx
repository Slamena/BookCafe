import { ButtonGeneric } from "../shared/buttonGeneric";
import { AiOutlineUser } from "@react-icons/all-files/ai/AiOutlineUser";
import tw from "twin.macro";

export const MainMenu = () => {
    return (
        <>
            <div tw="flex gap-7">
                <ButtonGeneric 
                    href={"#"}
                    label={'Home'}
                />
                <ButtonGeneric
                    href={"#"}
                    label={'My Current Books'}
                />
                <ButtonGeneric
                    href={"#"}
                    label={'Search book'}
                />
            </div>
        </>
    );
};
