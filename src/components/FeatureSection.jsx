import React from 'react';
import './FeatureSection.scss';

function FeatureSection() {
  return (
    <section className="features">
      <div className="feature">
        <h3>Simplicidade e Eficiência</h3>
        <p>Desenvolva e gerencie projetos de forma fácil.</p>
      </div>
      <div className="feature">
        <h3>Gestão de Equipe</h3>
        <p>Colabore com sua equipe em tempo real.</p>
      </div>
      <div className="feature">
        <h3>Relatórios Detalhados</h3>
        <p>Monitore o progresso e resultados com precisão.</p>
      </div>
    </section>
  );
}

export default FeatureSection;
