// src/components/Header.tsx

import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HiHome, HiUser, HiOutlineFolder, HiMail, HiMenu, HiX } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen((prev) => !prev)

  const navItems = [
    { name: 'Home', path: '/', icon: <HiHome size={20} /> },
    { name: 'About', path: '/about', icon: <HiUser size={20} /> },
    { name: 'Metrics', path: '/projects', icon: <HiOutlineFolder size={20} /> },
    { name: 'Contact', path: '/contact', icon: <HiMail size={20} /> },
  ]

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative shadow-md rounded-b-2xl bg-transparent h-32"
      style={{ fontFamily: 'var(--body-font)' }}
    >
      <div className="container mx-auto flex justify-between items-center h-full px-6">
        {/* Logo with Framer Motion animation */}
        <Link to="/">
          <motion.img
            src="/lp_logo.webp"
            alt="Logo"
            className="w-20 h-auto"
            initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center space-x-2 font-semibold transition-colors duration-300 border-b-2 pb-1 ${
                  isActive
                    ? 'border-[var(--primary-color)] text-[var(--primary-color)]'
                    : 'border-transparent text-[var(--primary-color)] hover:text-[var(--secondary-color)]'
                }`
              }
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-[var(--primary-color)] hover:bg-[var(--secondary-color)] rounded-full transition"
        >
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 z-50 rounded-b-2xl shadow-lg bg-white"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col space-y-4 py-6 px-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center space-x-2 font-medium text-lg transition-colors duration-300 ${
                      isActive
                        ? 'text-[var(--primary-color)]'
                        : 'text-[var(--primary-color)] hover:text-[var(--secondary-color)]'
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  {item.name}
                </NavLink>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header