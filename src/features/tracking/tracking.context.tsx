import { createContext, FC, ReactNode, useContext, useMemo, useState } from 'react';
import { FacebookTrackingSoftware, GoogleTrackingSoftware } from './software';
import { InitializableTrackingSoftware, TrackingSoftware } from './tracking.types';
import AmplitudeLiskovTrackingSoftware from './software/amplitude.liskov';

export interface TrackingState {
  trackingSoftwares: TrackingSoftware[];
    trackEvent: (eventName: string, location: string) => void;
}

export interface TrackingProviderProps {
  children: ReactNode
}

export const TrackingContext = createContext<TrackingState | undefined>(undefined);

export const TrackingProvider: FC<TrackingProviderProps> = ({ children }) => {
  const [trackingSoftwares] = useState([
    new AmplitudeLiskovTrackingSoftware(),
    new FacebookTrackingSoftware(),
    new GoogleTrackingSoftware()
  ]);

  const value = useMemo(
    () => ({
      trackingSoftwares,
        trackEvent: (eventName: string, location: string) =>
          trackingSoftwares.forEach((trackingSoftware) => {
            if ('initialize' in trackingSoftware) {
              (trackingSoftware as InitializableTrackingSoftware).initialize();
            }
            trackingSoftware.trackEvent(eventName, location)
          })
    }),
    [trackingSoftwares]
  );

  return <TrackingContext.Provider value={value}>{children}</TrackingContext.Provider>;
};

export const useTracking = (): TrackingState => {
  const context = useContext(TrackingContext);
  if (!context) {
    throw new Error('useTracking must be used within a TrackingProvider');
  }
  return context;
};
