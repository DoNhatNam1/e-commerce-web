// src/app.ts
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';  // Import cors
import productRoutes from './routes/productRoutes';
import categoryRoutes from './routes/categoryRoutes';
import orderRoutes from './routes/orderRoutes';

const app = express();

// Cấu hình EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Cấu hình CORS
app.use(cors());  // Sử dụng cors với cấu hình mặc định

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Sử dụng các route
app.use('/', productRoutes);  // Cập nhật đường dẫn route
app.use('/', categoryRoutes);  // Cập nhật đường dẫn route
app.use('/', orderRoutes);  // Cập nhật đường dẫn route

// Khởi động server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
