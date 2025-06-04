
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    bairro: '',
    cidade: '',
    tipo: 'terreno',
    area: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você poderia chamar uma API para buscar os valores de mercado
    console.log('Buscando comparativos com:', formData);
    alert('Busca simulada no console!');
  };

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', padding: '1rem' }}>
      <h1>Geometro</h1>
      <p>Compare valores de terrenos e imóveis por bairro e cidade.</p>
      <form onSubmit={handleSubmit}>
        <label>Bairro
          <input
            type="text"
            name="bairro"
            value={formData.bairro}
            onChange={handleChange}
            style={{ width: '100%', marginBottom: '1rem' }}
            placeholder="Ex: Centro"
            required
          />
        </label>
        <label>Cidade
          <input
            type="text"
            name="cidade"
            value={formData.cidade}
            onChange={handleChange}
            style={{ width: '100%', marginBottom: '1rem' }}
            placeholder="Ex: São Paulo"
            required
          />
        </label>
        <label>Tipo de imóvel
          <select
            name="tipo"
            value={formData.tipo}
            onChange={handleChange}
            style={{ width: '100%', marginBottom: '1rem' }}
          >
            <option value="terreno">Terreno</option>
            <option value="casa">Casa</option>
          </select>
        </label>
        <label>Área aproximada (m²)
          <input
            type="number"
            name="area"
            value={formData.area}
            onChange={handleChange}
            style={{ width: '100%', marginBottom: '1rem' }}
          />
        </label>
        <button type="submit" style={{ padding: '0.5rem 1rem' }}>
          Buscar valores de mercado
        </button>
      </form>
    </div>
  );
}
