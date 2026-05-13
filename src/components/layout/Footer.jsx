import './Footer.css';
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-col branding-col">
                    <img src="/logos/ID 1.png" alt="Somos Gero Logo" className="footer-logo" />
                    <p className="footer-description">
                        Cuidado integrado para a saúde musculoesquelética da pessoa idosa.
                    </p>
                </div>

                <div className="footer-col contact-col">
                    <h3>Contato</h3>
                    <ul>
                        <li>
                            <MapPin size={18} />
                            <span>Rua Monte Castelo, 677, Londrina</span>
                        </li>
                        <li>
                            <Phone size={18} />
                            <span>(43) 99632-8616</span>
                        </li>
                        <li>
                            <Mail size={18} />
                            <span>Somosgero@gmail.com</span>
                        </li>
                    </ul>
                </div>

                <div className="footer-col links-col">
                    <h3>Navegação</h3>
                    <ul>
                        <li><a href="#quem-somos">Quem Somos</a></li>
                        <li><a href="#profissionais">Profissionais</a></li>
                        <li><a href="#servicos">Serviços</a></li>
                        <li><a href="#conteudos">Conteúdos</a></li>
                    </ul>
                </div>

                <div className="footer-col social-col">
                    <h3>Redes Sociais</h3>
                    <div className="social-icons">
                        <a href="https://www.instagram.com/somosgero/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram /></a>
                        <a href="#" aria-label="Facebook"><Facebook /></a>
                        <a href="#" aria-label="LinkedIn"><Linkedin /></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Somos Gero. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
