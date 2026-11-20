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
          Actuellement en cycle ingénieur, 
          je monte en compétences sur la cybersécurité, l'infrastructure et le développement système. 
          Plutôt que de rester sur la théorie, j'apprends sur le terrain : challenges CTF, déploiement de services sous Linux/Docker et projets mêlant hardware et code (C, Python). 
          Enrichi par un semestre d'échange à SeoulTech en Corée du Sud, je cherche aujourd'hui une alternance pour m'investir sur des projets réels et continuer à monter en niveau au quotidien.
        </p>
      </div>
    </div>
  );
}

export default Profile;