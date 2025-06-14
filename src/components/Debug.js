import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Debug = ({ enabled = true }) => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const [orientation, setOrientation] = useState(window.screen.orientation?.type || 'unknown');
  const [scrollPosition, setScrollPosition] = useState(0);
  const [stats, setStats] = useState({
    renders: 0,
    orientationChanges: 0,
    resizes: 0,
    lastError: null
  });
  const location = useLocation();

  // Track renders
  useEffect(() => {
    if (!enabled) return;
    setStats(prev => ({ ...prev, renders: prev.renders + 1 }));
  }, [enabled]);

  // Track window resizes
  useEffect(() => {
    if (!enabled) return;

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
      setStats(prev => ({ ...prev, resizes: prev.resizes + 1 }));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [enabled]);

  // Track scroll position
  useEffect(() => {
    if (!enabled) return;

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [enabled]);

  // Track orientation changes
  useEffect(() => {
    if (!enabled) return;

    const handleOrientationChange = () => {
      setOrientation(window.screen.orientation?.type || 'unknown');
      setStats(prev => ({ ...prev, orientationChanges: prev.orientationChanges + 1 }));
      console.log('[Debug] Orientation changed:', window.screen.orientation?.type);
    };

    try {
      window.addEventListener('orientationchange', handleOrientationChange);
      if (window.screen.orientation) {
        window.screen.orientation.addEventListener('change', handleOrientationChange);
      }
    } catch (e) {
      console.error('[Debug] Error setting up orientation listeners:', e);
      setStats(prev => ({ ...prev, lastError: e.message }));
    }

    return () => {
      try {
        window.removeEventListener('orientationchange', handleOrientationChange);
        if (window.screen.orientation) {
          window.screen.orientation.removeEventListener('change', handleOrientationChange);
        }
      } catch (e) {
        console.error('[Debug] Error cleaning up orientation listeners:', e);
      }
    };
  }, [enabled]);

  // Log route changes
  useEffect(() => {
    if (!enabled) return;
    console.log('[Debug] Route changed:', location.pathname);
  }, [location, enabled]);

  // Error boundary
  useEffect(() => {
    if (!enabled) return;

    const originalConsoleError = console.error;
    console.error = (...args) => {
      setStats(prev => ({ ...prev, lastError: args.join(' ') }));
      originalConsoleError.apply(console, args);
    };

    return () => {
      console.error = originalConsoleError;
    };
  }, [enabled]);

  // Highlight elements with rotation or transformation issues
  useEffect(() => {
    if (!enabled) return;
    
    const checkElementRotation = () => {
      const elements = document.querySelectorAll('*');
      elements.forEach(element => {
        const style = window.getComputedStyle(element);
        const transform = style.transform || style.webkitTransform || style.mozTransform;
        
        if (transform && transform !== 'none' && !transform.includes('matrix(1, 0, 0, 1,')) {
          element.dataset.debugRotation = 'true';
          element.style.outline = '2px dashed red';
          console.log('[Debug] Element with rotation/transform:', element, transform);
        }
      });
    };
    
    // Run the check initially and after any resize
    checkElementRotation();
    window.addEventListener('resize', checkElementRotation);
    
    return () => {
      window.removeEventListener('resize', checkElementRotation);
      document.querySelectorAll('[data-debug-rotation="true"]').forEach(el => {
        delete el.dataset.debugRotation;
        el.style.outline = '';
      });
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: '0',
        right: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        color: '#4caf50',
        padding: '10px',
        fontSize: '12px',
        fontFamily: 'monospace',
        zIndex: 9999,
        maxHeight: '40vh',
        overflowY: 'auto',
        width: '300px',
        borderTopLeftRadius: '5px'
      }}
    >
      <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>🐞 DEBUG PANEL</div>
      <div>🖥️ Window: {windowSize.width}×{windowSize.height}px</div>
      <div>📱 Orientation: {orientation}</div>
      <div>📍 Route: {location.pathname}</div>
      <div>⬇️ Scroll: {scrollPosition}px</div>
      <div>🔄 Renders: {stats.renders}</div>
      <div>📲 Orientation Changes: {stats.orientationChanges}</div>
      <div>↔️ Resizes: {stats.resizes}</div>
      {stats.lastError && (
        <div style={{ color: '#ff5252' }}>
          ⚠️ Last Error: {stats.lastError.toString().substring(0, 100)}
          {stats.lastError.toString().length > 100 ? '...' : ''}
        </div>
      )}
      <div style={{ marginTop: '8px', display: 'flex', justifyContent: 'space-between' }}>
        <button 
          onClick={() => console.clear()}
          style={{ backgroundColor: '#333', color: 'white', border: 'none', padding: '3px 6px', borderRadius: '3px', cursor: 'pointer' }}
        >
          Clear Console
        </button>
        <button 
          onClick={() => { 
            document.querySelectorAll('*').forEach(el => {
              el.style.outline = '1px solid rgba(66, 133, 244, 0.25)';
              setTimeout(() => el.style.outline = '', 2000);
            });
          }}
          style={{ backgroundColor: '#333', color: 'white', border: 'none', padding: '3px 6px', borderRadius: '3px', cursor: 'pointer' }}
        >
          Show Bounds
        </button>
      </div>
    </div>
  );
};

export default Debug;
