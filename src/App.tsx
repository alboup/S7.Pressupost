import React, { useState } from 'react';
import './app.css';

interface ServiceOptions {
  webPage: boolean;
  seoConsulting: boolean;
  googleAdsCampaign: boolean;
  numPages?: number;
  numLanguages?: number;
}

const App = () => {
  const [casellesSeleccionades, setCasellesSeleccionades] = useState<ServiceOptions>({
    webPage: false,
    seoConsulting: false,
    googleAdsCampaign: false,
    numPages: 1,
    numLanguages: 1,
  });

  const calcularPreuTotal = () => {
    let preuTotal = 0;

    if (casellesSeleccionades.webPage) {
      preuTotal += 500;
      preuTotal += (casellesSeleccionades.numPages || 0) * (casellesSeleccionades.numLanguages || 0) * 30;
    }

    if (casellesSeleccionades.seoConsulting) {
      preuTotal += 300;
    }

    if (casellesSeleccionades.googleAdsCampaign) {
      preuTotal += 200;
    }

    return preuTotal;
  };

  const handleCanviCasellaSeleccionada = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    setCasellesSeleccionades((casellesPrevSeleccionades) => ({
      ...casellesPrevSeleccionades,
      [name]: checked,
    }));
  };

  const handleWebPageOptionsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setCasellesSeleccionades((casellesPrevSeleccionades) => ({
      ...casellesPrevSeleccionades,
      [name]: Number(value),
    }));
  };

  const preuTotal = calcularPreuTotal();

  return (
    <div>
      <h2>Què desitja fer?</h2>

      <label>
        Una Pàgina Web (500 €):
        <input
          type="checkbox"
          name="webPage"
          checked={casellesSeleccionades.webPage}
          onChange={handleCanviCasellaSeleccionada}
        />
      </label>

      {casellesSeleccionades.webPage && (
        <div style={{border: '3px solid black', borderRadius: '10px', padding: '15px', margin: '15px 0'}}>
          <label>
            Nombre de pàgines:
            <input type="number" name="numPages" value={casellesSeleccionades.numPages} min="1" onChange={handleWebPageOptionsChange} />
          </label>
          <br />
          <br />
          <label>
            Nombre d'idiomes:
            <input type="number" name="numLanguages" value={casellesSeleccionades.numLanguages} min="1" onChange={handleWebPageOptionsChange} />
          </label>
        </div>
      )}

      <br />

      <label>
        Una Consultoria SEO (300 €):
        <input
          type="checkbox"
          name="seoConsulting"
          checked={casellesSeleccionades.seoConsulting}
          onChange={handleCanviCasellaSeleccionada}
        />
      </label>

      <br />

      <label>
        Una Campanya de Google Ads (200 €):
        <input
          type="checkbox"
          name="googleAdsCampaign"
          checked={casellesSeleccionades.googleAdsCampaign}
          onChange={handleCanviCasellaSeleccionada}
        />
      </label>

      <br />

      <p>Preu Total: {preuTotal} €</p>
    </div>
  );
};

export default App;
