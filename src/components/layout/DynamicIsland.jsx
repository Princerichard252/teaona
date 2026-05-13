import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const navItems =[
  { label: "Home", href: "#home", icon: "home" },
  { label: "About", href: "#about", icon: "spark" },
  { label: "Services", href: "#services", icon: "tools" },
  { label: "Projects", href: "#projects", icon: "chart" },
  { label: "Experience", href: "#experience", icon: "experience" },
  { label: "Connect", href: "#connect", icon: "mail" },
];

const spring = { type: "spring", stiffness: 350, damping: 30 };

function NavIcon({ name }) {
  const sharedProps = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  const paths = {
    home: (
      <>
        <path d="M3 11.5 12 4l9 7.5" />
        <path d="M5.5 10.5V20h13v-9.5" />
        <path d="M9.5 20v-5h5v5" />
      </>
    ),
    spark: (
      <>
        <path d="M12 3l1.9 5.2L19 10l-5.1 1.8L12 17l-1.9-5.2L5 10l5.1-1.8L12 3Z" />
        <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" />
      </>
    ),
    tools: (
      <>
        <path d="m14.5 6 3.5 3.5" />
        <path d="M4 20l6.4-6.4" />
        <path d="m13 5 6 6-2.6 2.6-6-6L13 5Z" />
        <path d="m8 16 2 2" />
      </>
    ),
    chart: (
      <>
        <path d="M4 19h16" />
        <path d="M6.5 15.5 10 12l3 2.5 4.5-7" />
        <path d="M6 7v8.5h12" />
      </>
    ),
    pulse: (
      <>
        <path d="M4 13h3l2-6 4 12 2-6h5" />
        <path d="M20 5v4" />
        <path d="M18 7h4" />
      </>
    ),
    experience: (
      <>
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </>
    ),
    mail: (
      <>
        <path d="M5 7h14v10H5z" />
        <path d="m5 8 7 5 7-5" />
      </>
    ),
  };

  return <svg {...sharedProps}>{paths[name]}</svg>;
}

export default function DynamicIsland() {
  const[activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isClickScrolling = useRef(false);
  const clickScrollTimeout = useRef(null);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.slice(1));
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;

        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visibleEntry?.target?.id) setActiveSection(visibleEntry.target.id);
      },
      { threshold:[0.4, 0.6] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => {
      observer.disconnect();
      if (clickScrollTimeout.current) clearTimeout(clickScrollTimeout.current);
    };
  },[]);

  function handleNavClick(event, item) {
    event.preventDefault();
    const sectionId = item.href.slice(1);
    const target = document.getElementById(sectionId);

    isClickScrolling.current = true;
    if (clickScrollTimeout.current) clearTimeout(clickScrollTimeout.current);

    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });

    clickScrollTimeout.current = setTimeout(() => {
      isClickScrolling.current = false;
      setActiveSection(sectionId);
    }, 1200);
  }

  return (
    <>
      {/* DESKTOP SIDEBAR */}
      <aside
        className="fixed left-6 top-1/2 z-[120] hidden -translate-y-1/2 md:flex"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.nav
          animate={{ width: isHovered ? "12rem" : "4.85rem" }}
          transition={spring}
          className="nav-glass-shell flex flex-col items-start gap-3 overflow-hidden rounded-[3rem] px-3 py-6"
        >
          {/* Logo Area */}
          <div className="mb-4 flex w-full items-center px-1">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, navItems[0])}
              className="shrink-0 ml-[0.175rem]"
            >
              <img src="/character.webp" alt="Logo" className="w-10 h-10 rounded-full object-cover shadow-[0_0_15px_rgba(168,85,247,0.3)]" />
            </a>
            <AnimatePresence>
              {isHovered && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="mobile-brand-text ml-4 whitespace-nowrap text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
                >
                  Teaona
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          {/* Navigation Items */}
          <div className="flex w-full flex-col gap-3">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`nav-item-wrapper group ${isActive ? "is-active" : ""}`}
                >
                  {/* PERFECTLY ALIGNED CONTAINER: Holds both the white background & the icon orb */}
                  <div className="relative flex h-[2.8rem] w-[2.8rem] shrink-0 items-center justify-center ml-[0.275rem]">
                    {isActive && (
                      <motion.div layoutId="nav-highlight" className="active-circle-bg" transition={spring} />
                    )}
                    <div className="nav-icon-orb relative z-10">
                      <NavIcon name={item.icon} />
                    </div>
                  </div>

                  {/* LABEL TEXT */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.span
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -5 }}
                        className="nav-text-label whitespace-nowrap"
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </a>
              );
            })}
          </div>
        </motion.nav>
      </aside>

      {/* MOBILE HEADER */}
      <header className="fixed inset-x-0 top-0 z-[120] flex px-4 pt-4 md:hidden">
        <div className="mobile-glass-header flex w-full items-center justify-between rounded-full px-4 py-3">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, navItems[0])}
            className="flex items-center gap-3"
          >
            <img src="/character.webp" alt="Logo" className="w-9 h-9 rounded-full object-cover shadow-[0_0_15px_rgba(168,85,247,0.3)]" />
            <span className="mobile-brand-text font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Teaona</span>
          </a>

          <button
            type="button"
            className="hamburger-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <motion.span animate={isMobileMenuOpen ? { y: 7, rotate: 45 } : { y: 0, rotate: 0 }} transition={spring} />
            <motion.span animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }} transition={spring} />
            <motion.span animate={isMobileMenuOpen ? { y: -7, rotate: -45 } : { y: 0, rotate: 0 }} transition={spring} />
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-x-4 top-24 z-[119] md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <nav className="mobile-menu-glass flex flex-col gap-2 rounded-[2rem] p-3">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`mobile-nav-item ${isActive ? "is-active" : ""}`}
                  >
                    {isActive && (
                      <motion.div layoutId="mobile-highlight" className="mobile-active-bar" transition={spring} />
                    )}
                    <div className="relative z-10 flex w-full items-center gap-4 px-3">
                      <NavIcon name={item.icon} />
                      <span className="mobile-label-text font-bold uppercase tracking-wider">{item.label}</span>
                    </div>
                  </a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
