import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useTransition, animated } from "react-spring";
import NavMenu from "./NavMenu";

function Navigation() {
    const [showMenu, setShowMenu] = useState(false);


    const maskTransitions = useTransition(
        showMenu,
        {
            from: { position: 'absolute', opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
        }
    );

    const menuTransitions = useTransition(
        showMenu,
        {
            from: { opacity: 0, transform: 'translateX(-100%)' },
            enter: { opacity: 1, transform: 'translateX(0%)' },
            leave: { opacity: 0, transform: 'translateX(-100%)' }
        }
    );

    // let menu, menuMask;

    // if (showMenu) {
    //     menu = <div c
    //         lassName="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow">
    //         Following are the menu items available...
    //     </div>

    //     menuMask = <div
    //         className="bg-black bg-opacity-50 fixed top-0 left-0 h-full w-full z-50"
    //         onClick={() => setShowMenu(false)}>
    //     </div>

    // {
    //     position: 'absolute',
    //     opacity: opacity.to({ range: [0.0, 1.0], output: [0,1]})
    // }
    // }

    let animatedMenuMask = maskTransitions((styles, item) => (
        item && <animated.div
            style={styles}
            className="bg-black bg-opacity-50 fixed top-0 left-0 h-full w-full z-50"
            onClick={() => setShowMenu(false)}
            >
        </animated.div>
    ))

    return (
        <nav>
            <span className="text-xl">
                <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)}>
                </FontAwesomeIcon>
            </span>
            {animatedMenuMask}
            {
                menuTransitions((styles, item) => (
                    item && <animated.div
                        style={styles}
                        className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow p-3"
                    >
                        <NavMenu 
                            closeMenu = {() => setShowMenu(false)}
                        />
                    </animated.div>
            ))}
        </nav>
    );
}

export default Navigation;