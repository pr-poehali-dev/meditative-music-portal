
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Calendar, BookOpen, Music } from "lucide-react";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-1/2">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">О музыканте</h1>
                <p className="text-xl mb-6 text-purple-200">
                  Создаю медитативную музыку, сочетающую древние традиции поющих чаш и современные электронные звуки 
                  для достижения глубоких состояний осознанности.
                </p>
              </div>
              <div className="md:w-1/2 relative">
                <div className="animate-float">
                  <img 
                    src="https://images.unsplash.com/photo-1529701870190-9ae4009b1447?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Музыкант за работой"
                    className="rounded-2xl shadow-lg max-w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-purple-500 rounded-full animate-pulse-gentle"></div>
                <div className="absolute -top-5 -right-5 w-16 h-16 bg-indigo-500 rounded-full animate-pulse-gentle" style={{animationDelay: "2s"}}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Biography */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Мой путь в музыке</h2>
              <div className="prose dark:prose-invert max-w-none">
                <p>
                  Мое путешествие в мир медитативной музыки началось более 15 лет назад, когда я впервые услышал звучание 
                  тибетских поющих чаш во время путешествия по Непалу. Их глубокие, резонирующие вибрации произвели 
                  на меня неизгладимое впечатление, и я решил изучить это древнее искусство.
                </p>
                <p>
                  Годы я провел, обучаясь у мастеров звуковой терапии в разных уголках мира – от монастырей в Тибете 
                  до современных центров звуковой терапии в Европе и Америке. Параллельно я развивал свои навыки в 
                  электронной музыке, экспериментируя с синтезаторами и цифровой обработкой звука.
                </p>
                <p>
                  В моих композициях я стремлюсь создать мост между древними практиками и современными звуковыми технологиями. 
                  Каждый трек – это не просто музыка, а инструмент для трансформации сознания, помогающий слушателям
                  найти внутренний покой и гармонию в современном быстром мире.
                </p>
                <p>
                  Сегодня я создаю музыку в своей студии, провожу звуковые сеансы по всему миру и делюсь знаниями 
                  через онлайн-курсы и мастер-классы. Моя миссия – сделать медитативные практики доступными для 
                  каждого, кто стремится к более осознанной и гармоничной жизни.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="py-16 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Фотогалерея</h2>
            
            <Tabs defaultValue="performances" className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="performances">Выступления</TabsTrigger>
                  <TabsTrigger value="studio">Студия</TabsTrigger>
                  <TabsTrigger value="travels">Путешествия</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="performances" className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Выступление 1" 
                  className="w-full h-64 object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Выступление 2" 
                  className="w-full h-64 object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Выступление 3" 
                  className="w-full h-64 object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Выступление 4" 
                  className="w-full h-64 object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Выступление 5" 
                  className="w-full h-64 object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Выступление 6" 
                  className="w-full h-64 object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                />
              </TabsContent>
              
              <TabsContent value="studio" className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Студия 1" 
                  className="w-full h-64 object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1598653222000-6b7b7a552625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Студия 2" 
                  className="w-full h-64 object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1520865390846-eb722d6f234e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Студия 3" 
                  className="w-full h-64 object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1519552928909-67ca7aef9265?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Студия 4" 
                  className="w-full h-64 object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1594623930572-300a3011d9ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Студия 5" 
                  className="w-full h-64 object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1520262454473-a1a82276a574?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Студия 6" 
                  className="w-full h-64 object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                />
              </TabsContent>
              
              <TabsContent value="travels" className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1517345438041-cf88a04b4689?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Путешествие 1" 
                  className="w-full h-64 object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1463693396561-3c85255222bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Путешествие 2" 
                  className="w-full h-64 object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1491497895121-1334fc14d8c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Путешествие 3" 
                  className="w-full h-64 object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1518050346340-aa2ec3bb424b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Путешествие 4" 
                  className="w-full h-64 object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1531201890834-8d9def29ab0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Путешествие 5" 
                  className="w-full h-64 object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1465778893808-9b3d1b443be4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Путешествие 6" 
                  className="w-full h-64 object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Чем я занимаюсь</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="rounded-full bg-purple-100 dark:bg-slate-800 w-16 h-16 flex items-center justify-center mb-4">
                  <Music className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Создание музыки</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Композиции для медитации, релаксации и глубокого погружения в состояние осознанности. 
                  Записи живых выступлений и студийные альбомы.
                </p>
                <Button variant="outline" className="w-full">Слушать музыку</Button>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="rounded-full bg-purple-100 dark:bg-slate-800 w-16 h-16 flex items-center justify-center mb-4">
                  <Calendar className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Живые выступления</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Концерты, звуковые ванны и медитации с поющими чашами в разных городах. 
                  Исцеляющие сеансы и групповые практики.
                </p>
                <Button variant="outline" className="w-full">Календарь событий</Button>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="rounded-full bg-purple-100 dark:bg-slate-800 w-16 h-16 flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Обучение</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Курсы по звуковой терапии, медитации и работе с поющими чашами. 
                  Мастер-классы онлайн и офлайн, индивидуальные консультации.
                </p>
                <Button variant="outline" className="w-full">Узнать о курсах</Button>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
