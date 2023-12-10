import React from "react";

interface useWindowSizeI {
    width: number | undefined
    height: number | undefined
}

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = React.useState<useWindowSizeI>({
        width: undefined,
        height: undefined,
    });

    React.useEffect(() => {
        const handleResize = () =>
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return windowSize;
};