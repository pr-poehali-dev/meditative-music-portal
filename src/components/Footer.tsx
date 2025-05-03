
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Звуки Медитации</h3>
            <p className="text-slate-300 mb-4">
              Погрузитесь в мир медитативной музыки поющих чаш и электронных звуков, 
              созданных для релаксации, концентрации и внутреннего покоя.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-purple-400">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-purple-400">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-purple-400">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-white hover:text-purple-400">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Разделы</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-purple-400">Главная</a></li>
              <li><a href="#" className="text-slate-300 hover:text-purple-400">Музыка</a></li>
              <li><a href="#" className="text-slate-300 hover:text-purple-400">События</a></li>
              <li><a href="#" className="text-slate-300 hover:text-purple-400">Блог</a></li>
              <li><a href="#" className="text-slate-300 hover:text-purple-400">Магазин</a></li>
              <li><a href="#" className="text-slate-300 hover:text-purple-400">Контакты</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Подпишитесь на новости</h3>
            <p className="text-slate-300 mb-4">
              Получайте анонсы новых альбомов, мероприятий и медитативных практик.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Ваш email" 
                className="px-4 py-2 w-full rounded-l-md focus:outline-none text-black"
              />
              <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-r-md">
                Подписаться
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-slate-800 text-center text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} Звуки Медитации. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
