import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import ChevronDown from '@components/icons/ChevronDown'
import Moon from '@components/icons/Moon'
import Sun from '@components/icons/Sun'
import Laptop from '@components/icons/Laptop'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  // Prevent mounting on server, needs to be mounted on the client
  if (!mounted) return null

  return (
    <label htmlFor="theme" className="relative w-max mx-auto my-2 leading-8">
      <span className="absolute left-0 top-2 px-3 border-r pointer-events-none">
        {theme === 'dark' ? <Moon /> : theme === 'light' ? <Sun /> : <Laptop />}
      </span>
      {/* eslint-disable-next-line jsx-a11y/no-onchange */}
      <select
        className="select-primary bg-secondary rounded-lg hover:bg-primary-05"
        id="theme"
        name="theme"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        aria-label="Change theme color"
      >
        <option value="system">Sistema</option>
        <option value="dark">Tema Oscuro</option>
        <option value="light">Tema Claro</option>
      </select>
      <span className="absolute right-2 top-2 pointer-events-none">
        <ChevronDown />
      </span>
    </label>
  )
}

export default ThemeSwitch
