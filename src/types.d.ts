interface IntersectionObserverEntry {
  time: number;
  rootBounds: DOMRectReadOnly | null;
  boundingClientRect: DOMRectReadOnly;
  intersectionRect: DOMRectReadOnly;
  isIntersecting: boolean;
  intersectionRatio: number;
  target: Element;
}

interface IntersectionObserverInit {
  root?: Element | Document | null;
  rootMargin?: string;
  threshold?: number | number[];
}

declare class IntersectionObserver {
  constructor(
    callback: (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => void,
    options?: IntersectionObserverInit
  );
  
  observe(target: Element): void;
  unobserve(target: Element): void;
  disconnect(): void;
  takeRecords(): IntersectionObserverEntry[];
}