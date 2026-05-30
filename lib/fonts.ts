export interface FontOption {
  value: string;
  label: string;
  fontFamily: string;
  fontWeight?: string;
}

export const fontOptions: FontOption[] = [
  { value: 'inherit', label: 'System Default', fontFamily: 'inherit' },
  { value: 'SimHei, sans-serif', label: 'SimHei', fontFamily: 'SimHei, sans-serif' },
  { value: 'Microsoft YaHei, sans-serif', label: 'Microsoft YaHei', fontFamily: 'Microsoft YaHei, sans-serif' },
  { value: 'SimSun, serif', label: 'SimSun', fontFamily: 'SimSun, serif' },
  { value: 'KaiTi, serif', label: 'KaiTi', fontFamily: 'KaiTi, serif' },
  { value: 'FangSong, serif', label: 'FangSong', fontFamily: 'FangSong, serif' },
  { value: '"Ma Shan Zheng", cursive', label: 'Ma Shan Zheng', fontFamily: '"Ma Shan Zheng", cursive' },
  { value: '"ZCOOL KuaiLe", sans-serif', label: 'ZCOOL KuaiLe', fontFamily: '"ZCOOL KuaiLe", sans-serif' },
  { value: '"ZCOOL QingKe HuangYou", sans-serif', label: 'ZCOOL QingKe HuangYou', fontFamily: '"ZCOOL QingKe HuangYou", sans-serif' },
  { value: '"ZCOOL XiaoWei", serif', label: 'ZCOOL XiaoWei', fontFamily: '"ZCOOL XiaoWei", serif' },
  { value: '"Noto Sans SC", sans-serif', label: 'Noto Sans SC', fontFamily: '"Noto Sans SC", sans-serif', fontWeight: '400' },
  { value: '"Noto Sans SC", sans-serif', label: 'Noto Sans SC Bold', fontFamily: '"Noto Sans SC", sans-serif', fontWeight: '700' },
  { value: '"Noto Sans SC", sans-serif', label: 'Noto Sans SC Black', fontFamily: '"Noto Sans SC", sans-serif', fontWeight: '900' },
  { value: '"Noto Serif SC", serif', label: 'Noto Serif SC', fontFamily: '"Noto Serif SC", serif', fontWeight: '400' },
  { value: '"Noto Serif SC", serif', label: 'Noto Serif SC Bold', fontFamily: '"Noto Serif SC", serif', fontWeight: '700' },
  { value: '"Noto Serif SC", serif', label: 'Noto Serif SC Black', fontFamily: '"Noto Serif SC", serif', fontWeight: '900' },
  { value: '"Montserrat", sans-serif', label: 'Montserrat', fontFamily: '"Montserrat", sans-serif', fontWeight: '400' },
  { value: '"Montserrat", sans-serif', label: 'Montserrat Bold', fontFamily: '"Montserrat", sans-serif', fontWeight: '700' },
  { value: '"Oswald", sans-serif', label: 'Oswald', fontFamily: '"Oswald", sans-serif', fontWeight: '400' },
  { value: '"Oswald", sans-serif', label: 'Oswald Bold', fontFamily: '"Oswald", sans-serif', fontWeight: '700' },
  { value: '"Poppins", sans-serif', label: 'Poppins', fontFamily: '"Poppins", sans-serif', fontWeight: '400' },
  { value: '"Poppins", sans-serif', label: 'Poppins Bold', fontFamily: '"Poppins", sans-serif', fontWeight: '700' },
  { value: '"Roboto", sans-serif', label: 'Roboto', fontFamily: '"Roboto", sans-serif', fontWeight: '400' },
  { value: '"Roboto", sans-serif', label: 'Roboto Bold', fontFamily: '"Roboto", sans-serif', fontWeight: '700' },
  { value: '"Roboto", sans-serif', label: 'Roboto Black', fontFamily: '"Roboto", sans-serif', fontWeight: '900' },
  { value: 'Arial Black, Gadget, sans-serif', label: 'Arial Black', fontFamily: 'Arial Black, Gadget, sans-serif' },
  { value: 'Impact, Charcoal, sans-serif', label: 'Impact', fontFamily: 'Impact, Charcoal, sans-serif' },
  { value: 'Comic Sans MS, cursive, sans-serif', label: 'Comic Sans MS', fontFamily: 'Comic Sans MS, cursive, sans-serif' },
  { value: 'Courier New, Courier, monospace', label: 'Courier New', fontFamily: 'Courier New, Courier, monospace' },
];
