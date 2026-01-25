
import React from 'react';

/**
 * THE VERTICAL SPINE
 * The physical manifestation of rigor. It connects the Void (Hero) to the Earth (Footer).
 */
export const VerticalSpine: React.FC = () => {
    return (
        <div className="fixed top-0 bottom-0 left-[20px] md:left-[50%] w-[1px] bg-[#C5A059] opacity-[0.1] z-0 pointer-events-none">
            <div className="absolute top-0 bottom-0 w-full h-[30vh] bg-gradient-to-b from-[#0D0D0D] to-transparent" />
            <div className="absolute bottom-0 w-full h-[30vh] bg-gradient-to-t from-[#060606] to-transparent" />
        </div>
    );
};
