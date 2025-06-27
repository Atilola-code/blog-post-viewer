const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} BeFit Blog. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-amber-400">Privacy Policy</a>
          <a href="#" className="hover:text-amber-400">Terms of Service</a>
          <a href="#" className="hover:text-amber-400">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
