import { renderHook } from '@testing-library/react';
import useDocumentTitle from './useDocumentTitle';

describe('useDocumentTitle', () => {
  test('should set the document title', () => {
    renderHook(() => useDocumentTitle('Test Title'));
    expect(document.title).toBe('Test Title');
  });

  test('should update the document title', () => {
    const { rerender } = renderHook((title:string) => useDocumentTitle(title));
    rerender('Updated Test Title');
    expect(document.title).toBe('Updated Test Title');
  });
});