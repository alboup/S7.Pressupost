import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './app.css';
import Modal from './components/Modal';

interface ServiceOptions {
  webPage: boolean;
  seoConsulting: boolean;
  googleAdsCampaign: boolean;
  numPages: number;
  numLanguages: number;
}

const NumberInput = ({ name, value, onChange }: { name: string; value: number; onChange: (name: string, value: number) => void }) => {
  const increment = () => onChange(name, value + 1);
  const decrement = () => value > 1 && onChange(name, value - 1);

  return (
    <div>
      <button onClick={decrement}>-</button>
      <input type="text" name={name} value={value} readOnly />
      <button onClick={increment}>+</button>
    </div>
  );
};

const Benvinguda = () => (
  <div>
    <h1>Benvinguts a la nostra web!</h1>
    <p>Aquí podràs seleccionar els serveis que desitges i calcular el cost total.</p>
    <Link to="/seleccio">Comença ara</Link>
  </div>
);

const Seleccio = () => {
  const [showModal, setShowModal] = useState(false);
  const [casellesSeleccionades, setCasellesSeleccionades] = useState<ServiceOptions>(() => {
    const savedState = localStorage.getItem('serviceOptions');
    return savedState ? JSON.parse(savedState) : {
      webPage: false,
      seoConsulting: false,
      googleAdsCampaign: false,
      numPages: 1,
      numLanguages: 1,
    };
  });

  useEffect(() => {
    localStorage.setItem('serviceOptions', JSON.stringify(casellesSeleccionades));
  }, [casellesSeleccionades]);

  const calcularPreuTotal = () => {
    let preuTotal = 0;

    if (casellesSeleccionades.webPage) {
      preuTotal += 500;
      preuTotal += casellesSeleccionades.numPages * casellesSeleccionades.numLanguages * 30;
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

  const handleWebPageOptionsChange = (name: string, value: number) => {
    setCasellesSeleccionades((casellesPrevSeleccionades) => ({
      ...casellesPrevSeleccionades,
      [name]: value,
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
        <div>
          <label>
            Nombre de pàgines
            <NumberInput name="numPages" value={casellesSeleccionades.numPages} onChange={handleWebPageOptionsChange} />
            <button className='ajuda' onClick={() => setShowModal(true)}>&#x2139;</button>
            <Modal show={showModal} onClose={() => setShowModal(false)}>
              <h2>Ajuda</h2>
              <p>Aquí pots especificar el nombre de pàgines que necessites per a la teva web. Cada pàgina té un cost addicional.</p>
            </Modal>
          </label>
          <br />
          <br />
          <label>
            Nombre d'idiomes:
            <NumberInput name="numLanguages" value={casellesSeleccionades.numLanguages} onChange={handleWebPageOptionsChange} />
            <button className='ajuda' onClick={() => setShowModal(true)}>&#x2139;</button>
            <Modal show={showModal} onClose={() => setShowModal(false)}>
              <h2>Ajuda</h2>
              <p>Aquí pots especificar en quants idiomes vols que la teva web estigui disponible. Cada idioma addicional té un cost addicional.</p>
            </Modal>
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

const App = () => (
  <Router>
    <Routes>
      <Route path="/seleccio" element={<Seleccio />} />
      <Route path="/" element={<Benvinguda />} />
    </Routes>
  </Router>
);

export default App;

