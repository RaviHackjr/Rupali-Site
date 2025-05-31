import { useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { soundManager } from "@/lib/soundManager";

export default function AudioControl() {
  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    setIsEnabled(soundManager.isAudioEnabled());
  }, []);

  const toggleAudio = () => {
    soundManager.toggle();
    setIsEnabled(soundManager.isAudioEnabled());
    
    if (soundManager.isAudioEnabled()) {
      soundManager.play('success');
    }
  };

  return (
    <Button
      onClick={toggleAudio}
      variant="ghost"
      size="sm"
      className="fixed top-4 right-4 z-50 bg-horror-black/80 border border-horror-red/30 text-gray-300 hover:text-white hover:bg-horror-red/50 backdrop-blur-sm"
      title={isEnabled ? "Disable Audio" : "Enable Audio"}
    >
      {isEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
    </Button>
  );
}