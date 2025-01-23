import { useRef, useEffect } from 'react';
import Typed from 'typed.js';

interface TypedProps {
    showStrings: string[];
}

const TypedEffect: React.FC<TypedProps> = (
    {showStrings}
) => {
    const typedElement = useRef(null);

    useEffect(
        () => {
            const options = {
                strings: showStrings,
                typeSpeed: 50,  // Speed of typing
                backSpeed: 25,  // Speed of backspacing
                backDelay: 1000, // Delay before backspacing
                startDelay: 500, // Delay before starting typing
                loop: true,  // Loop the animation
                showCursor: true, // Show blinking cursor
                cursorChar: "|", // Cursor character
            };
        
            const typed = new Typed(typedElement.current, options);
        
            // Clean up on component unmount
            return () => typed.destroy();
        }
    );

    return (
        <span ref={typedElement} className="text-deepPlum" />
    )

}

export default TypedEffect;