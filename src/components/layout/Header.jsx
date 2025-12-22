import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    const mainLinks = [
        { name: 'Início', href: '#hero' },
        { name: 'Quem Somos', href: '#quem-somos' },
        { name: 'Profissionais', href: '#profissionais' },
    ];

    const servicesDropdown = [
        { name: 'Abordagem', href: '#abordagem' },
        { name: 'Serviços', href: '#servicos' },
        { name: 'Diferenciais', href: '#diferenciais' },
        { name: 'Evidências', href: '#evidencias' },
        { name: 'Conteúdos', href: '#conteudos' },
    ];

    const footerLinks = [
        { name: 'Depoimentos', href: '#depoimentos' },
        { name: 'Contato', href: '#contato' },
    ];

    const handleLinkClick = () => {
        setIsMenuOpen(false);
        setIsServicesOpen(false);
    };

    return (
        <header className="header">
            <div className="container header-container">
                <div className="logo">
                    <img src="/logos/ID 1 H.png" alt="Somos Gero Logo" className="logo-img" />
                </div>

                <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <ul>
                        {mainLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} onClick={handleLinkClick}>
                                    {link.name}
                                </a>
                            </li>
                        ))}

                        <li
                            className="dropdown"
                            onMouseEnter={() => setIsServicesOpen(true)}
                            onMouseLeave={() => setIsServicesOpen(false)}
                        >
                            <button className="dropdown-toggle">
                                Serviços <ChevronDown size={16} />
                            </button>
                            <ul className={`dropdown-menu ${isServicesOpen ? 'show' : ''}`}>
                                {servicesDropdown.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} onClick={handleLinkClick}>
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </li>

                        {footerLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} onClick={handleLinkClick}>
                                    {link.name}
                                </a>
                            </li>
                        ))}

                        <li className="mobile-only-link">
                            <a href="#contato" onClick={handleLinkClick}>
                                Converse com os profissionais
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className="header-actions">
                    <a href="#contato" className="btn-cta">Converse com os profissionais</a>
                    <button
                        className="mobile-menu-btn"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
