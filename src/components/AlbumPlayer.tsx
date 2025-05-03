
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { 
  Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, 
  Repeat, Shuffle, MoreHorizontal 
} from "lucide-react";
import { Card } from "@/components/ui/card";

interface Track {
  id: string;
  title: string;
  duration: number;
  audioSrc: string;
}

interface AlbumPlayerProps {
  title: string;
  coverImage: string;
  tracks: Track[];
}

const AlbumPlayer = ({ title, coverImage, tracks }: AlbumPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentTrack = tracks[currentTrackIndex];

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSliderChange = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0];
      setCurrentTime(value[0]);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (value: number[]) => {
    if (audioRef.current) {
      const newVolume = value[0];
      audioRef.current.volume = newVolume;
      setVolume(newVolume);
      if (newVolume === 0) {
        setIsMuted(true);
      } else if (isMuted) {
        setIsMuted(false);
      }
    }
  };

  const playNextTrack = () => {
    let nextIndex;
    if (isShuffle) {
      nextIndex = Math.floor(Math.random() * tracks.length);
    } else {
      nextIndex = (currentTrackIndex + 1) % tracks.length;
    }
    setCurrentTrackIndex(nextIndex);
    setCurrentTime(0);
    
    // After changing the track, we need to play it
    if (isPlaying && audioRef.current) {
      // Need to use setTimeout because the src needs time to update
      setTimeout(() => {
        if (audioRef.current) audioRef.current.play();
      }, 0);
    }
  };

  const playPrevTrack = () => {
    let prevIndex;
    if (currentTime > 3) {
      // If current time is more than 3 seconds, restart the current track
      if (audioRef.current) audioRef.current.currentTime = 0;
      return;
    } else if (isShuffle) {
      prevIndex = Math.floor(Math.random() * tracks.length);
    } else {
      prevIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    }
    setCurrentTrackIndex(prevIndex);
    setCurrentTime(0);
    
    if (isPlaying && audioRef.current) {
      setTimeout(() => {
        if (audioRef.current) audioRef.current.play();
      }, 0);
    }
  };

  const handleTrackEnd = () => {
    if (isRepeat) {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
    } else {
      playNextTrack();
    }
  };

  const playSpecificTrack = (index: number) => {
    setCurrentTrackIndex(index);
    setCurrentTime(0);
    setIsPlaying(true);
    
    setTimeout(() => {
      if (audioRef.current) audioRef.current.play();
    }, 0);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <Card className="p-6 w-full max-w-3xl mx-auto bg-white dark:bg-slate-800 shadow-lg rounded-lg overflow-hidden">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <img 
            src={coverImage} 
            alt={title}
            className="w-full aspect-square object-cover rounded-lg shadow-md"
          />
          <h2 className="text-xl font-bold mt-3">{title}</h2>
        </div>
        
        <div className="md:w-2/3">
          <div className="mb-6">
            <audio
              ref={audioRef}
              src={currentTrack.audioSrc}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={handleTrackEnd}
              className="hidden"
            />
            
            <div className="flex justify-between mb-1">
              <span className="text-sm text-slate-500">{formatTime(currentTime)}</span>
              <span className="text-sm text-slate-500">{formatTime(duration)}</span>
            </div>
            
            <Slider
              value={[currentTime]}
              max={duration || 100}
              step={0.1}
              onValueChange={handleSliderChange}
              className="mb-4"
            />
            
            <div className="flex items-center justify-between">
              <Button
                size="icon"
                variant="ghost"
                className="text-slate-600 dark:text-slate-300 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-700"
                onClick={() => setIsShuffle(!isShuffle)}
              >
                <Shuffle size={18} className={isShuffle ? "text-primary" : ""} />
              </Button>
              
              <Button
                size="icon"
                variant="ghost"
                className="text-slate-600 dark:text-slate-300 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-700"
                onClick={playPrevTrack}
              >
                <SkipBack size={24} />
              </Button>
              
              <Button
                size="icon"
                className="bg-primary hover:bg-primary-dark text-white rounded-full h-12 w-12 flex items-center justify-center"
                onClick={togglePlay}
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              </Button>
              
              <Button
                size="icon"
                variant="ghost"
                className="text-slate-600 dark:text-slate-300 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-700"
                onClick={playNextTrack}
              >
                <SkipForward size={24} />
              </Button>
              
              <Button
                size="icon"
                variant="ghost"
                className="text-slate-600 dark:text-slate-300 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-700"
                onClick={() => setIsRepeat(!isRepeat)}
              >
                <Repeat size={18} className={isRepeat ? "text-primary" : ""} />
              </Button>
            </div>
            
            <div className="flex items-center mt-4 gap-2">
              <Button
                size="icon"
                variant="ghost"
                className="text-slate-600 dark:text-slate-300"
                onClick={toggleMute}
              >
                {isMuted || volume === 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </Button>
              <Slider
                value={[isMuted ? 0 : volume]}
                max={1}
                step={0.01}
                onValueChange={handleVolumeChange}
                className="w-32"
              />
            </div>
          </div>
          
          <div className="mt-4">
            <h3 className="font-semibold mb-2 text-slate-700 dark:text-slate-200">Треки</h3>
            <div className="space-y-1 max-h-60 overflow-y-auto pr-2">
              {tracks.map((track, index) => (
                <div 
                  key={track.id}
                  className={`flex items-center justify-between p-2 rounded-md cursor-pointer ${
                    currentTrackIndex === index 
                      ? "bg-purple-100 dark:bg-purple-900/30" 
                      : "hover:bg-slate-100 dark:hover:bg-slate-700"
                  }`}
                  onClick={() => playSpecificTrack(index)}
                >
                  <div className="flex items-center">
                    <div className="w-6 text-center text-slate-500">
                      {currentTrackIndex === index && isPlaying ? 
                        <div className="w-4 h-4 relative">
                          <span className="absolute inset-0 flex items-center justify-center animate-pulse">
                            ♪
                          </span>
                        </div> : 
                        index + 1}
                    </div>
                    <span className="ml-3 text-sm font-medium">{track.title}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xs text-slate-500">{formatTime(track.duration)}</span>
                    <Button variant="ghost" size="icon" className="h-8 w-8 ml-1 text-slate-500">
                      <MoreHorizontal size={16} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AlbumPlayer;
