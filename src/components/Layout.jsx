import PropTypes from "prop-types";
import { Header } from "./Header";

export const Layout = ({ children, isTraining }) => {
    return (
        <>
            {!isTraining && <Header />}
            <main className="bg-neutral-1 overflow-hidden">{children}</main>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.element,
    isTraining: PropTypes.bool,
};

Layout.defaultProps = {
    isTraining: false,
};
