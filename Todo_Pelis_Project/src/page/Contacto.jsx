import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const ContactForm = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [ticketNumber, setTicketNumber] = useState(null);

  const onSubmit = (data) => {
    // Simulación de una solicitud asincrónica (puedes reemplazar esto con una solicitud real)
    setTimeout(() => {
      // Supongamos que obtienes el número de ticket de tu servidor, aquí simplemente lo estableceré como un número aleatorio
      const randomTicketNumber = Math.floor(Math.random() * 1000000) + 1;
      setTicketNumber(randomTicketNumber);
      setIsFormSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    reset();
    setIsFormSubmitted(false);
    setTicketNumber(null);
  };

  return (
    <>
    <Sidebar/>
    <div className="container mx-auto mt-8 p-8 bg-gray-800 max-w-md rounded-lg">
      {!isFormSubmitted ? (
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="name" className="text-white">
            Nombre
          </label>
          <Controller
            name="name"
            control={control}
            rules={{
              required: 'Este campo es obligatorio',
            }}
            render={({ field }) => (
              <input {...field} type="text" className={`focus:outline-none focus:border-indigo-500 border rounded-md px-3 py-2 w-full bg-gray-700 text-white ${errors.name ? 'border-red-500' : 'border-gray-500'}`} />
            )}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="text-white">
            Correo Electrónico
          </label>
          <Controller
            name="email"
            control={control}
            rules={{
              required: 'Este campo es obligatorio',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Correo electrónico no válido',
              },
            }}
            render={({ field }) => (
              <input {...field} type="text" className={`focus:outline-none focus:border-indigo-500 border rounded-md px-3 py-2 w-full bg-gray-700 text-white ${errors.email ? 'border-red-500' : 'border-gray-500'}`} />
            )}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="text-white">
            Teléfono de Contacto
          </label>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <input {...field} type="text" className="focus:outline-none focus:border-indigo-500 border rounded-md px-3 py-2 w-full bg-gray-700 text-white border-gray-500" />
            )}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="type" className="text-white">
            Tipo
          </label>
          <Controller
            name="type"
            control={control}
            render={({ field }) => (
              <select {...field} className="focus:outline-none focus:border-indigo-500 border rounded-md px-3 py-2 w-full bg-gray-700 text-white border-gray-500">
                <option value="incidencia">Incidencia</option>
                <option value="sugerencia">Sugerencia</option>
              </select>
            )}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="text-white">
            Mensaje
          </label>
          <Controller
            name="message"
            control={control}
            rules={{
              required: 'Este campo es obligatorio',
            }}
            render={({ field }) => (
              <textarea {...field} className={`focus:outline-none focus:border-indigo-500 border rounded-md px-3 py-2 w-full bg-gray-700 text-white ${errors.message ? 'border-red-500' : 'border-gray-500'}`} />
            )}
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
        </div>

        <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded-md focus:outline-none focus:bg-indigo-600">
            Enviar
          </button>
        </form>
      ) : (
        <div className="text-white text-center">
          <p>Su mensaje ha sido enviado y será revisado por nuestro equipo.</p>
          <p>Número de ticket: {ticketNumber}</p>
          <Link to="/">
            <button className="bg-gray-500 text-white px-4 py-2 mt-4 rounded-md focus:outline-none focus:bg-gray-600">
              Volver al Home
            </button>
          </Link>
          <button onClick={handleReset} className="bg-indigo-500 text-white px-4 py-2 mt-2 rounded-md focus:outline-none focus:bg-indigo-600">
            Volver al formulario
          </button>
        </div>
      )}
    </div>
    </>
  );
};

export default ContactForm;






