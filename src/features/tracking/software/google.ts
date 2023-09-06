import { InitializableTrackingSoftware } from '../tracking.types';

class GoogleTrackingSoftware implements InitializableTrackingSoftware {
  trackEvent(eventName: string, location: string): void {
    console.log('Google tracking event: ' + eventName + ' from location: ' + location);
  }
  
  initialize(): void {
    // DO NOTHING
  }
}

export default GoogleTrackingSoftware;
