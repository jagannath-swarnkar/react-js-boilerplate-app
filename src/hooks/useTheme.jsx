import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
import { customTheme } from '../lib/theme';

const useTheme = () => {
    const themeType = useContext(ThemeContext) || 'light';
    const theme = customTheme[themeType]
    return [theme, themeType]
}

export default useTheme
