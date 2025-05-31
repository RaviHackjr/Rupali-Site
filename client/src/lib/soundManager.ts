class SoundManager {
  private audioContext: AudioContext | null = null;
  private isEnabled: boolean = true;
  private volume: number = 0.2;
  private userInteracted: boolean = false;

  constructor() {
    // Initialize audio context on first user interaction
    this.setupAudioContext();
  }

  private setupAudioContext() {
    const initAudio = () => {
      if (!this.audioContext && !this.userInteracted) {
        try {
          this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
          this.userInteracted = true;
        } catch (error) {
          console.warn('Audio context not supported');
        }
      }
    };

    // Setup on first user interaction
    const events = ['click', 'touchstart', 'keydown'];
    events.forEach(event => {
      document.addEventListener(event, initAudio, { once: true });
    });
  }

  private createHorrorTone(frequency: number, duration: number, waveType: OscillatorType = 'sine') {
    if (!this.audioContext || !this.isEnabled) return;

    try {
      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();
      
      oscillator.type = waveType;
      oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
      
      // Horror effect: slight frequency modulation
      oscillator.frequency.exponentialRampToValueAtTime(
        frequency * 0.8, 
        this.audioContext.currentTime + duration
      );
      
      gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(this.volume, this.audioContext.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + duration);
      
      oscillator.connect(gainNode);
      gainNode.connect(this.audioContext.destination);
      
      oscillator.start(this.audioContext.currentTime);
      oscillator.stop(this.audioContext.currentTime + duration);
    } catch (error) {
      // Ignore audio errors
    }
  }

  play(soundName: string) {
    if (!this.audioContext || !this.isEnabled || !this.userInteracted) return;

    switch (soundName) {
      case 'buttonHover':
        this.createHorrorTone(200, 0.1, 'sine');
        break;
      case 'buttonClick':
        this.createHorrorTone(150, 0.2, 'square');
        break;
      case 'menuOpen':
        this.createHorrorTone(100, 0.3, 'sawtooth');
        break;
      case 'menuClose':
        this.createHorrorTone(80, 0.25, 'triangle');
        break;
      case 'warning':
        this.createHorrorTone(300, 0.4, 'square');
        break;
      case 'success':
        this.createHorrorTone(120, 0.3, 'sine');
        break;
      case 'error':
        this.createHorrorTone(60, 0.5, 'sawtooth');
        break;
      case 'heartbeat':
        this.createHeartbeat();
        break;
    }
  }

  private createHeartbeat() {
    if (!this.audioContext || !this.isEnabled) return;

    // Create two quick beats
    this.createHorrorTone(80, 0.1, 'sine');
    setTimeout(() => {
      this.createHorrorTone(80, 0.1, 'sine');
    }, 150);
  }

  setVolume(volume: number) {
    this.volume = Math.max(0, Math.min(1, volume));
  }

  toggle() {
    this.isEnabled = !this.isEnabled;
  }

  isAudioEnabled(): boolean {
    return this.isEnabled;
  }
}

export const soundManager = new SoundManager();