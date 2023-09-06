import { InitializableTrackingSoftware } from '../tracking.types';

class FacebookTrackingSoftware implements InitializableTrackingSoftware {
  private initialized = false;

  initialize(): void {
    this.initialized = true;
    // DO EXTRA LOGIC
  }

  trackEvent(eventName: string): void {
    if (this.initialized) {
      console.log('Facebook tracking event: ' + eventName);
    }
  }
}

export default FacebookTrackingSoftware;
