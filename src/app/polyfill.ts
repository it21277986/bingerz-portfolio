// This file must be imported first to polyfill localStorage before any other code runs
if (typeof window === 'undefined') {
  // Create a minimal localStorage mock for SSR
  const mockStorage: Storage = {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {},
    clear: () => {},
    get length() {
      return 0
    },
    key: () => null,
  }

  // Polyfill global localStorage for SSR
  if (typeof global !== 'undefined') {
    (global as { localStorage?: Storage }).localStorage = mockStorage
  }
}

export {}
