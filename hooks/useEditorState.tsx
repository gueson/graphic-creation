'use client';

import { createContext, useContext, useReducer, ReactNode } from 'react';
import { EditorState, initialEditorState } from '@/lib/types';

type Action =
  | { type: 'SET_TEXT'; payload: string }
  | { type: 'SET_SIZE'; payload: EditorState['selectedSize'] }
  | { type: 'SET_CUSTOM_WIDTH'; payload: number }
  | { type: 'SET_CUSTOM_HEIGHT'; payload: number }
  | { type: 'SET_FONT'; payload: string }
  | { type: 'SET_FONT_SIZE'; payload: number }
  | { type: 'SET_FONT_COLOR'; payload: string }
  | { type: 'SET_BG_COLOR'; payload: string }
  | { type: 'SET_BG_IMAGE'; payload: string | null }
  | { type: 'SET_BG_MODE'; payload: EditorState['bgMode'] }
  | { type: 'SET_TEXT_ALIGN'; payload: EditorState['textAlign'] }
  | { type: 'SET_LINE_HEIGHT'; payload: number }
  | { type: 'UPDATE_WATERMARK'; payload: EditorState['watermark'] }
  | { type: 'RESTORE'; payload: EditorState };

function editorReducer(state: EditorState, action: Action): EditorState {
  switch (action.type) {
    case 'SET_TEXT':
      return { ...state, text: action.payload };
    case 'SET_SIZE':
      return { ...state, selectedSize: action.payload };
    case 'SET_CUSTOM_WIDTH':
      return { ...state, customWidth: action.payload };
    case 'SET_CUSTOM_HEIGHT':
      return { ...state, customHeight: action.payload };
    case 'SET_FONT':
      return { ...state, font: action.payload };
    case 'SET_FONT_SIZE':
      return { ...state, fontSize: action.payload };
    case 'SET_FONT_COLOR':
      return { ...state, fontColor: action.payload };
    case 'SET_BG_COLOR':
      return { ...state, bgColor: action.payload };
    case 'SET_BG_IMAGE':
      return { ...state, bgImage: action.payload };
    case 'SET_BG_MODE':
      return { ...state, bgMode: action.payload };
    case 'SET_TEXT_ALIGN':
      return { ...state, textAlign: action.payload };
    case 'SET_LINE_HEIGHT':
      return { ...state, lineHeight: action.payload };
    case 'UPDATE_WATERMARK':
      return { ...state, watermark: action.payload };
    case 'RESTORE':
      return action.payload;
    default:
      return state;
  }
}

interface EditorContextType {
  state: EditorState;
  dispatch: React.Dispatch<Action>;
}

const EditorContext = createContext<EditorContextType | undefined>(undefined);

export function EditorProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(editorReducer, initialEditorState);
  return (
    <EditorContext.Provider value={{ state, dispatch }}>
      {children}
    </EditorContext.Provider>
  );
}

export function useEditorState() {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error('useEditorState must be used within an EditorProvider');
  }
  return context;
}
