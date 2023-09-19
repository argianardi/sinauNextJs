import { retrieveData } from '@/utils/db/service';
import { NextApiRequest, NextApiResponse } from 'next';

// Definisikan tipe data yang akan digunakan untuk respon API (untuk typescript)
type Data = {
  status: boolean;
  statusCode: number;
  data: any;
};

// Export sebuah fungsi bernama handler yang akan menangani API request
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Data produk yang akan dikirim sebagai respon API
  const data = await retrieveData('products');

  // Mengirim respon JSON dengan status 200 (OK) dan data produk
  res.status(200).json({ status: true, statusCode: 200, data });
}
