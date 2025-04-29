"use client";

import React, { useEffect, useRef } from "react";
import DefaultProps from "@/utils/DefaultProps";

type ObserverDataType = {
  animation: string; // The CSS animation class to be applied
  options?: {
    root: HTMLElement | any; // The root element for the IntersectionObserver (default: viewport)
    rootMargin: string; // Margin around the root element for the observer
    threshold: number; // Intersection ratio to trigger the callback (0-1)
  }; // Observer options for IntersectionObserver
  delay?: number; // Optional delay in milliseconds before triggering the animation
}; // ObserverDataType

/**
 * Observer Component
 * Observes the intersection of a DOM element and applies animations or effects when it enters the viewport.
 * @param {DefaultProps<ObserverDataType>} props - The data and children passed to the component.
 * @returns A wrapper `div` element with the specified animation applied.*/
function Observer({ data, children }: DefaultProps<ObserverDataType>) {
  // Ref for managing the IntersectionObserver instance
  const observerRef = useRef<IntersectionObserver | any>(null);
  // Ref for the DOM element being observed
  const elementRef = useRef<HTMLElement | any>(null);
  // Effect to initialize and handle the IntersectionObserver lifecycle
  useEffect(() => {
    // Exit early if required data or children are missing, or the ref isn't assigned
    if (!data || !children || !elementRef.current) return;
    /** effectHandler:
     * Handles the animation effect when the observed element enters the viewport.
     * @returns {Function} Cleanup function to disconnect the observer.*/
    const effectHandler = (): (() => any) => {
      const element: HTMLElement | any = elementRef.current; // Access the observed element
      if (!element) return () => observerRef.current.disconnect(); // Disconnect if element is null
      element.style.animationPlayState = "running"; // Start the animation
      return () => observerRef.current.disconnect(); // Cleanup on unmount
    }; // effectHandler
    /** IntersectionObserver callback to handle intersection events.
     * @param {Array<any>} entries - The list of observed entries (elements being watched).*/
    const intersectHandler = (entries: Array<any>): void => {
      entries.forEach((entry) => {
        // Check if the element is in the viewport
        if (entry.isIntersecting) {
          // Apply the animation with optional delay
          if (data.delay) setTimeout(effectHandler, data.delay);
          else effectHandler();
        } // if
      }); // forEach
    }; // intersectHandler
    // Observer options, with sensible defaults if not provided
    const options = data.options
      ? data.options
      : {
          root: null,
          rootMargin: "0px",
          threshold: 0.5,
        }; // options
    // Initialize IntersectionObserver with the handler and options
    observerRef.current = new IntersectionObserver(intersectHandler, options);
    // Start observing the referenced element
    observerRef.current.observe(elementRef.current);
  }, []); // Run once on mount
  // Exit early if data or children are missing
  if (!data || !children) return <></>;
  // Render the observed element with the animation class
  return (
    <div ref={elementRef} className={data.animation}>
      {children}
    </div>
  );
} // Observer
export default Observer;
