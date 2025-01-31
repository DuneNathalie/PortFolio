declare module 'react-medium-image-zoom' {
    import { CSSProperties, ReactNode, ReactElement } from 'react';
  
    interface ZoomContentProps {
      classDialog?: string;
      style?: CSSProperties;
      img: ReactElement;
      buttonUnzoom: ReactElement<HTMLButtonElement>;
      modalState: string;
      onUnzoom: () => void;
      IconZoom?: ElementType,
    }
  
    interface ZoomProps {
      IconZoom?: ElementType,
      zoomMargin?: number;
      ZoomContent ?: (props: ZoomContentProps) => ReactNode;
      children: ReactNode;
    }
  
    const Zoom: React.FC<ZoomProps>;
  
    export default Zoom;
  }
  