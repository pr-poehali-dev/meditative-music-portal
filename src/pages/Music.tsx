
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AlbumPlayer from "@/components/AlbumPlayer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample data
const albums = [
  {
    id: "album1",
    title: "Горные чаши: Пробуждение",
    coverImage: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    year: "2024",
    description: "Медитативный альбом с сочетанием звуков традиционных тибетских поющих чаш и электронных амбиентных текстур.",
    tracks: [
      { id: "track1", title: "Рассвет сознания", duration: 420, audioSrc: "https://example.com/track1.mp3" },
      { id: "track2", title: "Горная река", duration: 380, audioSrc: "https://example.com/track2.mp3" },
      { id: "track3", title: "Звездное небо", duration: 456, audioSrc: "https://example.com/track3.mp3" },
      { id: "track4", title: "Шепот леса", duration: 312, audioSrc: "https://example.com/track4.mp3" },
      { id: "track5", title: "Внутренний покой", duration: 521, audioSrc: "https://example.com/track5.mp3" }
    ]
  },
  {
    id: "album2",
    title: "Электронный дзен",
    coverImage: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    year: "2023",
    description: "Коллекция треков, сочетающих минималистичную электронику с глубокими медитативными ритмами для глубокой релаксации.",
    tracks: [
      { id: "track6", title: "Цифровой поток", duration: 367, audioSrc: "https://example.com/track6.mp3" },
      { id: "track7", title: "Квантовое сознание", duration: 419, audioSrc: "https://example.com/track7.mp3" },
      { id: "track8", title: "Электронная нирвана", duration: 486, audioSrc: "https://example.com/track8.mp3" },
      { id: "track9", title: "Синтетическая медитация", duration: 328, audioSrc: "https://example.com/track9.mp3" }
    ]
  },
  {
    id: "album3",
    title: "Звуковые ванны",
    coverImage: "https://images.unsplash.com/photo-1629143482273-c80b5e2cbef3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    year: "2022",
    description: "Запись живого выступления с поющими чашами, гонгами и другими акустическими инструментами для глубокого погружения.",
    tracks: [
      { id: "track10", title: "Погружение", duration: 620, audioSrc: "https://example.com/track10.mp3" },
      { id: "track11", title: "Волны сознания", duration: 580, audioSrc: "https://example.com/track11.mp3" },
      { id: "track12", title: "Исцеляющие вибрации", duration: 720, audioSrc: "https://example.com/track12.mp3" }
    ]
  }
];

// Sample playlists
const playlists = [
  {
    id: "playlist1",
    title: "Для утренней медитации",
    tracks: albums.flatMap(album => album.tracks.filter((_, i) => i % 3 === 0))
  },
  {
    id: "playlist2",
    title: "Для глубокого сна",
    tracks: albums.flatMap(album => album.tracks.filter((_, i) => i % 3 === 1))
  },
  {
    id: "playlist3",
    title: "Для концентрации",
    tracks: albums.flatMap(album => album.tracks.filter((_, i) => i % 3 === 2))
  }
];

const Music = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(albums[0]);
  const [selectedPlaylist, setSelectedPlaylist] = useState(playlists[0]);
  const [currentCollection, setCurrentCollection] = useState<"albums" | "playlists">("albums");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 py-12 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Музыка для медитации</h1>
            <p className="text-xl text-purple-200 max-w-3xl">
              Погрузитесь в атмосферу звуков поющих чаш и электронной медитативной музыки. 
              Выбирайте из альбомов и плейлистов для разных практик и состояний.
            </p>
          </div>
        </section>
        
        {/* Music Player Section */}
        <section className="py-12 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="albums" className="mb-12">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger 
                    value="albums" 
                    onClick={() => setCurrentCollection("albums")}
                  >
                    Альбомы
                  </TabsTrigger>
                  <TabsTrigger 
                    value="playlists" 
                    onClick={() => setCurrentCollection("playlists")}
                  >
                    Плейлисты
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="albums" className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {albums.map(album => (
                    <div 
                      key={album.id} 
                      className={`bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden cursor-pointer 
                        hover:shadow-lg transition-shadow
                        ${selectedAlbum.id === album.id ? 'ring-2 ring-purple-500' : ''}
                      `}
                      onClick={() => setSelectedAlbum(album)}
                    >
                      <img 
                        src={album.coverImage} 
                        alt={album.title} 
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-semibold">{album.title}</h3>
                        <p className="text-sm text-slate-500 mb-2">{album.year} • {album.tracks.length} треков</p>
                        <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2">{album.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <AlbumPlayer 
                    title={selectedAlbum.title}
                    coverImage={selectedAlbum.coverImage}
                    tracks={selectedAlbum.tracks}
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="playlists" className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {playlists.map(playlist => (
                    <div 
                      key={playlist.id} 
                      className={`bg-white dark:bg-slate-800 rounded-lg shadow-md p-4 cursor-pointer 
                        hover:shadow-lg transition-shadow
                        ${selectedPlaylist.id === playlist.id ? 'ring-2 ring-purple-500' : ''}
                      `}
                      onClick={() => setSelectedPlaylist(playlist)}
                    >
                      <h3 className="text-lg font-semibold">{playlist.title}</h3>
                      <p className="text-sm text-slate-500 mb-4">{playlist.tracks.length} треков</p>
                      <Button className="w-full bg-purple-600 hover:bg-purple-700">Слушать</Button>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <AlbumPlayer 
                    title={selectedPlaylist.title}
                    coverImage="https://images.unsplash.com/photo-1525362081669-2b476bb628c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    tracks={selectedPlaylist.tracks}
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Upcoming Releases */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Скоро в релизе</h2>
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1619983081563-430f63602de6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Новый альбом" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="inline-block bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium mb-4">
                    Скоро
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Кристаллические гармонии</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6">
                    Новый альбом, объединяющий звучание кварцевых поющих чаш с современными электронными композициями,
                    создающий уникальный звуковой ландшафт для глубокой медитации и путешествий сознания.
                  </p>
                  <div className="flex items-center gap-4">
                    <Button variant="outline" className="bg-transparent border-purple-600 text-purple-600 hover:bg-purple-50 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-900/20">
                      Предзаказ
                    </Button>
                    <p className="text-sm text-slate-500">Ожидается: Июнь 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Music;
