import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import '../styles/global.css';

export default function App({ Component, pageProps }) {
  const defaultTheme = {
    dark: false,
    fontColor: 'var(--color-black)',
    backgroundColor: 'var(--color-white)'
  }

  const darkTheme = {
    dark: true,
    fontColor: 'var(--color-white)',
    backgroundColor: 'var(--color-black)'
  }

  const [selected, setSelected] = useState(defaultTheme)

  const toggleTheme = () => {
    setSelected(selected.dark ? defaultTheme : darkTheme)
  }


  return (
    <>
      <button className="togglerButton" onClick={toggleTheme}>Toggle Theme</button>
      <ThemeProvider theme={selected}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
