export interface EditorState {
  text: string;
  selectedSize: {
    ratio: string;
    width: number;
    height: number;
  };
  customWidth: number;
  customHeight: number;
  font: string;
  fontSize: number;
  fontColor: string;
  bgColor: string;
  bgImage: string | null;
  bgMode: 'cover' | 'contain' | 'repeat';
  textAlign: 'left' | 'center' | 'right';
  lineHeight: number;
  watermark: {
    enabled: boolean;
    text: string;
    position: 'top-left' | 'top-center' | 'top-right' | 'center-left' | 'center' | 'center-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
    opacity: number;
    fontSize: number;
    color: string;
    imageUrl: string | null;
    imageOpacity: number;
  };
}

export const initialEditorState: EditorState = {
  text: '请输入你的文案\n支持多行换行',
  selectedSize: { ratio: '9:16', width: 1080, height: 1920 },
  customWidth: 1080,
  customHeight: 1920,
  font: '"Ma Shan Zheng", cursive',
  fontSize: 48,
  fontColor: '#ffffff',
  bgColor: '#000000',
  bgImage: null,
  bgMode: 'cover',
  textAlign: 'center',
  lineHeight: 1.5,
  watermark: {
    enabled: false,
    text: '水印文字',
    position: 'bottom-right',
    opacity: 0.3,
    fontSize: 24,
    color: '#ffffff',
    imageUrl: null,
    imageOpacity: 0.3,
  },
};
