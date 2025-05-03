
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { addDays, format, isSameDay } from "date-fns";
import { CalendarIcon, MapPin, Clock, Users } from "lucide-react";
import { ru } from "date-fns/locale";

// Определение типов для событий
interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  time: string;
  location: string;
  price: string;
  capacity: number;
  registeredCount: number;
  imageUrl: string;
}

const Events = () => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(today);
  const [isRegisterDialogOpen, setIsRegisterDialogOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [registrationForm, setRegistrationForm] = useState({
    name: "",
    email: "",
    phone: "",
    participants: 1
  });

  // Примерные данные о событиях
  const events: Event[] = [
    {
      id: "event1",
      title: "Звуковая ванна поющих чаш",
      description: "Глубокое погружение в звуки поющих чаш для медитации и релаксации. Во время сеанса вы лежите в удобной позе, а звуковые вибрации окутывают все ваше тело, создавая эффект звуковой ванны.",
      date: today,
      time: "19:00 - 21:00",
      location: "Центр медитации «Внутренний мир», Москва",
      price: "2000 ₽",
      capacity: 15,
      registeredCount: 8,
      imageUrl: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "event2",
      title: "Концерт электронной медитативной музыки",
      description: "Живое выступление с уникальным сочетанием звуков поющих чаш и электронной амбиентной музыки. Погрузитесь в звуковой ландшафт, способствующий глубокой медитации и созерцанию.",
      date: addDays(today, 5),
      time: "20:00 - 22:30",
      location: "Культурный центр «Гармония», Санкт-Петербург",
      price: "2500 ₽",
      capacity: 40,
      registeredCount: 22,
      imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "event3",
      title: "Мастер-класс по медитации с поющими чашами",
      description: "Научитесь основам работы с поющими чашами для собственной практики. На мастер-классе вы познакомитесь с техниками извлечения звука, способами его применения для медитации и самоисцеления.",
      date: addDays(today, 12),
      time: "11:00 - 14:00",
      location: "Студия йоги «Прана», Москва",
      price: "3500 ₽",
      capacity: 10,
      registeredCount: 4,
      imageUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const eventsForSelectedDate = events.filter(event => 
    selectedDate && isSameDay(event.date, selectedDate)
  );

  const highlightedDates = events.map(event => event.date);

  const handleRegisterClick = (event: Event) => {
    setSelectedEvent(event);
    setIsRegisterDialogOpen(true);
  };

  const handleRegisterSubmit = () => {
    // В реальном приложении здесь будет отправка данных на сервер
    alert(`Спасибо за регистрацию на событие "${selectedEvent?.title}"! Мы отправили подтверждение на вашу почту.`);
    setIsRegisterDialogOpen(false);
    setRegistrationForm({
      name: "",
      email: "",
      phone: "",
      participants: 1
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegistrationForm(prev => ({
      ...prev,
      [name]: name === "participants" ? parseInt(value) || 1 : value
    }));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 py-12 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">События и мероприятия</h1>
            <p className="text-xl text-purple-200 max-w-3xl">
              Присоединяйтесь к живым выступлениям, звуковым ваннам и мастер-классам по медитации.
              Испытайте силу звука и вибраций в кругу единомышленников.
            </p>
          </div>
        </section>
        
        {/* Calendar Section */}
        <section className="py-12 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1 bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <CalendarIcon className="mr-2 h-5 w-5 text-purple-600" />
                  Календарь событий
                </h2>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md"
                  locale={ru}
                  modifiersStyles={{
                    selected: {
                      backgroundColor: "#9b87f5",
                      color: "white"
                    }
                  }}
                  modifiers={{
                    highlighted: (date) => 
                      highlightedDates.some(highlightedDate => 
                        isSameDay(date, highlightedDate)
                      )
                  }}
                  styles={{
                    day_highlighted: { 
                      border: "2px solid #9b87f5",
                      fontWeight: "bold"
                    }
                  }}
                />
                <div className="mt-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-purple-600 rounded-full mr-2"></div>
                      <span>Выбранная дата</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 border-2 border-purple-600 rounded-full mr-2"></div>
                      <span>Есть события</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <h2 className="text-2xl font-semibold mb-4">
                  {selectedDate 
                    ? `События на ${format(selectedDate, "d MMMM yyyy", { locale: ru })}`
                    : "Все предстоящие события"
                  }
                </h2>
                
                {eventsForSelectedDate.length > 0 ? (
                  <div className="space-y-6">
                    {eventsForSelectedDate.map(event => (
                      <Card key={event.id} className="p-0 overflow-hidden">
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-1/3 h-48 md:h-auto">
                            <img 
                              src={event.imageUrl} 
                              alt={event.title} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="md:w-2/3 p-6">
                            <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                            <div className="flex flex-wrap gap-2 mb-3">
                              <Badge variant="outline" className="flex items-center gap-1 text-purple-600 border-purple-600">
                                <Clock className="h-3 w-3" /> {event.time}
                              </Badge>
                              <Badge variant="outline" className="flex items-center gap-1 text-purple-600 border-purple-600">
                                <MapPin className="h-3 w-3" /> {event.location}
                              </Badge>
                              <Badge variant="outline" className="flex items-center gap-1 text-purple-600 border-purple-600">
                                <Users className="h-3 w-3" /> {event.registeredCount}/{event.capacity}
                              </Badge>
                            </div>
                            <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                              {event.description}
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="font-semibold text-purple-600">{event.price}</span>
                              <Button 
                                onClick={() => handleRegisterClick(event)}
                                className="bg-purple-600 hover:bg-purple-700"
                              >
                                Регистрация
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-8 text-center">
                    <h3 className="text-xl font-medium mb-2">Нет событий на выбранную дату</h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      Попробуйте выбрать другую дату или посмотрите все предстоящие события
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => setSelectedDate(undefined)}
                      className="border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                    >
                      Показать все события
                    </Button>
                  </div>
                )}
                
                {!selectedDate && (
                  <div className="space-y-6">
                    {events.map(event => (
                      <Card key={event.id} className="p-0 overflow-hidden">
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-1/3 h-48 md:h-auto">
                            <img 
                              src={event.imageUrl} 
                              alt={event.title} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="md:w-2/3 p-6">
                            <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                            <div className="flex flex-wrap gap-2 mb-3">
                              <Badge variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                                {format(event.date, "d MMMM", { locale: ru })}
                              </Badge>
                              <Badge variant="outline" className="flex items-center gap-1 text-purple-600 border-purple-600">
                                <Clock className="h-3 w-3" /> {event.time}
                              </Badge>
                              <Badge variant="outline" className="flex items-center gap-1 text-purple-600 border-purple-600">
                                <MapPin className="h-3 w-3" /> {event.location}
                              </Badge>
                              <Badge variant="outline" className="flex items-center gap-1 text-purple-600 border-purple-600">
                                <Users className="h-3 w-3" /> {event.registeredCount}/{event.capacity}
                              </Badge>
                            </div>
                            <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                              {event.description}
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="font-semibold text-purple-600">{event.price}</span>
                              <Button 
                                onClick={() => handleRegisterClick(event)}
                                className="bg-purple-600 hover:bg-purple-700"
                              >
                                Регистрация
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* Upcoming Events Map */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Карта предстоящих событий</h2>
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden p-4">
              <div className="aspect-video relative">
                <img 
                  src="https://images.unsplash.com/photo-1569336415962-a4bd9f69c07b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Карта событий" 
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center bg-black/60 p-6 rounded-lg text-white max-w-md">
                    <h3 className="text-xl font-semibold mb-2">Интерактивная карта событий</h3>
                    <p className="mb-4">Скоро здесь появится интерактивная карта с отмеченными местами проведения всех мероприятий</p>
                    <Button variant="outline" className="border-white text-white hover:bg-white/10">
                      Узнать больше
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* Registration Dialog */}
      <Dialog open={isRegisterDialogOpen} onOpenChange={setIsRegisterDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Регистрация на событие</DialogTitle>
            <DialogDescription>
              {selectedEvent?.title} - {selectedEvent?.date && format(selectedEvent.date, "d MMMM yyyy", { locale: ru })}, {selectedEvent?.time}
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Имя</Label>
              <Input 
                id="name" 
                name="name" 
                value={registrationForm.name} 
                onChange={handleInputChange} 
                placeholder="Введите ваше имя"
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                name="email"
                type="email" 
                value={registrationForm.email} 
                onChange={handleInputChange} 
                placeholder="email@example.com"
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="phone">Телефон</Label>
              <Input 
                id="phone" 
                name="phone"
                value={registrationForm.phone} 
                onChange={handleInputChange} 
                placeholder="+7 (___) ___-__-__"
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="participants">Количество участников</Label>
              <Input 
                id="participants" 
                name="participants"
                type="number" 
                min="1"
                max={selectedEvent ? selectedEvent.capacity - selectedEvent.registeredCount : 1}
                value={registrationForm.participants} 
                onChange={handleInputChange} 
              />
            </div>
            
            <Separator />
            
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-slate-500">Стоимость:</p>
                <p className="font-semibold text-purple-600">
                  {selectedEvent?.price && registrationForm.participants 
                    ? `${parseInt(selectedEvent.price) * registrationForm.participants} ₽` 
                    : selectedEvent?.price
                  }
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Свободных мест:</p>
                <p className="font-semibold">
                  {selectedEvent 
                    ? selectedEvent.capacity - selectedEvent.registeredCount 
                    : "—"
                  }
                </p>
              </div>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsRegisterDialogOpen(false)}>
              Отмена
            </Button>
            <Button 
              onClick={handleRegisterSubmit} 
              className="bg-purple-600 hover:bg-purple-700"
              disabled={!registrationForm.name || !registrationForm.email}
            >
              Зарегистрироваться
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Events;
