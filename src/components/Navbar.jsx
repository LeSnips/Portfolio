import React, { useState } from 'react';
import { Mail, Check } from 'lucide-react'; 
import { FaGithub, FaLinkedin } from 'react-icons/fa'; 

function Navbar() {
  const [copied, setCopied] = useState(false);
  const email = "couanon.thoma@gmail.com"; // Mets ton vrai email ici

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="flex justify-between items-center px-8 py-5 border-b border-primary/30 bg-anthracite/80 backdrop-blur-sm sticky top-0 z-40">
      
      <div className="text-2xl font-extrabold text-primary drop-shadow-[0_0_8px_rgba(124,58,237,0.5)] cursor-pointer transition-all hover:scale-105">
        TC
      </div>

      <ul className="flex space-x-8 text-sm font-medium text-light/80">
        <li>
          <a href="#a-propos" className="hover:text-secondary cursor-pointer transition-colors">
            À Propos
          </a>
        </li>
        <li>
          <a href="#projets" className="hover:text-secondary cursor-pointer transition-colors">
            Projets
          </a>
        </li>
      </ul>

      <div className="flex space-x-5 text-light/80 items-center">
        <a href="https://www.linkedin.com/in/thomas-couanon-19984435b/" target="_blank" rel="noreferrer" className="hover:text-secondary transition-colors">
          <FaLinkedin size={22} />
        </a>
        <a href="https://github.com/LeSnips" target="_blank" rel="noreferrer" className="hover:text-secondary transition-colors">
          <FaGithub size={22} />
        </a>
        
        <button 
          onClick={handleCopyEmail}
          title={copied ? "Email copié !" : `Copier ${email}`}
          className="hover:text-secondary transition-colors flex items-center gap-1.5 relative"
        >
          {copied ? <Check size={22} className="text-green-400" /> : <Mail size={22} />}
          {copied && (
            <span className="absolute -bottom-8 right-0 text-xs bg-anthracite border border-primary/40 text-light px-2 py-1 rounded whitespace-nowrap">
              Copié !
            </span>
          )}
        </button>
      </div>
    </header>
  );
}

export default Navbar;