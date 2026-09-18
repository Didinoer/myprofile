import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Castle } from "lucide-react";

interface NavigationProps {
  className?: string;
}

/**
 * ✅ ENHANCED - Mobile-First Navigation with Gaming Theme
 * 
 * Features:
 * - Improved mobile hamburger menu with game aesthetic
 * - Better touch targets (44px minimum)
 * - Keyboard navigation support
 * - Reduced animation complexity for performance
 * - High contrast focus indicators
 */
const Navigation: React.FC<NavigationProps> = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobile, setIsMobile] = useState(false);

  // ✅ OPTIMIZED - Debounced resize handler
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMobile(window.innerWidth < 1024);
        if (window.innerWidth >= 1024) {
          setIsMenuOpen(false);
        }
      }, 150);
    };

    // ✅ INITIAL CHECK
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // ✅ ACCESSIBILITY - Track active section for keyboard navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'portfolio', 'experience', 'achievements', 'contact'];
      const scrollPos = window.scrollY + window.innerHeight / 3;
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= scrollPos && rect.bottom > scrollPos) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ ENHANCED - Navigation items with better accessibility
  const navItems = [
    { id: 'hero', label: 'Home', emoji: '🏠' },
    { id: 'about', label: 'About', emoji: '👤' },
    { id: 'skills', label: 'Skills', emoji: '⚔️' },
    { id: 'portfolio', label: 'Portfolio', emoji: '📜' },
    { id: 'experience', label: 'Experience', emoji: '🏆' },
    { id: 'achievements', label: 'Achievements', emoji: '🎯' },
    { id: 'contact', label: 'Contact', emoji: '📧' },
  ];

  const handleNavClick = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* ✅ NEW - Skip to content for accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      
      {/* Main Navigation */}
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
          ${className || ''}
        `}
        style={{ 
          background: 'var(--nav-bg)', 
          backdropFilter: 'blur(10px)',
          borderBottom: '3px solid var(--border-dark)',
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo/Brand */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => handleNavClick('hero')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleNavClick('hero')}
              aria-label="Go to home section"
            >
              <div 
                className="p-2 pixel-border"
                style={{
                  background: 'var(--accent-secondary)',
                  borderColor: 'var(--border-dark)',
                }}
              >
                <Castle size={20} className="text-[var(--text-primary)]" />
              </div>
              <span 
                className="font-pixel text-sm text-[var(--text-primary)] hidden sm:block"
                style={{ fontFamily: "'Press Start 2P', monospace" }}
              >
                DIDI.GAME
              </span>
            </motion.div>

            {/* ✅ DESKTOP - Navigation Menu */}
            {!isMobile && (
              <motion.ul 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="hidden lg:flex items-center gap-2"
                role="menubar"
              >
                {navItems.map((item) => (
                  <li key={item.id} role="menuitem">
                    <motion.button
                      onClick={() => handleNavClick(item.id)}
                      className={`
                        relative px-4 py-2 text-[10px] font-pixel transition-all duration-200 ease-in-out
                        min-h-[44px] min-w-[44px] touch-manipulation
                        ${activeSection === item.id 
                          ? 'ring-2 ring-[var(--accent-primary)] ring-opacity-50' 
                          : ''
                        }
                      `}
                      style={{
                        fontFamily: "'Press Start 2P', monospace",
                        color: activeSection === item.id ? 'var(--text-accessible)' : 'var(--text-secondary)',
                        background: activeSection === item.id 
                          ? 'rgba(255,255,255,0.1)' 
                          : 'transparent',
                        border: '2px solid var(--border-color)',
                        borderRadius: '2px'
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        filter: 'brightness(1.1)',
                        transition: { duration: 0.15 }
                      }}
                      whileTap={{ 
                        scale: 0.95,
                        transition: { duration: 0.1 }
                      }}
                      aria-current={activeSection === item.id ? 'page' : undefined}
                      aria-label={`Navigate to ${item.label} section`}
                    >
                      <span className="mr-2" style={{ imageRendering: 'pixelated' }}>
                        {item.emoji}
                      </span>
                      <span className="hidden xl:inline">{item.label}</span>
                      <span className="xl:hidden">{item.label.charAt(0)}</span>
                      
                      {/* Active indicator dot */}
                      {activeSection === item.id && (
                        <motion.div
                          layoutId="nav-indicator"
                          className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 -mt-1"
                          style={{
                            background: 'var(--accent-primary)',
                            borderRadius: '50%',
                            border: '2px solid var(--border-dark)'
                          }}
                        />
                      )}
                    </motion.button>
                  </li>
                ))}
              </motion.ul>
            )}

            {/* ✅ ENHANCED - Mobile Menu Toggle */}
            {isMobile && (
              <motion.button
                onClick={toggleMenu}
                className="lg:hidden p-3 pixel-border min-h-[44px] min-w-[44px] flex items-center justify-center"
                style={{
                  background: 'var(--bg-secondary)',
                  borderColor: 'var(--border-color)'
                }}
                whileHover={{ 
                  filter: 'brightness(1.1)',
                  scale: 1.05,
                  transition: { duration: 0.15 }
                }}
                whileTap={{ 
                  scale: 0.95,
                  transition: { duration: 0.1 }
                }}
                aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                      style={{ imageRendering: 'pixelated' }}
                    >
                      <X size={20} color="var(--text-primary)" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.2 }}
                      style={{ imageRendering: 'pixelated' }}
                    >
                      <Menu size={20} color="var(--text-primary)" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            )}
          </div>
        </div>

        {/* ✅ ENHANCED - Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobile && isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm lg:hidden"
                onClick={() => setIsMenuOpen(false)}
                aria-hidden="true"
              />
              
              {/* Menu Panel */}
              <motion.div
                id="mobile-menu"
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ 
                  type: 'tween',
                  duration: 0.3,
                  ease: [0.4, 0.0, 0.2, 1]
                }}
                className="fixed top-16 right-0 bottom-0 w-80 max-w-[80vw] lg:hidden pixel-border border-l"
                style={{
                  background: 'var(--bg-primary)',
                  borderColor: 'var(--border-color)',
                  overflowY: 'auto'
                }}
                role="dialog"
                aria-modal="true"
                aria-label="Navigation menu"
              >
                <div className="p-4 space-y-3">
                  <div 
                    className="text-center py-4 text-[10px] font-pixel border-b-2"
                    style={{
                      fontFamily: "'Press Start 2P', monospace",
                      color: 'var(--text-muted)',
                      borderColor: 'var(--border-color)'
                    }}
                  >
                    🎮 NAVIGATION MENU 🎮
                  </div>
                  
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleNavClick(item.id)}
                      className={`
                        w-full text-left px-4 py-4 pixel-border min-h-[52px] 
                        flex items-center gap-3 transition-all duration-200
                        ${activeSection === item.id ? 'ring-2 ring-[var(--accent-primary)]' : ''}
                      `}
                      style={{
                        background: activeSection === item.id 
                          ? 'linear-gradient(135deg, rgba(76, 175, 80, 0.1), rgba(76, 175, 80, 0.05))' 
                          : 'var(--bg-panel)',
                        borderColor: activeSection === item.id 
                          ? 'var(--accent-primary)' 
                          : 'var(--border-color)'
                      }}
                      whileHover={{ 
                        x: 4,
                        filter: 'brightness(1.05)',
                        transition: { duration: 0.15 }
                      }}
                      whileTap={{ x: 0 }}
                      aria-current={activeSection === item.id ? 'page' : undefined}
                      aria-label={`Navigate to ${item.label} section`}
                    >
                      <span 
                        className="text-lg flex-shrink-0" 
                        style={{ imageRendering: 'pixelated' }}
                      >
                        {item.emoji}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div 
                          className="text-sm font-pixel font-semibold"
                          style={{
                            fontFamily: "'Press Start 2P', monospace",
                            color: activeSection === item.id ? 'var(--text-accessible)' : 'var(--text-primary)'
                          }}
                        >
                          {item.label}
                        </div>
                        <div 
                          className="text-[10px] opacity-70"
                          style={{
                            fontFamily: "'Nunito', sans-serif",
                            color: 'var(--text-secondary)'
                          }}
                        >
                          Press to visit {item.label}
                        </div>
                      </div>
                      
                      {/* Arrow indicator */}
                      <div 
                        className={`transition-transform duration-200 ${
                          activeSection === item.id ? 'translate-x-2' : ''
                        }`}
                        style={{ imageRendering: 'pixelated' }}
                      >
                        ▶️
                      </div>
                    </motion.button>
                  ))}
                  
                  {/* Close button */}
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full mt-6 py-3 pixel-border min-h-[44px]"
                    style={{
                      background: 'var(--accent-secondary)',
                      borderColor: 'var(--border-dark)',
                      fontFamily: "'Press Start 2P', monospace",
                      fontSize: '11px'
                    }}
                    whileHover={{ 
                      filter: 'brightness(1.1)',
                      transition: { duration: 0.15 }
                    }}
                    whileTap={{ scale: 0.98 }}
                    aria-label="Close navigation menu"
                  >
                    🔚 Close Menu
                  </motion.button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navigation;