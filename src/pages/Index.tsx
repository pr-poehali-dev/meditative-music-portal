
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AudioPlayer from "@/components/ui/AudioPlayer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Music, BookOpen, ShoppingBag } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-1/2">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Звуки для вашей души</h1>
                <p className="text-xl mb-6 text-purple-200">
                  Погрузитесь в волшебный мир медитативной музыки поющих чаш и электронных звуков, 
                  созданных для релаксации, концентрации и внутреннего покоя.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-white text-purple-900 hover:bg-purple-100">
                    Слушать музыку
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    О музыканте
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 relative">
                <div className="animate-float">
                  <img 
                    src="https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Поющие чаши"
                    className="rounded-2xl shadow-lg max-w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-purple-500 rounded-full animate-pulse-gentle"></div>
                <div className="absolute -top-5 -right-5 w-16 h-16 bg-indigo-500 rounded-full animate-pulse-gentle" style={{animationDelay: "2s"}}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Music */}
        <section className="py-16 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10">Послушайте музыку</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AudioPlayer 
                audioSrc="https://example.com/meditation1.mp3" 
                title="Медитация для утреннего пробуждения" 
              />
              <AudioPlayer 
                audioSrc="https://example.com/meditation2.mp3" 
                title="Звуки поющих чаш для глубокой релаксации" 
              />
              <AudioPlayer 
                audioSrc="https://example.com/meditation3.mp3" 
                title="Электронная амбиент медитация" 
              />
            </div>
            <div className="text-center mt-10">
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Music className="mr-2 h-4 w-4" />
                Все композиции
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10">Что я предлагаю</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="rounded-full bg-purple-100 dark:bg-slate-800 w-16 h-16 flex items-center justify-center mb-4">
                  <Calendar className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Мероприятия</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Живые выступления с поющими чашами, групповые медитации и звуковые ванны для полного погружения.
                </p>
                <Button variant="outline" className="w-full">Расписание</Button>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="rounded-full bg-purple-100 dark:bg-slate-800 w-16 h-16 flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Курсы медитации</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Обучающие программы по медитации, работе с поющими чашами и основам осознанности в повседневной жизни.
                </p>
                <Button variant="outline" className="w-full">Подробнее</Button>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="rounded-full bg-purple-100 dark:bg-slate-800 w-16 h-16 flex items-center justify-center mb-4">
                  <ShoppingBag className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Магазин</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Приобретите поющие чаши, мерчандайз с авторскими рисунками и аксессуары для медитации.
                </p>
                <Button variant="outline" className="w-full">В магазин</Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Blog Preview */}
        <section className="py-16 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10">Последние записи блога</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="overflow-hidden h-full">
                <img 
                  src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Запись блога"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">История поющих чаш: от древних традиций до современности</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                    Узнайте об удивительном путешествии поющих чаш через века и как их звук влияет на наше сознание.
                  </p>
                  <Button variant="link" className="p-0 text-purple-600 dark:text-purple-400">Читать далее</Button>
                </div>
              </Card>
              
              <Card className="overflow-hidden h-full">
                <img 
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Запись блога"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">5 простых медитативных практик для начинающих</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                    Простые техники, которые помогут вам начать свой путь к осознанности и внутреннему покою.
                  </p>
                  <Button variant="link" className="p-0 text-purple-600 dark:text-purple-400">Читать далее</Button>
                </div>
              </Card>
              
              <Card className="overflow-hidden h-full">
                <img 
                  src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Запись блога"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Как электронная музыка влияет на состояние сознания</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                    Исследование взаимосвязи между современными звуковыми технологиями и древними медитативными практиками.
                  </p>
                  <Button variant="link" className="p-0 text-purple-600 dark:text-purple-400">Читать далее</Button>
                </div>
              </Card>
            </div>
            <div className="text-center mt-10">
              <Button className="bg-purple-600 hover:bg-purple-700">Все записи</Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
