import React from 'react';

function Profile() {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 mt-12">
      {/* Identité */}
      <div className="border border-primary/40 rounded-lg p-6 flex flex-col justify-center">
        <span className="text-primary/70 text-sm font-bold uppercase tracking-wider mb-1">Name /</span>
        <h1 className="text-4xl font-bold mb-4">THOMAS COUANON</h1>
        
        <span className="text-primary/70 text-sm font-bold uppercase tracking-wider mb-1">Poste /</span>
        <h2 className="text-2xl mb-4 text-light/90">Étudiant Ingénieur</h2>
        
        <span className="text-primary/70 text-sm font-bold uppercase tracking-wider mb-1">Status /</span>
        <span className="text-primary/70 text-sm font-bold uppercase tracking-wider mb-1">Status /</span>
        <a
            href="./CV_Couanon_Thomas.pdf"
            download="CV_Couanon_Thomas.pdf"
            className="bg-primary/10 border border-primary/30 p-3 rounded text-sm text-light/80 cursor-pointer hover:bg-primary/20 transition-colors w-max inline-block"
        >
        Recherche d'alternance en Dev/Cyber [Télécharger CV]
        </a>
      </div>

      {/* Biographie */}
      <div className="border border-primary/40 rounded-lg p-6">
        <span className="text-primary/70 text-sm font-bold uppercase tracking-wider mb-2 block">Bio /</span>
        <p className="text-light/70 leading-relaxed text-sm">
          Actuellement étudiant ingénieur, spécialisé en cybersécurité et développement système. 
          Fort d'une expérience d'échange académique en Corée du Sud au SeoulTech, j'ai développé une grande capacité d'adaptation. 
          Je suis passionné par l'architecture bas niveau (C, Python) et l'administration de systèmes Linux, 
          privilégiant toujours une approche "hands-on" pour comprendre le fonctionnement interne des technologies.
        </p>
      </div>
    </div>
  );
}

export default Profile;