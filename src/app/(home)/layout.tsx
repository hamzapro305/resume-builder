import { LayoutT } from "@/Types/Basic";
import { Provider } from "@/store/Provider";

const layout: LayoutT = ({ children }) => {
    return (
        <Provider>
            <div className="HomePageLayout">{children}</div>
        </Provider>
    );
};

export default layout;
