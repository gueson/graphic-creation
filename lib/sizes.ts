export interface SizeOption {
  value: string;
  labelKey: string;
  width: number;
  height: number;
}

export const sizeOptions: SizeOption[] = [
  { value: '9:16', labelKey: 'douyinVertical', width: 1080, height: 1920 },
  { value: '16:9', labelKey: 'douyinHorizontal', width: 1920, height: 1080 },
  { value: '3:4', labelKey: 'xiaohongshu', width: 1080, height: 1440 },
  { value: '4:3', labelKey: 'officialAccount', width: 1080, height: 810 },
  { value: '1:1', labelKey: 'wechatChannels', width: 1080, height: 1080 },
];
