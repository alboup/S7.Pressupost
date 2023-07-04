import React, { useState } from 'react';

const App = () => {
  const [casellesSeleccionades, setCasellesSeleccionades] = useState({
    webPage: false,
    seoCampaign: false,
    advertisingCampaign: false,
  });

  const calcularPreuTotal = () => {
    let preuTotal = 0;

    if (casellesSeleccionades.webPage) {
      preuTotal += 500;
    }

    if (casellesSeleccionades.seoCampaign) {
      preuTotal += 300;
    }

    if (casellesSeleccionades.advertisingCampaign) {
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

  const preuTotal = calcularPreuTotal();

  return (
    <div>
      <label>
        Pàgina Web (500 €):
        <input
          type="checkbox"
          name="webPage"
          checked={casellesSeleccionades.webPage}
          onChange={handleCanviCasellaSeleccionada}
        />
      </label>

      <br />

      <label>
        Campanya SEO (300 €):
        <input
          type="checkbox"
          name="seoCampaign"
          checked={casellesSeleccionades.seoCampaign}
          onChange={handleCanviCasellaSeleccionada}
        />
      </label>

      <br />

      <label>
        Campanya de Publicitat (200 €):
        <input
          type="checkbox"
          name="advertisingCampaign"
          checked={casellesSeleccionades.advertisingCampaign}
          onChange={handleCanviCasellaSeleccionada}
        />
      </label>

      <br />

      <p>Preu Total: {preuTotal} €</p>
    </div>
  );
};

export default App;
