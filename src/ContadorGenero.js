
import React, { useState } from 'react';
import './ContadorGenero.css';

const ContadorDePessoas = () => {
  const [homensCount, setHomensCount] = useState(0);
  const [mulheresCount, setMulheresCount] = useState(0);

  const handleHomemMais = () => setHomensCount(homensCount + 1);
  const handleHomemMenos = () => homensCount > 0 && setHomensCount(homensCount - 1);
  const handleMulherMais = () => setMulheresCount(mulheresCount + 1);
  const handleMulherMenos = () => mulheresCount > 0 && setMulheresCount(mulheresCount - 1);
  const handleAtualizar = () => {
    setHomensCount(0);
    setMulheresCount(0);
  };

  return (
    <div id="divPrincipal">
      <h2>Total:</h2>

      <div id="totalContainer">
        <div id="homensContainer">
          <img
            src="https://img.freepik.com/vetores-premium/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg?w=740"
            alt="Homem"
          />
          <div>
            <div id="retanguloHomens" className="contador">{homensCount}</div>
            <button onClick={handleHomemMais} className="contador btn-mais">+</button>
            <button onClick={handleHomemMenos} className="contador btn-menos">-</button>
          </div>
        </div>

        <div id="mulheresContainer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6833/6833591.png"
            alt="Mulher"
          />
          <div>
            <div id="retanguloMulheres" className="contador">{mulheresCount}</div>
            <button onClick={handleMulherMais} className="contador btn-mais">+</button>
            <button onClick={handleMulherMenos} className="contador btn-menos">-</button>
          </div>
        </div>

        <br />
        <div id="totalContador">
          <div>
            <div id="retanguloTotal" className="contador">
              {homensCount + mulheresCount}
            </div>
          </div>
        </div>
      </div>

      <button id="btnAtualizar" onClick={handleAtualizar}>Atualizar</button>
    </div>
  );
};

export default ContadorDePessoas;
