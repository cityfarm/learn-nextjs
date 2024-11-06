import { Inter, Lusitana } from 'next/font/google';

// Inter font with subset 'latin'
export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],  // Cấu hình trọng lượng cho Inter
});

// Lusitana font with subset 'latin'
export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],  // Cấu hình trọng lượng cho Lusitana
});
