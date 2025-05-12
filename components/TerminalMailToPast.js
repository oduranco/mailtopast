
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
    '> From: mikedev@mimail.com\n> Subject: Re: First message\n> Message: Ok. Esto está… qué sé yo. ¿Quién eres? Si de verdad eres mi yo del futuro, dime algo que solo sabríamos nosotros.',
    '> From: mikedev@mimail.com\n> Subject: Re: Confirmación\n> Message: Ok. Es real. Ahora estoy en mi break. Por si no recuerda, además de estudiar, trabajo en el restaurante de comida china. Hoy si que me siento muy cansado, esto es muy duro. ¿Vos estás bien?',
    '> From: mikedev@mimail.com\n> Subject: Re: Lotería\n> Message: Vale, jajaja no me lo esperaba, ya me tengo que ir, le cuento mañana si somos millonarios. Chao',
    '> From: mikedev@mimail.com\n> Subject: Re: Y entonces?\n> Message: Cómo se lo digo? No jugué los números. Sí, ganaron. Lo busqué. Pero ayer no los quise jugar y tampoco creo que quiera jugarlos hoy, porque ganarme la lotería no se, me da miedo que cambien muchas cosas… Qué tal si por ganarme la lotería deje de buscar nuestros sueños y esto no pase… Le envío algo que encontré.'
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
        setMessages((prev) => [...prev, '', '> From: mikedev@mimail.com\n> Subject: Re: ...\n> Message: No entiendo este mensaje, ¿podrías repetirlo?']);
      }
    }, 4000);
  };

  return (
    <div className="bg-black text-green-500 font-mono p-4 h-screen overflow-y-auto">
      {messages.map((msg, i) => (
        <div key={i}>{msg}</div>
      ))}
      <form onSubmit={handleSubmit} className="mt-4">
        <span>&gt; </span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-black text-green-500 border-none outline-none w-3/4"
          autoFocus
        />
      </form>
    </div>
  );
}
