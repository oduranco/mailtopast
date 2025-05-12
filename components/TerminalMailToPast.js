import { useState, useEffect } from 'react';

export default function TerminalMailToPast() {
  const [messages, setMessages] = useState([
    'Connecting to mailtopast.com...',
    'Establishing temporal link... ✅',
    'Ready to send message to past self.',
    '',
  ]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);

  const responses = [
    'From: mikedev@mimail.com\nTo: you@present.com\nSubject: Re: First message\n\nOk. Esto está… qué sé yo. ¿Quién eres? Si de verdad eres mi yo del futuro, dime algo que solo sabríamos nosotros.',
    'From: mikedev@mimail.com\nTo: you@present.com\nSubject: Re: Confirmación\n\nOk. Es real. Ahora estoy en mi break. Por si no recuerda, además de estudiar, trabajo en el restaurante de comida china. Hoy sí que me siento muy cansado, esto es muy duro. ¿Vos estás bien?',
    'From: mikedev@mimail.com\nTo: you@present.com\nSubject: Re: Lotería\n\nVale, jajaja no me lo esperaba, ya me tengo que ir, le cuento mañana si somos millonarios. Chao',
    'From: mikedev@mimail.com\nTo: you@present.com\nSubject: Re: Y entonces?\n\nCómo se lo digo? No jugué los números. Sí, ganaron. Lo busqué. Pero ayer no los quise jugar y tampoco creo que quiera jugarlos hoy, porque ganarme la lotería no sé, me da miedo que cambien muchas cosas… Qué tal si por ganarme la lotería deje de buscar nuestros sueños y esto no pase… Le envío algo que encontré.'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const newEntry = `> ${input}`;
    const step = history.length;
    setMessages((prev) => [
      ...prev,
      newEntry,
      'Mensaje enviado con éxito desde Mail to Past by Mike D.',
      'Awaiting response...'
    ]);
    setHistory((prev) => [...prev, input]);
    setInput('');

    setTimeout(() => {
      if (responses[step]) {
        setMessages((prev) => [...prev, '', responses[step]]);
      } else {
        setMessages((prev) => [...prev, '', 'From: mikedev@mimail.com\nTo: you@present.com\nSubject: Re: ...\n\nNo entiendo este mensaje, ¿podrías repetirlo?']);
      }
    }, 60000); // 60 segundos de espera para cada respuesta
  };

  return (
    <div className="bg-black text-green-500 font-mono text-xl p-8 min-h-screen overflow-y-auto">
      <div className="max-w-3xl mx-auto space-y-4">
        {messages.map((msg, i) => (
          <div key={i} className="whitespace-pre-wrap">{msg}</div>
        ))}
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col">
          <label className="text-green-400 mb-2">Compose message:</label>
          <textarea
            rows={6}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-black text-green-500 border border-green-600 p-4 rounded resize-none font-mono text-lg"
            placeholder="Escribe tu mensaje al pasado..."
            autoFocus
          />
          <button
            type="submit"
            className="mt-4 bg-green-700 hover:bg-green-600 text-black font-bold py-2 px-6 rounded w-max self-end"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
