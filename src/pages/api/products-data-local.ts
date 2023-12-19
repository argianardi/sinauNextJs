import { NextApiRequest, NextApiResponse } from 'next';

// Define tipe data untuk respon API (khusus untuk typescript)
type Data = {
  status: boolean;
  statusCode: number;
  data: {
    id: number;
    name: string;
    price: number;
    size: string;
  }[];
};

// Export sebuah fungsi bernama handler yang akan menangani API request
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Data produk yang akan dikirim sebagai respon API
  const data = [
    {
      id: 101,
      name: 'Sepatu Olahraga Nike Air Zoom Pegasus 38',
      price: 120000,
      size: '42',
    },
    {
      id: 202,
      name: 'Kamera DSLR Canon EOS 200D',
      price: 249000,
      size: 'N/A',
    },
  ];

  // Mengirim respon JSON dengan status 200 (OK) dan data produk
  res.status(200).json({ status: true, statusCode: 200, data });
}
