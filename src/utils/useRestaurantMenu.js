import { useState, useEffect } from "react";
import { MENU_API_URL } from "./constant";

const useRestaurantMenu = (restId) => {
    const [menu, setMenu] = useState(null);

    useEffect(() => {
        const fetchMenu = async () => {
            const data = await fetch(`${MENU_API_URL}${restId}`);
            const jsonD = await data.json();
            setMenu(jsonD.data);
        };

        fetchMenu();
    }, []);
    
    return menu;
}

export default useRestaurantMenu;
