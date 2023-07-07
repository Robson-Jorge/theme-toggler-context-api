import { useState, useEffect } from 'react';

export default function useTheme(key, initialTheme) {

    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem(key);
        if (storedTheme) {
            try {
                return JSON.parse(storedTheme);
            } catch (error) {
                console.error("Error parsing stored theme:", error);
            }
        }
        // Use o tema inicial se nenhum tema armazenado ou em caso de erro
        return initialTheme;
    })

    useEffect(() => {
        try {
            localStorage.setItem(key , JSON.stringify(theme));
        } catch (error) {
            console.error("Error storing theme:", error);
        }
    }, [key, theme]);

    return [theme, setTheme]
}
