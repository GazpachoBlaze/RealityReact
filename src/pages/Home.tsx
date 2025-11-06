import React, { useState } from 'react';
import { InputBox } from '../components/InputBox';

export const Home = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async () => {
    // Call your API with 'text' here and handle the response
    setLoading(true);
    setResult(null);
    setError(null);

    try {
      // Example API call placeholder
      // const response = await fetch('/api/analyze', { method: 'POST', body: JSON.stringify({ text }) });
      // const data = await response.json();
      setTimeout(() => {
        // Dummy result
        setResult('Fake News Likelihood: 85%');
        setLoading(false);
      }, 2000);
    } catch (err) {
      setError('Analysis failed. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Fake News Detection</h1>
      <p>Enter news article text or URL for analysis:</p>
      
      <InputBox
        label="Input Text or URL"
        value={text}
        onChange={setText}
        placeholder="Paste your news article or URL here"
        type="textarea"
        rows={6}
      />

      <button onClick={handleAnalyze} disabled={loading || !text} style={{ marginTop: '1rem' }}>
        {loading ? 'Analyzing...' : 'Analyze'}
      </button>

      {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}

      {result && (
        <div style={{ marginTop: '2rem', padding: '1rem', border: '1px solid #ccc' }}>
          <h2>Analysis Result</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};


export {};