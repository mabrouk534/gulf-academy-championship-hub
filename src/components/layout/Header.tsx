
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-4 px-6 shadow-sm">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <img 
            src="/lovable-uploads/b167b1b6-3d6b-465f-bd5a-593cdcceb492.png" 
            alt="Quattro Championship Logo" 
            className="h-16 object-contain mr-2" 
          />
          <div className="text-right">
            <h1 className="text-lg md:text-xl font-bold text-gray-800 text-center md:text-right rtl">
              بطولة كواترو للأكاديميات الخليجية لكرة القدم - النسخة الثامنة 2025
            </h1>
            <p className="text-sm text-gray-600 text-center md:text-right">
              Quattro Gulf Academies Championship - 8th Edition 2025
            </p>
          </div>
        </div>
        <div>
          <img 
            src="/lovable-uploads/95400694-e1f5-4730-bf91-f197ced2516c.png" 
            alt="Tournament Logo" 
            className="h-16 object-contain" 
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
