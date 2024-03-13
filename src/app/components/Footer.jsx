const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center text-white">
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-bold mb-2">Footer</h1>
            <p className="text-sm">Este es el footer de tu sitio web. Puedes agregar aquí información relevante, enlaces importantes o cualquier otro contenido que desees destacar.</p>
            <p className="text-sm mt-2">© {new Date().getFullYear()} Tu Sitio. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;